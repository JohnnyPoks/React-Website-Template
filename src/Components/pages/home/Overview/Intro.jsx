import "./overview.css";
import bulb from "../../../../assets/home/overview/overview_1.png";
import arrow from "../../../../assets/home/overview/arrow.png";

const Intro = () => {
  return (
    <section className="flex flex-col lg:flex-row max-lg:gap-y-20 border-b-separator border-b-[1px] border-solid border-x-0 border-t-0">
      <div className="basis-1/2 flex items-center justify-center lg:justify-end relative">
        <img className="w-[80%]" src={bulb} alt="The Intro Image" />
        <img
          className="absolute size-10 bottom-[-50px] lg:size-16 lg:relative lg:right-[15px] lg:bottom-[-330px]"
          src={arrow}
          alt="Arrow Image"
        />
      </div>
      <div className="basis-1/2 flex flex-col items-center justify-center max-lg:text-center">
        <div className="w-[70%]">
          <h1 className="text-[36px]/[1.3] font-bold">
            Introduction to getlinked
          </h1>
          <h1 className="text-secondaryTextColor text-[36px]/[1.3] font-bold">
            techHackathon<span>1.0</span>
          </h1>
        </div>
        <p className="text-xl font-normal leading-[2] mt-5 w-[70%]">
          Our tech hackathon is a melting pot of visionaries, and its purpose is
          as clear as day: to shape the future. Whether you&apos;re a coding
          genius, a design maverick, or a concept wizard, you&apos;ll have the
          chance to transform your ideas into reality. Solving real-world
          problems, pushing the boundaries of technology, and creating solutions
          that can change the world, that&apos;s what we&apos;re all about!
        </p>
      </div>
    </section>
  );
};

export default Intro;
