import data from '../../../../public/data/data.json'
export const dynamicParams = false

type Props = {
  params:{category:string,productId:string}
}


export default function page({params}:Props) {
  
  const {category,productId} = params
  const [filterByCategory] = data.filter((item)=>item.id === category);
  const [product] = filterByCategory.items.filter((product)=>product.id===parseInt(productId))
   if(!product){
    return <div>Not Found!</div>
   }

  return (
    <div>{product.brand}</div>
  )
}