import styled from "styled-components";

import Button from "../../ui/Button";
import ButtonGroup from "../../ui/ButtonGroup";
import ButtonText from "../../ui/ButtonText";
import Heading from "../../ui/Heading";
import Row from "../../ui/Row";
import Tag from "../../ui/Tag";
import { useBooking } from "../bookings/useBooking";
import BookingDataBox from "./BookingDataBox";

import { useNavigate } from "react-router-dom";
import { useMoveBack } from "../../hooks/useMoveBack";
import ConfirmDelete from "../../ui/ConfirmDelete";
import Modal from "../../ui/Modal";
import Spinner from "../../ui/Spinner";
import { useCheckOut } from "../check-in-out/useCheckOut";

import { useDeleteBooking } from "./useDeleteBooking";
import Empty from "../../ui/Empty";


const HeadingGroup = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
`;

function BookingDetail() {
  const { booking, isLoading } = useBooking()
  const { checkout, isCheckingOut } = useCheckOut()
  const moveBack = useMoveBack();
  const navigate = useNavigate()
  const { deleteBooking, isDeleting } = useDeleteBooking()

  if (isLoading) return <Spinner />;
  if (!booking) return <Empty resource="booking" />


  const { status, id: bookingId } = booking;

  const statusToTagName = {
    unconfirmed: "blue",
    "checked-in": "green",
    "checked-out": "silver",
  };

  return (
    <>
      <Row type="horizontal">
        <HeadingGroup>
          <Heading as="h1">Booking #{bookingId}</Heading>
          <Tag type={statusToTagName[status]}>{status.replace("-", " ")}</Tag>
        </HeadingGroup>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <BookingDataBox booking={booking} />

      <ButtonGroup>
        {status === 'unconfirmed' && <Button onClick={() => navigate(`/checkin/${bookingId}`)}>
          Check In
        </Button>}
        <Button variation="secondary" onClick={moveBack}>
          Back
        </Button>
        {status === 'checked-in' && <Button onClick={() => checkout(bookingId)} disabled={isCheckingOut}>
          Check out
        </Button>}

        <Modal>
          <Modal.Open opens='delete'>
            <Button variation='danger'>
              Delete Booking
            </Button>

          </Modal.Open>
          <Modal.Window name='delete'>
            <ConfirmDelete
              disabled={isDeleting}
              resourceName='booking'
              onConfirm={() => deleteBooking(bookingId, { onSettled: navigate(-1) })}
            />
          </Modal.Window>
        </Modal>
      </ButtonGroup>
    </>
  );
}

export default BookingDetail;
