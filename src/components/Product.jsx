import { TiShoppingCart } from "react-icons/ti";

export default function Product({ item, onAddProductToCart }) {
  return (
    <li className="card card-compact w-full md:w-80 h-96 bg-base-100 shadow-xl rounded-none border">
      <figure>
        <img src={item.image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-semibold">{item.name}</h2>
        <div className="card-actions justify-start">
          <div className="badge badge-outline rounded-none">
            {item.category}
          </div>
        </div>
        <div className="card-actions items-center">
          <p className="text-xl font-bold">${item.price}</p>
          <button
            className="btn btn-sm btn-primary rounded-none"
            onClick={() => onAddProductToCart(item)}
          >
            Add <TiShoppingCart size={20} />
          </button>
        </div>
      </div>
    </li>
  );
}
