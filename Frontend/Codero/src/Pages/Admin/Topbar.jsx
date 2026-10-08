import { FaSistrix } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaBell } from "react-icons/fa";

function Topbar() {
  return (
    <div>
      <header class="justify-end flex items-center gap-4 mt-6 p-2">
        <h1 class="mr-16 text-2xl">Admin Dashboard</h1>
        <p className="text-lg text-kalas">Search</p>
        <div class="relative">
          <FaSistrix class="absolute mt-1.5 text-kalas mx-1.5" />
          <input
            type="text"
            placeholder="Search Code..."
            class="w-full outline-none rounded-3xl border border-kalas pl-6 "
          />
        </div>

        <FaMoon class="border rounded-full border-kalas text-3xl p-1 cursor-pointer hover:text-kalas " />
        <FaBell class="border rounded-full border-kalas text-3xl p-1 cursor-pointer hover:text-kalas" />
        <FaUser class="border rounded-full border-kalas text-3xl p-1 cursor-pointer hover:text-kalas" />
      </header>
    </div>
  );
}

export default Topbar;
