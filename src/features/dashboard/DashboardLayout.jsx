import styled from "styled-components";
import Spinner from "../../ui/Spinner";
import { useRecentBookings } from "./useRecentBooking";
import { useRecentStays } from "./useRecentStays";
import Stats from "./Stats";
import { useCabins } from "../cabins/useCabins";
import SalesChart from "./SalesChart";
import DurationChart from "./DurationChart";
import TodayActivity from '../../features/check-in-out/TodayActivity'

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;


const DashboardLayout = () => {
  const { isLoading, bookings } = useRecentBookings()
  const { isLoading: loadingStays, confirmedStays, numDays } = useRecentStays()
  const { cabins, cabinLoading } = useCabins()

  if (isLoading || loadingStays || cabinLoading) return <Spinner />



  return (
    <StyledDashboardLayout>
      <Stats bookings={bookings} confirmedStays={confirmedStays} numsDays={numDays} cabinCount={cabins.length} />
      <TodayActivity />
      <DurationChart confirmedStays={confirmedStays} />
      <SalesChart bookings={bookings} numsDays={numDays} />
    </StyledDashboardLayout>
  )
}

export default DashboardLayout

