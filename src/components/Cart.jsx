import { useEffect, useState } from "react";
import Coupon from "./Coupon";
import CartItem from "./CartItem";
import TotalOrder from "./TotalOrder";

export default function Cart({
  cartProduct,
  setCartProduct,
  handleDeleteProduct,
}) {
  const [addCoupon, setAddCoupon] = useState(false);
  const [priceTotal, setPriceTotal] = useState(0);

  function handleAddCoupon() {
    setAddCoupon((addCoupon) => !addCoupon);
  }

  const handleTotalPrice = () => {
    let total = 0;
    cartProduct.map((item) => (total += item.amount * item.price));
    setPriceTotal(total);
  };

  useEffect(() => handleTotalPrice());

  return (
    <div className="flex flex-col w-full lg:w-96 gap-6">
      <div className="h-96 p-4 border border-slate-800">
        <h3 className="font-bold">Your Cart</h3>
        <CartItem
          cartProduct={cartProduct}
          setCartProduct={setCartProduct}
          onDeleteProduct={handleDeleteProduct}
        />
      </div>
      <TotalOrder priceTotal={priceTotal} handleTotalPrice={handleTotalPrice} />
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
