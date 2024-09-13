import { useState } from "react";
import "./navbar.css";
import Button from "../button/Button";

const Navbar = () => {
  const navigation = [
    { name: "Timeline", href: "Timeline" },
    { name: "Overview", href: "Overview" },
    { name: "FAQs", href: "FAQs" },
    { name: "Contact", href: "Contact" },
  ];

  const [activeNav, setActiveNav] = useState("#");

  return (
    <header className="header">
      <div className="">
        <a href="#" className="text-5xl/[0] font-[600]">
          get<span className="text-secondaryTextColor">Linked</span>
        </a>
      </div>
      <div className="flex items-center justify-between">
        <div className="mr-14">
          <nav className="navbar text-base font-[500]">
            {navigation.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={() => setActiveNav(item.href)}
                className={
                  activeNav === item.href
                    ? "text-secondaryTextColor active links"
                    : "links"
                }
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
        <div className="">
          <Button />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
