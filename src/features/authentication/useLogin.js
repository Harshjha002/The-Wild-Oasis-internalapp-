import { useMutation, useQueryClient } from "@tanstack/react-query"
import { login as loginAPI } from "../../services/apiAuth"
import { useNavigate } from "react-router-dom"
import toast from "react-hot-toast"

export const useLogin = () => {
    const queryClient = useQueryClient()
    const navigate = useNavigate()
   const {mutate:login , isLoading:isLogin} =  useMutation({
        mutationFn:({email,password}) => loginAPI({email,password}),
        onSuccess:(user) => {
            queryClient.setQueryData(['user'],user.user)
            toast.success('Logged in Succesfull')
            navigate('/',{replace:true})
            console.log(user)
        },
        onError: err => {
            console.log("Error " , err)
            toast.error('provided email or password is incorrect')
        }
    })

    return {login , isLogin}

}