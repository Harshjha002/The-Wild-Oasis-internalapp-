import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";

export function useCheckOut (){
    const queryClient = useQueryClient()

    const {mutate:checkout , isLoading:isCheckingOut} = useMutation({
        mutationFn:(bookingId) => updateBooking(bookingId,{
            status:'checked-out',
        }),
        onSuccess:(data) => {
            toast.success(`Booking #${data.id} succesfully checked Out`)
            queryClient.invalidateQueries({active:true});
        },

        onError: () => toast.error("there was a error while checking in")
    })

    return {checkout , isCheckingOut}
}