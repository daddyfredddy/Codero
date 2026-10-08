import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Section from "../Components/Section";

function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    function handleKeyDown(event) {
      if (
        event.ctrlKey &&
        event.shiftKey &&
        event.altKey &&
        event.key.toLowerCase() === "a"
      ) {
        event.preventDefault();
        navigate("/adminLogin");
      }
    }
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [navigate]);

  return (
    <div class="w-3/4 mx-auto">
      <Navbar />
      <Section />
    </div>
  );
}

export default Home;
