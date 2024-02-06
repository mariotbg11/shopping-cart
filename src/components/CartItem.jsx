import { TiDelete } from "react-icons/ti";

export default function CartItem({
  cartProduct,
  setCartProduct,
  onDeleteProduct,
}) {
  return (
    <div className="h-72 mt-4 overflow-y-auto overflow-x-hidden">
      {cartProduct.length === 0 ? (
        <div className="flex flex-col justify-center items-center h-72 text-center">
          <p>Your cart is empty... start shopping now! 👟</p>
        </div>
      ) : (
        <ul>
          {cartProduct.map((item) => (
            <li
              className="grid grid-cols-5 items-center gap-2 p-2 mb-3 border border-slate-800"
              key={item.id}
            >
              <img
                src={item.image}
                alt=""
                className="col-span-1 w-14 h-14 border border-slate-800"
              />
              <div className="col-start-2 col-end-5 gap-4">
                <div className="flex flex-col gap-2">
                  <h3 className="text-xs">{item.name}</h3>
                  <p>${item.price}</p>
                </div>
              </div>
              <div className="flex flex-col justify-center items-end gap-2 col-start-5 col-span-5">
                <button onClick={() => onDeleteProduct(item.id)}>
                  <TiDelete size={23} />
                </button>
                <div className="flex gap-2">
                  <button
                    className="text-xs px-1 border border-slate-800"
                    onClick={() => {
                      setCartProduct((prevCartProduct) => {
                        const updatedCart = prevCartProduct.map((prevItem) =>
                          prevItem.id === item.id
                            ? {
                                ...prevItem,
                                amount: Math.max(item.amount - 1, 0),
                              }
                            : prevItem
                        );
                        return updatedCart;
                      });
                    }}
                  >
                    -
                  </button>
                  <button className="text-xs">{item.amount}</button>
                  <button
                    className="text-xs px-1 border border-slate-800"
                    onClick={() => {
                      setCartProduct((prevCartProduct) => {
                        const updatedCart = prevCartProduct.map((prevItem) =>
                          prevItem.id === item.id
                            ? { ...prevItem, amount: item.amount + 1 }
                            : prevItem
                        );
                        return updatedCart;
                      });
                    }}
                  >
                    +
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
