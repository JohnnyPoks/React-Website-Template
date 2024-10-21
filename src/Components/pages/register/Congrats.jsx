import congrats from "../../../assets/congrats/congrats.png";
import Button from "../../partials/button/Button";

const Congrats = () => {
  return (
    <div className="absolute min-h-full min-w-full top-0 left-0 flex items-center justify-center z-50 bg-[#150e28ee]">
      <div className="flex flex-col justify-center text-center border-2 border-secondarybgColor border-solid rounded-xl p-20 mt-20">
        <img src={congrats} alt="Boy sitting" />
        <h1 className="text-2xl font-bold mb-5">
          Congratulations <br /> you have successfully Registered!
        </h1>
        <p className="text-lg mb-5">
          Yes, it was easy and you did it! <br /> check your mail box for next
          step 😉
        </p>
        <Button Text="Back" />
      </div>
    </div>
  );
};

export default Congrats;
