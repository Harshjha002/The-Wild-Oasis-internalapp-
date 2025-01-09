import { useQuery } from "@tanstack/react-query";
import { getStaysTodayActivity } from "../../services/apiBookings";

export function useTodayaActivity(){
    const {isLoading , data:ativities} = useQuery({
        queryFn:getStaysTodayActivity,
        queryKey:['today-activity']
    })

    return {ativities , isLoading }
}