import Spinner from '../../ui/Spinner';
import CabinRow from "./CabinRow";
import { useCabins } from "./useCabins";
import Table from "../../ui/Table";
import Menus from '../../ui/Menus';
import { useSearchParams } from 'react-router-dom';


const CabinTable = () => {

  const [searchParams] = useSearchParams()

  const { isLoading, cabins } = useCabins()

  if (isLoading) return <Spinner />

  const filterValue = searchParams.get('discount') || 'all'


  //filter
  let filteredCabin;
  if (filterValue === 'all') filteredCabin = cabins

  if (filterValue === "no-discount") {
    filteredCabin = cabins.filter(cabin => cabin.discount === 0)
  }

  if (filterValue === "with-discount") {
    filteredCabin = cabins.filter(cabin => cabin.discount)
  }

  //sort
  const sortBy = searchParams.get('sortBy') || 'name-asc'

  const [field, direction] = sortBy.split('-')
  console.log(field, direction)
  const modifier = direction === 'asc' ? 1 : -1
  const sortedCabin = filteredCabin.sort((a, b) => (a[field] - b[field]) * modifier)


  return (
    <Menus>
      <Table columns='0.6fr 1.8fr 2.2fr 1fr 1fr 1fr'>
        <Table.Header role="row">
          <div></div>
          <div>Cabin</div>
          <div>Capacity</div>
          <div>Price</div>
          <div>Discount</div>
          <div></div>
        </Table.Header>
        <Table.Body data={sortedCabin} render={(cabin) => (<CabinRow cabin={cabin} key={cabin.id} />)} />
      </Table>
    </Menus>
  )
}


export default CabinTable

