import { useState } from "react";
import "./register.css";
import Button from "../../partials/button/Button";
import register from "../../../assets/register/register.png";
import move from "../../../assets/register/move.png";
import Congrats from "./Congrats";

const Register = () => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className="flex items-center px-20 pt-5">
      {isClicked && <Congrats />}
      <div className="flex basis-1/2 justify-center items-center">
        <img src={register} alt="Boy sitting" className="h-[45em]" />
      </div>
      <div className="flex flex-col basis-1/2 gap-5 bg-[#ffffff10] px-20 py-14 rounded-xl shadow-2xl">
        <h1 className="text-secondaryTextColor text-3xl font-bold">Register</h1>
        <img src={move} alt="Moving People" className="w-96" />
        <h1 className="text-3xl">CREATE YOUR ACCOUNT</h1>
        <div className="grid grid-cols-2 gap-5">
          <div className="flex flex-col gap-2">
            <label htmlFor="name">Team&apos;s Name</label>
            <input
              id="name"
              type="text"
              placeholder="Enter the name of your group"
              className="bg-transparent border-2 border-white border-solid rounded h-14 pl-5"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="number">Phone</label>
            <input
              id="number"
              type="number"
              placeholder="Enter your phone number"
              className="bg-transparent border-2 border-white border-solid rounded h-14 pl-5"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email address"
              className="bg-transparent border-2 border-white border-solid rounded h-14 pl-5"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="title">Project Topic</label>
            <input
              id="title"
              type="email"
              placeholder="What is your group project topic"
              className="bg-transparent border-2 border-white border-solid rounded h-14 pl-5"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="category">Category</label>
            <select
              name="category"
              id="category"
              className="bg-transparent border-2 border-white border-solid rounded h-14 px-5"
            >
              <option value="" className="">
                Select your Category
              </option>
              <option value="" className="">
                Category 1
              </option>
              <option value="" className="">
                Category 2
              </option>
              <option value="" className="">
                Category 3
              </option>
              <option value="" className="">
                Category 4
              </option>
              <option value="" className="">
                Category 5
              </option>
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="category">Group Size</label>
            <select
              name="category"
              id="category"
              className="bg-transparent border-2 border-white border-solid rounded h-14 px-5"
            >
              <option value="" className="">
                Select
              </option>
              <option value="" className="">
                1
              </option>
              <option value="" className="">
                2
              </option>
              <option value="" className="">
                3
              </option>
              <option value="" className="">
                4
              </option>
              <option value="" className="">
                5
              </option>
            </select>
          </div>
        </div>
        <p className="text-tertiaryTextColor">
          Please review your registration details before submitting
        </p>
        <div>
          <p>I agreed with the event terms and conditions and privacy policy</p>
        </div>
        <div className="text-center" onClick={() => setIsClicked(true)}>
          <Button Text="Register Now" />
        </div>
      </div>
    </div>
  );
};

export default Register;
