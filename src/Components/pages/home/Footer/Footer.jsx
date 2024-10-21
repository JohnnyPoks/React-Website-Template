import "./footer.css";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center gap-20 px-60 pt-20 pb-5">
      <div className="flex">
        <div className="flex flex-col basis-1/3 justify-between">
          <a href="#" className="text-3xl font-[600]">
            get<span className="text-secondaryTextColor">Linked</span>
          </a>
          <p>
            Getlinked Tech Hackathon is a technology innovation program
            established by a group of organizations with the aim of showcasing
            young and talented individuals in the field of technology
          </p>
          <p className="mt-10">
            Terms of Use <span className="text-secondaryTextColor px-2">|</span>{" "}
            Privacy Policy
          </p>
        </div>

        <div className="flex flex-col basis-1/3 gap-5 pl-28 font-semibold">
          <h1 className="text-secondaryTextColor">Useful Links</h1>
          <a
            href="#Overview"
            className="hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-pink-500 to-violet-500 duration-500 ease-out w-fit"
          >
            Overview
          </a>
          <a
            href="#Timeline"
            className="hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-pink-500 to-violet-500 duration-500 ease-out w-fit"
          >
            TimeLine
          </a>
          <a
            href="#FAQs"
            className="hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-pink-500 to-violet-500 duration-500 ease-out w-fit"
          >
            FAQs
          </a>
          <a
            href="#Register"
            className="hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-pink-500 to-violet-500 duration-500 ease-out w-fit"
          >
            Register
          </a>
          <h1 className="text-secondaryTextColor font-normal">Follow Us</h1>
        </div>

        <div className="flex flex-col basis-1/3 gap-5">
          <h1 className="font-semibold text-secondaryTextColor">Contact Us</h1>
          <p className="flex items-center">
            <span className="material-symbols-outlined mr-5">
              phone_in_talk
            </span>
            <span>+123 45678901</span>
          </p>
          <p className="flex items-center">
            <span className="material-symbols-outlined mr-5">location_on</span>
            <span>Molyko, Buea southWest, Cameroon</span>
          </p>
        </div>
      </div>
      <div>All rights reserved. &copy; getlinked Ltd.</div>
    </footer>
  );
};

export default Footer;
