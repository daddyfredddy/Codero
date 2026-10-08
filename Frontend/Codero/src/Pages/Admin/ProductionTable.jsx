import { FaPlus } from "react-icons/fa";

function ProductionTable() {
  return (
    <div>
      <div class="flex justify-between items-center">
        <button className="bg-gray-900 hover:bg-kalas text-white py-2 px-4 rounded-2xl cursor-pointer">
          Active Productions
        </button>
        <button className="flex bg-gray-900 hover:bg-kalas text-white py-2 px-4 rounded-2xl cursor-pointer">
          <FaPlus className="inline-block mr-2 mt-1" />
          <p>New Production</p>
        </button>
      </div>
      <div class="flex justify-center">
        <p className=" font-bold">TODAY's REPORT</p>
      </div>
    </div>
  );
}

export default ProductionTable;
