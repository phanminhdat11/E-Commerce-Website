import { Product } from "@/lib/redux/products/productSice";

interface Props {
  product: Product;
}

export default function CardProductComponent({ product }: Props) {


  return (
    <div className="rounded-2xl  p-4 shadow-lg hover:shadow-md transition">

      <div className="h-40 bg-gray-100 rounded-xl mb-3 flex items-center justify-center">
        <span className="text-gray-400 text-sm">No Image</span>
      </div>

      <p className="text-sm text-gray-500">{product.brand}</p>

      <h3 className="font-semibold text-lg line-clamp-2">{product.name}</h3>
      <div className="mt-2 flex items-center gap-2">
        <span className="text-red-500 font-bold text-lg">
          {product.price}₫
        </span>

        {product.price !== product.filnalPrice&& (
          <span className="text-gray-400 line-through text-sm">
            {product.price}₫
          </span>
        )}
      </div>


      <button className="mt-3 w-full bg-black text-white py-2 rounded-xl hover:bg-gray-800">
        Add to cart
      </button>
    </div>
  );
}