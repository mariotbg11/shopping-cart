import { MdShoppingCartCheckout } from "react-icons/md";

export default function TotalOrder() {
  return (
    <div className="text-end border p-3">
      <div className="flex flex-col justify-center">
        <h2 className="font-bold text-2xl pb-2">Total Order</h2>
        <p className="font-semibold text-xl pb-2">$1000</p>
      </div>
      <button className="btn btn-sm w-full btn-primary rounded-none">
        Checkout <MdShoppingCartCheckout />
      </button>
    </div>
  );
}
