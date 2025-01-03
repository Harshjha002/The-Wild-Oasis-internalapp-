import supabase, { supabaseUrl } from "./supabase";

// Fetch all cabins from the database
export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*"); // Query the database for all cabins

  if (error) {
    console.error("Error fetching cabins:", error); // Log the error if fetching cabins fails
    throw new Error("Cabins could not be loaded."); // Throw a user-friendly error
  }

  return data; // Return the fetched cabins
}

// Create or edit a cabin and upload its image
export async function createEditCabin(newCabin, id) {
  // Check if the image path is already present
  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);

  // Generate a unique image name
  const imageName = `${Math.random()}-${newCabin.image.name}`.replace("/", "");

  // Construct the complete image path
  const imagePath = hasImagePath
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  // Prepare the query: insert for new cabin or update for existing one
  let query = supabase.from("cabins");
  query = id
    ? query.update({ ...newCabin, image: imagePath }).eq("id", id) // Update existing cabin
    : query.insert([{ ...newCabin, image: imagePath }]); // Insert new cabin

  const { data, error } = await query.select().single(); // Execute the query and fetch the result

  if (error) {
    console.error("Error creating/editing cabin:", error); // Log the error if query fails
    throw new Error("Cabin could not be created/edited."); // Throw a user-friendly error
  }

  if(hasImagePath) return data;

  // Upload the cabin image to storage
  const { error: storageError } = await supabase
    .storage
    .from("cabin-images")
    .upload(imageName, newCabin.image);

  if (storageError) {
    // Rollback cabin creation if image upload fails
    if (!id) await supabase.from("cabins").delete().eq("id", data.id);
    console.error("Error uploading cabin image:", storageError); // Log the error if image upload fails
    throw new Error(
      "Cabin image could not be uploaded, so the cabin was not saved."
    ); // Throw a user-friendly error
  }

  return data; // Return the cabin data after successful creation/edit
}

// Delete a cabin by its ID
export const deleteCabin = async (id) => {
  const { error } = await supabase.from("cabins").delete().eq("id", id); // Query the database to delete the cabin

  if (error) {
    console.error("Error deleting cabin:", error); // Log the error if deletion fails
    throw new Error("Cabin could not be deleted."); // Throw a user-friendly error
  }
};
