import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div className="flex items-center mt-4 justify-between">
        <Link to="/">
          <img
            src="/assets/images/logo.png"
            alt="App logo"
            class="rounded-full ml-4 w-16"
          />
        </Link>
        <div class="flex mr-4 gap-4">
          <div class="cursor-pointer hover:text-kalas">SignIn</div>
          <div class="cursor-pointer hover:text-kalas">LogOut</div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
