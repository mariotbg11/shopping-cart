import { IoTicketSharp } from "react-icons/io5";

export default function Coupon() {
  return (
    <div className="flex flex-col md:flex-row gap-4 border p-3">
      <input type="text" className="w-full px-2" placeholder="Coupon Code" />
      <button className="btn btn-sm btn-primary rounded-none">
        Add Coupon <IoTicketSharp size={20} />
      </button>
    </div>
  );
}
