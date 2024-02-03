import { TiDelete } from "react-icons/ti";

export default function CartItem({ cartProduct, setCartProduct }) {
  return (
    <div className="h-72 mt-4 overflow-y-auto overflow-x-hidden">
      {cartProduct.length === 0 ? (
        <div className="flex flex-col justify-center items-center h-72 text-center">
          <p>Your cart is empty... Let's start shopping now! 👟</p>
        </div>
      ) : (
        <ul>
          {cartProduct.map((item) => (
            <li
              className="grid grid-cols-5 items-center gap-2 border p-2 mb-3"
              key={item.id}
            >
              <img src={item.image} alt="" className="col-span-1 w-14 h-14" />
              <div className="col-start-2 col-end-5 gap-4">
                <div className="flex flex-col gap-2">
                  <h3 className="text-xs">{item.name}</h3>
                  <p>${item.price}</p>
                </div>
              </div>
              <div className="flex flex-col justify-center items-end gap-2 col-start-5 col-span-5">
                <button>
                  <TiDelete size={23} />
                </button>
                <div className="flex gap-2">
                  <button className="text-xs border px-1">-</button>
                  <p className="text-xs">1</p>
                  <button className="text-xs border px-1">+</button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
