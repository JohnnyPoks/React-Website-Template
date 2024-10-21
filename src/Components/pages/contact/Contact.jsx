import Button from "../../partials/button/Button";
import "./contact.css";

const Contact = () => {
  return (
    <div className="flex justify-around items-center p-10">
      <div className="flex flex-col gap-5 text-xl">
        <h1 className="text-secondaryTextColor text-3xl font-bold">
          Get in touch
        </h1>
        <p>
          Contact <br /> Information
        </p>
        <p>
          Molyko, <br />
          Buea southWest, <br />
          Cameroon
        </p>
        <p>Call us : 0123456789</p>
        <p>
          we are open from Monday-Friday <br /> 08:00am-05:00pm
        </p>
        <p className="text-secondaryTextColor">Share on</p>
      </div>
      <div className="flex flex-col gap-10 bg-[#ffffff08] p-10 rounded-xl justify-center items-center shadow-2xl">
        <h1 className="text-secondaryTextColor text-3xl font-bold w-[550px]">
          Questions or need Assistance?
          <br /> Let us know about it!
        </h1>
        <input
          type="text"
          placeholder="First Name"
          className="bg-transparent border-2 border-white border-solid rounded h-14 pl-5 w-[550px]"
        />
        <input
          type="email"
          placeholder="Email"
          className="bg-transparent border-2 border-white border-solid rounded h-14 pl-5 w-[550px]"
        />
        <textarea
          name="message"
          id="message"
          placeholder="message"
          className="bg-transparent border-2 border-white border-solid rounded h-52 pl-5 pt-3 w-[550px]"
        />
        <div className="flex justify-center">
          <Button Text="Submit" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
