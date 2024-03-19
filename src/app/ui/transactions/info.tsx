export default function Info() {
  return (
    <div className="flex gap-1 py-2 border-b-2 border-gray-200">
      <div className="flex flex-col justify-center items-center flex-1">
        <div className="text-sm">Income</div>
        <div className="text-blue-500">0.00</div>
      </div>
      <div className="flex flex-col justify-center items-center flex-1">
        <div className="text-sm">Expenses</div>
        <div className="text-orange-500">0.00</div>
      </div>
      <div className="flex flex-col justify-center items-center flex-1">
        <div className="text-sm">Total</div>
        <div>0.00</div>
      </div>
    </div>
  );
}
