import Description from "@/components/detail/Description";
import data from "../../../../../public/data/data.json";
export const dynamicParams = false;

type Props = {
  params: { category: string; productId: string };
};
export default function page({ params }: Props) {
  const { category, productId } = params;
  const [filterByCategory] = data.filter((item) => item.id === category);
  const [product] = filterByCategory.items.filter(
    (product) => product.id === parseInt(productId)
  );
  if (!product) {
    return <div>Not Found!</div>;
  }
  return <div className="py-8 w-full flex  bg-white mx-auto">
  <div className="w-full">
    <section className="w-full flex items-center justify-center">
      <div className="w-[1440px] bg-white px-6">
    <Description category={category} productId={productId}/>
      </div>
  </section>
  </div>
  </div>
}
