import { useMutation } from "@tanstack/react-query"
import { signup as signupAPI } from "../../services/apiAuth"
import toast from "react-hot-toast"

export const useSignup = () => {
    const {mutate:signup , isLoading} = useMutation({
        mutationFn:signupAPI,
        onSuccess:(user) => {
            toast.success("account succesFfully Created!. please verify the new account from the user \n's email address")
        }
    })

    return {signup , isLoading}
}