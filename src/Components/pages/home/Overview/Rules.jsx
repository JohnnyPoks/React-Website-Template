import "./overview.css";
import girl from "../../../../assets/overview/overview_2.png";

const Rules = () => {
  return (
    <section className="flex flex-row border-b-separator border-b-[1px] border-solid border-x-0 border-t-0">
      <div className="basis-1/2 flex flex-col items-center justify-center">
        <div className="w-[70%]">
          <h1 className="text-[36px]/[1.3] font-bold">Rules and</h1>
          <h1 className="text-secondaryTextColor text-[36px]/[1.3] font-bold">
            Guidelines
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
      <div className="basis-1/2 flex items-center justify-start">
        <img className="w-[80%]" src={girl} alt="Girl Sitting" />
      </div>
    </section>
  );
};

export default Rules;
