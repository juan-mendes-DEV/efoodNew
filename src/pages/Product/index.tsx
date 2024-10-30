import { useParams } from 'react-router-dom'

const Product = () => {
  //desestruturando useParams
  const { id } = useParams()

  return <div>produto {id}</div>
}
export default Product
