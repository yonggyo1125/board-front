import Map from './_global/components/Map'
import { getHospitals } from './detect/_libs/utils'
export default async function MainPage() {
  const items = await getHospitals()
  console.log('items', items)
  return <Map />
}
