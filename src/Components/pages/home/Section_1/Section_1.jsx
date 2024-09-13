import "./Section_1.css";
import chain from "../../../../assets/section_1/chain.png";
import spark from "../../../../assets/section_1/spark.png";
import vector from "../../../../assets/section_1/vector.png";
import man from "../../../../assets/section_1/men.png";
import sun from "../../../../assets/section_1/sun.png";
import bulb from "../../../../assets/section_1/bulb.png";

const Section_1 = () => {
  return (
    <section className="section_1 w-[100%] p-[200px] border-b-[1px] border-b-separator border-solid border-x-0">
      <div className="content flex flex-col flex-wrap content-between z-[10] absolute bottom-10">
        <div className="max-w-[60rem]">
          <h1 className="text-[80px]/[1] text-nowrap font-bold">
            <img
              className="size-13 relative left-[480px] top-[20px]"
              src={bulb}
            />
            getlinked Tech <br /> Hackathon
            <span className="text-[#d434fe] inline-flex items-baseline ml-3">
              1.0
              <img className="size-13 relative top-[15px]" src={chain} />
              <img className="size-13" src={spark} />
            </span>
          </h1>
          <p className="text-[20px] mt-2 mb-[50px]">
            Participate in the getlinked tech Hackathon 2023 stand a chance{" "}
            <br /> to win a Big prize
          </p>
          <a
            href="#"
            className="register-text relative flex justify-center items-center w-[172px]"
          >
            Register
          </a>
        </div>

        <div className="timer mt-[10%] mb-[5%]">
          <h1 className="relative inline-flex justify-center items-center text-[60px] z-10">
            00<span className="text-[10px] mr-10">H</span>
          </h1>
          <h1 className="relative inline-flex justify-center items-center text-[60px] z-10">
            00<small className="text-[10px] mr-10">M</small>
          </h1>
          <h1 className="relative inline-flex justify-center items-center text-[60px] z-10">
            00<small className="text-[10px] mr-10">S</small>
          </h1>
        </div>
      </div>

      <div className="images w-[40%] flex flex-col flex-wrap content-between absolute bottom-0 right-0 z-0">
        <div className="top_text font-bold">
          <h1 className="text-[36px]/[1] absolute right-[70px] bottom-[740px]">
            Igniting a revolution in HR Innovation
          </h1>
          <img className="absolute right-[70px] bottom-[720px]" src={vector} />
        </div>
        <div>
          <img className="absolute bottom-0 right-0 z-0" src={man}/>
          <img className="absolute bottom-0 right-0 z-10" src={sun} />
        </div>
      </div>
    </section>
  );
};

export default Section_1;
