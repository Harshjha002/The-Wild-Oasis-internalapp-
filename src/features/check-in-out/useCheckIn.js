import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useCheckIn (){
    const queryClient = useQueryClient()
    const navigate = useNavigate()
    const {mutate:checkin , isLoading:isCheckingIn} = useMutation({
        mutationFn:({bookingId,breakfast}) => updateBooking(bookingId,{
            status:'checked-in',
            isPaid:true,
            ...breakfast
        }),
        onSuccess:(data) => {
            toast.success(`Booking #${data.id} succesfully checked in`)
            queryClient.invalidateQueries({active:true});
            navigate("/")
        },

        inError: () => toast.error("there was a error while checking in")
    })

    return {checkin , isCheckingIn}
}