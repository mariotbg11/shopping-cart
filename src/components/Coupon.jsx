import { IoTicketSharp } from "react-icons/io5";

export default function Coupon() {
  return (
    <div className="flex justify-between gap-4 w-full lg:w-96 border p-4">
      <input type="text" className="w-full" />
      <button className="btn btn-sm btn-primary rounded-none">
        Add Coupon <IoTicketSharp size={20} />
      </button>
    </div>
  );
}
