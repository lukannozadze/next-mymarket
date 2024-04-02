
export const dynamicParams = false
import data from '../../../public/data/data.json'
// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {

  return data.map((category) => ({
    category: category.id,
  }))
}
 
// Multiple versions of this page will be statically generated
// using the `params` returned by `generateStaticParams`
export default function Page({ params }: {params:{category:string}}) {
  const { category } = params
  const filterByCategory = data.filter((item)=>item.id === category);
 
  // ...

  return <>
  <span>{category}</span>
  <h1>{filterByCategory[0].name}</h1>
  
  </>
 
}