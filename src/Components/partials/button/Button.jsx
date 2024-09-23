import "./button.css";

const Button = ({ Text }) => {
  return (
    <div className="flex p-[2px] rounded-md bg-gradient-to-b from-secondarybgColor to-tertiaryTextColor">
      <a
        href="#"
        className="py-4 px-12 rounded-md bg-gradient-to-b hover:from-primarybgColor from-100% hover:to-secondarybgColor to-0% hover:duration-500 hover:ease-in-out"
      >
        {Text}
      </a>
    </div>
  );
};

export default Button;
