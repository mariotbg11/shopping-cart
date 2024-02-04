import { useState } from "react";
import Coupon from "./Coupon";
import CartItem from "./CartItem";
import TotalOrder from "./TotalOrder";

export default function Cart({ cartProduct, handleDeleteProduct }) {
  const [addCoupon, setAddCoupon] = useState(false);

  function handleAddCoupon() {
    setAddCoupon((addCoupon) => !addCoupon);
  }

  return (
    <div className="flex flex-col w-full lg:w-96 gap-6">
      <div className="h-96 p-4 border border-slate-800">
        <h3 className="font-bold">Your Cart</h3>
        <CartItem
          cartProduct={cartProduct}
          onDeleteProduct={handleDeleteProduct}
        />
      </div>
      <TotalOrder />
      {addCoupon && <Coupon />}
      <div className="flex flex-col items-end pr-3">
        <button
          className="btn btn-md btn-primary rounded-none"
          onClick={handleAddCoupon}
        >
          {addCoupon ? "Close" : "Got a Coupon?"}
        </button>
      </div>
    </div>
  );
}
