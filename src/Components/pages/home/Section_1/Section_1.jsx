import "./Section_1.css";
import chain from "../../../../assets/section_1/chain.png";
import spark from "../../../../assets/section_1/spark.png";
import vector from "../../../../assets/section_1/vector.png";
import man from "../../../../assets/section_1/men.png";
import sun from "../../../../assets/section_1/sun.png";
import bulb from "../../../../assets/section_1/bulb.png";
import Button from "../../../partials/button/Button";

const Section_1 = () => {
  return (
    <section className="flex flex-col pt-5 pb-0 border-b-separator border-b-[1px] border-solid border-x-0 border-t-0">
      <div className="flex flex-col items-end px-10">
        <h1 className="font-bold text-2xl/[1] md:text-4xl/[1] sm:text-3xl/[1]">
          Igniting a revolution in HR Innovation
        </h1>
        <img
          className="mr-2 w-[30%] lg:w-[20%] xl:w-[18%] 2xl:w-[15%]"
          src={vector}
        />
      </div>

      <div className="flex flex-col items-center justify-center lg:flex-row">
        <div className="flex basis-1/2 flex-col lg:items-start items-center justify-center px-10 py-5 pt-20 md:px-0 lg:pl-5 2xl:pl-20 gap-5 lg:gap-10">
          <div className="flex flex-col text-center lg:text-left">
            <h1 className="text-[40px]/[1] md:text-[60px]/[1] xl:text-[70px]/[1] 2xl:text-[80px]/[1] font-bold relative">
              <img
                className="size-14 lg:size-fit absolute left-[300px] top-[-45px] md:left-[510px] md:top-[-40px] lg:left-[355px] lg:top-[-55px] xl:left-[410px] xl:-top-14 2xl:left-[480px] 2xl:top-[-50px]"
                src={bulb}
              />
              getlinked Tech <br /> Hackathon
              <span className="text-[#d434fe] inline-flex items-baseline ml-3">
                1.0
                <img
                  className="size-10 sm:size-12 md:size-14 xl:size-fit relative top-[5px] xl:top-[15px]"
                  src={chain}
                />
                <img
                  className="size-10 sm:size-12 md:size-14 xl:size-fit"
                  src={spark}
                />
              </span>
            </h1>
            <p className="text-[20px] mt-5">
              Participate in the getlinked tech Hackathon 2023 stand a chance to
              win a Big prize
            </p>
          </div>

          <div>
            <Button Text="Register" />
          </div>

          <div className="flex gap-x-5 mt-5 lg:mt-10 xl:mt-20 text-5xl sm:text-6xl ">
            <h1>
              00<span className="text-[10px]">H</span>
            </h1>
            <h1>
              00<small className="text-[10px]">M</small>
            </h1>
            <h1>
              00<small className="text-[10px]">S</small>
            </h1>
          </div>
        </div>

        <div className="flex basis-1/2 relative h-[100%] ">
          <img className="size-full" src={man} />
          <img
            className="absolute sm:bottom-[-80px] right-[5px] z-10"
            src={sun}
          />
        </div>
      </div>
    </section>
  );
};

export default Section_1;
