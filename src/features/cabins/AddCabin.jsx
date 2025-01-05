
import Button from '../../ui/Button';
import CreateCabinForm from './CreateCabinForm';
import Modal from '../../ui/Modal';

const AddCabin = () => {

    return (
        <div>
            <Modal>
                <Modal.Open opens='cabin-form'>
                    <Button>Add new Cabin</Button>
                </Modal.Open>
                <Modal.Window name='cabin-form'>
                    <CreateCabinForm />
                </Modal.Window>
            </Modal>
        </div>
    )

};

export default AddCabin;

// const [isOpenModel, setIsOpenModel] = useState(false);
// return(
// <div>
//     <Button onClick={() => setIsOpenModel((prev) => !prev)}>Add New Cabin</Button>
//     {isOpenModel && (
//         <Modal onClose={() => setIsOpenModel(false)}>
//             <CreateCabinForm onCloseModel={() => setIsOpenModel(false)} />
//         </Modal>
//     )}
// </div>
//  )