import CartItem from "./CartItem";
import TotalOrder from "./TotalOrder";

export default function Cart({
  cartProduct,
  setCartProduct,
  handleDeleteProduct,
}) {
  const handleTotalPrice = () => {
    return cartProduct.reduce(
      (total, item) => total + item.amount * item.price,
      0
    );
  };

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
      <TotalOrder
        cartProduct={cartProduct}
        handleTotalPrice={handleTotalPrice}
      />
    </div>
  );
}
