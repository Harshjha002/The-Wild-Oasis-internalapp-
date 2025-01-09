/* eslint-disable react/prop-types */

import { HiOutlineBriefcase, HiOutlineChartBar } from "react-icons/hi";
import Stat from "./Stat";
import { HiOutlineBanknotes, HiOutlineCalendarDays } from "react-icons/hi2";
import { formatCurrency } from "../../utils/helpers";

const Stats = ({ bookings, confirmedStays, numsDays, cabinCount }) => {
    //bookings
    const numsBookings = bookings.length;

    //sales
    const sales = bookings.reduce((acc, crr) => acc + crr.totalPrice, 0)

    //check-ins
    const checkins = confirmedStays.length;

    //occupancy rate
    const occupations = confirmedStays.reduce((acc, crr) => acc + crr.numNights, 0) / (numsDays * cabinCount)

    return (
        <>
            <Stat title="Bookings" color='blue' icon={<HiOutlineBriefcase />} value={numsBookings} />
            <Stat title="Sales" color='green' icon={<HiOutlineBanknotes />} value={formatCurrency(sales)} />
            <Stat title="Check ins" color='indigo' icon={<HiOutlineCalendarDays />} value={checkins} />
            <Stat title="Occupancy rate" color='yellow' icon={<HiOutlineChartBar />} value={Math.round(occupations * 100) + "%"} />
        </>
    )
}

export default Stats
