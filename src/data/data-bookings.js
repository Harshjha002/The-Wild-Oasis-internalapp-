import { add } from 'date-fns';

function fromToday(numDays, withTime = false) {
  const date = add(new Date(), { days: numDays });
  if (!withTime) date.setUTCHours(0, 0, 0, 0);
  return date.toISOString().slice(0, -1);
}

export const bookings = [
  {
    created_at: "2025-04-10T11:51:57.808416",
    startDate: "2025-05-01T00:00:00",
    endDate: "2025-05-06T00:00:00",
    cabinId: 1,
    guestId: 1,
    hasBreakfast: true,
    observations: "Celebrating a birthday!",
    isPaid: false,
    numGuests: 1
  },
  {
    created_at: "2025-03-27T11:51:57.808450",
    startDate: "2025-04-29T00:00:00",
    endDate: "2025-05-04T00:00:00",
    cabinId: 4,
    guestId: 2,
    hasBreakfast: true,
    observations: "Anniversary stay, please prepare something special.",
    isPaid: true,
    numGuests: 5
  },
  {
    created_at: "2025-04-12T11:51:57.808474",
    startDate: "2025-04-23T00:00:00",
    endDate: "2025-04-25T00:00:00",
    cabinId: 6,
    guestId: 3,
    hasBreakfast: false,
    observations: "Celebrating a birthday!",
    isPaid: false,
    numGuests: 5
  },
  {
    created_at: "2025-04-05T11:51:57.808416",
    startDate: "2025-04-16T00:00:00",
    endDate: "2025-04-20T00:00:00",
    cabinId: 1,
    guestId: 4,
    hasBreakfast: false,
    observations: "Late check-in expected.",
    isPaid: true,
    numGuests: 2
  },
  {
    created_at: "2025-03-18T11:51:57.808417",
    startDate: "2025-04-20T00:00:00",
    endDate: "2025-04-24T00:00:00",
    cabinId: 2,
    guestId: 5,
    hasBreakfast: true,
    observations: "Please prepare a vegetarian breakfast.",
    isPaid: true,
    numGuests: 3
  },
  {
    created_at: "2025-04-07T11:51:57.808452",
    startDate: "2025-04-12T00:00:00",
    endDate: "2025-04-15T00:00:00",
    cabinId: 3,
    guestId: 6,
    hasBreakfast: true,
    observations: "",
    isPaid: true,
    numGuests: 4
  },
  {
    created_at: "2025-03-22T11:51:57.808459",
    startDate: "2025-04-18T00:00:00",
    endDate: "2025-04-22T00:00:00",
    cabinId: 5,
    guestId: 7,
    hasBreakfast: false,
    observations: "Late check-in expected.",
    isPaid: true,
    numGuests: 2
  },
  {
    created_at: "2025-04-09T11:51:57.808464",
    startDate: "2025-04-30T00:00:00",
    endDate: "2025-05-02T00:00:00",
    cabinId: 4,
    guestId: 8,
    hasBreakfast: false,
    observations: "No special requests.",
    isPaid: false,
    numGuests: 2
  },
  {
    created_at: "2025-04-01T11:51:57.808470",
    startDate: "2025-04-25T00:00:00",
    endDate: "2025-04-28T00:00:00",
    cabinId: 6,
    guestId: 9,
    hasBreakfast: true,
    observations: "Anniversary stay, please prepare something special.",
    isPaid: true,
    numGuests: 2
  },
  {
    created_at: "2025-03-15T11:51:57.808475",
    startDate: "2025-05-03T00:00:00",
    endDate: "2025-05-08T00:00:00",
    cabinId: 7,
    guestId: 10,
    hasBreakfast: true,
    observations: "Celebrating an anniversary.",
    isPaid: true,
    numGuests: 3
  },
  {
    created_at: "2025-03-20T11:51:57.808477",
    startDate: "2025-05-10T00:00:00",
    endDate: "2025-05-14T00:00:00",
    cabinId: 8,
    guestId: 11,
    hasBreakfast: true,
    observations: "Quiet cabin, please.",
    isPaid: true,
    numGuests: 2
  },
  {
    created_at: "2025-04-08T11:51:57.808479",
    startDate: "2025-05-05T00:00:00",
    endDate: "2025-05-09T00:00:00",
    cabinId: 2,
    guestId: 12,
    hasBreakfast: false,
    observations: "No special requests.",
    isPaid: true,
    numGuests: 4
  },
  {
    created_at: "2025-04-13T11:51:57.808482",
    startDate: "2025-05-08T00:00:00",
    endDate: "2025-05-12T00:00:00",
    cabinId: 5,
    guestId: 13,
    hasBreakfast: true,
    observations: "Please prepare vegetarian breakfast.",
    isPaid: false,
    numGuests: 2
  },
  {
    created_at: "2025-03-23T11:51:57.808484",
    startDate: "2025-04-27T00:00:00",
    endDate: "2025-05-01T00:00:00",
    cabinId: 1,
    guestId: 14,
    hasBreakfast: true,
    observations: "Gluten-free breakfast, please.",
    isPaid: true,
    numGuests: 2
  },
  {
    created_at: "2025-04-04T11:51:57.808485",
    startDate: "2025-05-01T00:00:00",
    endDate: "2025-05-05T00:00:00",
    cabinId: 6,
    guestId: 15,
    hasBreakfast: false,
    observations: "Late check-in expected.",
    isPaid: true,
    numGuests: 4
  },
  {
    created_at: "2025-03-29T11:51:57.808487",
    startDate: "2025-04-18T00:00:00",
    endDate: "2025-04-23T00:00:00",
    cabinId: 3,
    guestId: 16,
    hasBreakfast: true,
    observations: "Please prepare vegetarian breakfast.",
    isPaid: true,
    numGuests: 5
  },
  {
    created_at: "2025-03-30T11:51:57.808490",
    startDate: "2025-05-04T00:00:00",
    endDate: "2025-05-09T00:00:00",
    cabinId: 4,
    guestId: 17,
    hasBreakfast: true,
    observations: "Quiet cabin, please.",
    isPaid: false,
    numGuests: 4
  },
  {
    created_at: "2025-04-14T11:51:57.808492",
    startDate: "2025-04-22T00:00:00",
    endDate: "2025-04-24T00:00:00",
    cabinId: 2,
    guestId: 18,
    hasBreakfast: false,
    observations: "Late check-in expected.",
    isPaid: true,
    numGuests: 3
  },
  {
    created_at: "2025-03-28T11:51:57.808493",
    startDate: "2025-04-26T00:00:00",
    endDate: "2025-04-30T00:00:00",
    cabinId: 6,
    guestId: 19,
    hasBreakfast: true,
    observations: "Anniversary stay, please prepare something special.",
    isPaid: true,
    numGuests: 2
  },
  {
    created_at: "2025-04-02T11:51:57.808494",
    startDate: "2025-05-02T00:00:00",
    endDate: "2025-05-05T00:00:00",
    cabinId: 1,
    guestId: 20,
    hasBreakfast: false,
    observations: "Please prepare a vegetarian breakfast.",
    isPaid: false,
    numGuests: 1
  }
]
