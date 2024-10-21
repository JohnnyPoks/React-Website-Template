import "./ppterms.css";
import boy from "../../../../assets/home/ppterms/boy.png";
import Button from "../../../partials/button/Button";

const PPTerms = () => {
  return (
    <section className="flex flex-row border-b-separator border-b-[1px] border-solid border-x-0 border-t-0 px-32">
      <div className="basis-1/2 flex flex-col gap-16 items-center justify-center px-5">
        <div className="">
          <h1 className="text-[36px]/[1.3] font-bold">Privacy Policy and</h1>
          <h1 className="text-secondaryTextColor text-[36px]/[1.3] font-bold">
            Terms
          </h1>
          <p className="my-5 text-primaryTextColor/75 text-xl">
            Last updated on September 12, 2023
          </p>
          <p className="text-xl font-normal leading-[2] mt-5">
            Below are our privacy & policy, which outline a lot of goodies. it’s
            our aim to always take of our participant
          </p>
        </div>
        <div className="leading-loose flex flex-col p-20 gap-10 text-xl border-secondaryTextColor border-[1px] border-solid rounded-md bg-[#D9D9D9]/10">
          <div>
            <p>
              At getlinked tech Hackathon 1.0, we value your privacy and are
              committed to protecting your personal information. This Privacy
              Policy outlines how we collect, use, disclose, and safeguard your
              data when you participate in our tech hackathon event. By
              participating in our event, you consent to the practices described
              in this policy.
            </p>
          </div>
          <div className="font-bold">
            <h1 className="text-secondaryTextColor ">Licensing Policy</h1>
            <h1>Here are terms of our Standard License:</h1>
            <ul className="test font-normal mb-5 list-disc pl-5">
              <li>
                The Standard License grants you a non-exclusive right to
                navigate and register for our event
              </li>
              <li>
                You are licensed to use the item available at any free source
                sites, for your project developement
              </li>
            </ul>
          </div>
          <div className="flex justify-center">
            <Button Text="Read More" />
          </div>
        </div>
      </div>
      <div className="container basis-1/2 flex flex-col items-center justify-end px-5">
        <img src={boy} alt="lock" />
      </div>
    </section>
  );
};

export default PPTerms;
