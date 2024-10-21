import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./button.css";

const Button = ({ Text }) => {
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const handleButtonClick = () => {
      Text === "Register" && setIsClicked(true);
    };
    window.addEventListener("click", handleButtonClick);
    return () => {
      window.removeEventListener("click", handleButtonClick);
      setIsClicked(false);
    };
  }, [Text]);

  return (
    <Link to={Text.includes("Register") ? "/register" : "/"}>
      <div className="flex p-[2px] rounded-md bg-gradient-to-r from-tertiaryTextColor  to-secondarybgColor">
        <a
          href="#"
          className={
            isClicked && Text === "Register"
              ? "py-4 px-12 rounded-md bg-gradient-to-r from-100% from-primarybgColor hover:from-tertiaryTextColor hover:from-0% hover:to-secondarybgColor hover:duration-500 hover:ease-in-out w-full"
              : "py-4 px-12 rounded-md bg-gradient-to-r hover:from-primarybgColor from-100% hover:to-secondarybgColor to-0% hover:duration-500 hover:ease-in-out w-full"
          }
        >
          {Text}
        </a>
      </div>
    </Link>
  );
};

export default Button;
