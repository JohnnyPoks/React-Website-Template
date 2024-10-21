import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import Button from "../button/Button";

const Navbar = () => {
  const navigation = [
    { name: "Timeline", href: "/#Timeline" },
    { name: "Overview", href: "/#Overview" },
    { name: "FAQs", href: "/#FAQs" },
    { name: "Contact", href: "/contact" },
  ];

  const [activeNav, setActiveNav] = useState("#");
  const [toggle, setToggle] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleScreenResize = () => {
      const screenWidth = window.innerWidth < 1024;
      setToggleMenu(screenWidth);
      if (!toggleMenu) {
        setToggle(false);
      }
    };

    window.addEventListener("resize", handleScreenResize);
    return () => {
      window.removeEventListener("resize", handleScreenResize);
    };
  }, [toggleMenu]);

  return (
    <header className="z-[100] w-full bg-primarybgColor flex justify-between max-lg:justify-around lg:px-20 xl:px-40 items-center py-5 pt-10 sticky top-0 border-b-separator border-b-[1px] border-solid border-x-0 border-t-0">
      {!toggle && (
        <a href="/" className="text-5xl/[0] font-[600]">
          get<span className="text-secondaryTextColor">Linked</span>
        </a>
      )}

      <nav
        className={
          toggle
            ? "flex flex-col gap-10"
            : "hidden lg:flex lg:gap-40 lg:max-xl:gap-20 items-center"
        }
      >
        <div
          className={` links flex lg:gap-10 ${toggle ? "flex-col gap-5" : ""}`}
        >
          {navigation.map((item, index) => (
            <Link
              key={index}
              to={item.href}
              onClick={() => {
                setActiveNav(item.name);
                setToggle(false);
              }}
              className={
                activeNav === item.name ? "active" : "text-primaryTextColor"
              }
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div onClick={() => setToggle(false)}>
          <Button Text={"Register"} />
        </div>
      </nav>

      {toggleMenu && (
        <div
          className={
            toggle
              ? "self-start rounded-full p-[3px] bg-gradient-to-b from-secondarybgColor to-tertiaryTextColor"
              : ""
          }
        >
          <span
            className={`material-symbols-outlined cursor-pointer hover:bg-slate-700 p-2 rounded lg:hidden ${
              toggle
                ? "border rounded-full bg-gradient-to-b from-primarybgColor from-100% hover:from-secondarybgColor hover:from-30% hover:to-tertiaryTextColor"
                : ""
            }`}
            onClick={() => setToggle(!toggle)}
          >
            {toggle ? "close" : "menu"}
          </span>
        </div>
      )}
    </header>
  );
};

export default Navbar;
