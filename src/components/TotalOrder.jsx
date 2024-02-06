import { MdShoppingCartCheckout } from "react-icons/md";

export default function TotalOrder({ cartProduct, handleTotalPrice }) {
  return (
    <div className="text-end p-3 border border-slate-800">
      <div className="flex flex-col justify-center">
        <h2 className="font-bold text-2xl pb-2">Total Order</h2>
        <p className="font-semibold text-xl pb-2">${handleTotalPrice()}</p>
      </div>
      <button
        className="btn btn-sm w-full btn-primary rounded-none"
        disabled={cartProduct.length === 0 || handleTotalPrice() === 0}
      >
        Checkout <MdShoppingCartCheckout />
      </button>
    </div>
  );
}
