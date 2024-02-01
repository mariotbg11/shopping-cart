import { useState } from "react";
import Coupon from "./Coupon";

export default function Cart() {
  const [addCoupon, setAddCoupon] = useState(false);

  function handleAddCoupon() {
    setAddCoupon((addCoupon) => !addCoupon);
  }

  return (
    <div className="flex flex-col lg:w-96 gap-6">
      <div className="h-96 border p-4">
        <h3>Your Cart</h3>
      </div>
      {addCoupon && <Coupon />}
      <div className="flex flex-col items-end">
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
