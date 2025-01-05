/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Textarea from "../../ui/Textarea";
import { useCreateCabin } from "./UseCreateCabin";
import { useEditCabin } from "./useEditCabin";

function CreateCabinForm({ cabinToEdit = {}, onCloseModal }) {
  const { id: editId, ...editValues } = cabinToEdit;
  const isEditSession = Boolean(editId)
  const { isCreating, createCabin } = useCreateCabin()
  const { isEditing, editCabin } = useEditCabin();
  const isWorking = isCreating || isEditing


  const { register, handleSubmit, reset, getValues, formState } = useForm({
    defaultValues: isEditSession ? editValues : {}
  });
  const { errors } = formState;

  const onError = (errors) => {
    console.log(errors);
  };


  const onSubmit = (data) => {
    const image = typeof data.image === 'string' ? data.image : data.image[0];

    if (isEditSession) {
      editCabin(
        { newCabinData: { ...data, image }, id: editId },
        {
          onSuccess: () => {
            reset();
            onCloseModal?.();
          }
        }
      );
    } else {
      createCabin({ ...data, image }, {
        onSuccess: () => {
          reset();
          onCloseModal?.();
        }
      });
    }
  };


  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)} type={onCloseModal ? "model" : 'regular'}>
      {/* Cabin Name */}
      <FormRow label="Cabin Name" error={errors?.name?.message}>
        <Input
          type="text"
          id="name"
          {...register("name", {
            required: "This field is required",
          })}
        />
      </FormRow>

      {/* Maximum Capacity */}
      <FormRow label="Maximum Capacity" error={errors?.maxCapacity?.message}>
        <Input
          disabled={isCreating}
          type="number"
          id="maxCapacity"
          {...register("maxCapacity", {
            required: "This field is required",
            min: {
              value: 1,
              message: "Capacity should be at least 1",
            },
          })}
        />
      </FormRow>

      {/* Regular Price */}
      <FormRow label="Regular Price" error={errors?.regularPrice?.message}>
        <Input
          disabled={isWorking}
          type="number"
          id="regularPrice"
          {...register("regularPrice", {
            required: "This field is required",
            min: {
              value: 1,
              message: "Price should be at least 1",
            },
          })}
        />
      </FormRow>

      {/* Discount */}
      <FormRow label="Discount" error={errors?.discount?.message}>
        <Input
          disabled={isWorking}
          type="number"
          id="discount"
          defaultValue={0}
          {...register("discount", {
            required: "This field is required",
            validate: (value) =>
              value < getValues().regularPrice ||
              "Discount should be less than the regular price",
          })}
        />
      </FormRow>

      {/* Description */}
      <FormRow label="Description" error={errors?.description?.message}>
        <Textarea
          id="description"
          {...register("description", {
            required: "This field is required",
          })}
        />
      </FormRow>

      {/* Cabin Photo */}
      <FormRow label="Cabin Photo">
        <FileInput
          id="image"
          accept="image/*"
          {...register("image", {
            required: isEditSession ? false : "Please upload a photo",
          })}
        />
      </FormRow>

      {/* Form Buttons */}
      <FormRow>
        <Button variation="secondary" type="reset" onClick={() => onCloseModal()}>
          Cancel
        </Button>
        <Button disabled={isWorking}>{isEditSession ? 'Edit Cabin' : "Create New Cabin"}</Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
