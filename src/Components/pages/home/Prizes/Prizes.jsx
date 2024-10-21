import "./prizes.css";
import prize from "../../../../assets/home/prizes/prize.png";
import rewards from "../../../../assets/home/prizes/rewards.png";

const Prizes = () => {
  return (
    <section className="flex flex-row border-b-separator border-b-[1px] border-solid border-x-0 border-t-0 px-32">
      <div className="flex flex-col items-center justify-center px-4">
        {/* <img src={lens_1} alt="The prize image" /> */}
        <img src={prize} alt="The prize image" />
      </div>

      <div className="flex flex-col gap-16 items-center justify-center">
        <div className="text-[36px]/[1.3] font-bold">
          <h1>Prizes and</h1>
          <h1 className="text-secondaryTextColor">Rewards</h1>
          <p className="text-xl font-normal leading-[2] mt-5 w-[80%]">
            Highlight of the prizes or rewards for winners and for participants
          </p>
        </div>

        <div>
          {/* <img src={lens} alt="The prize image" /> */}
          <img src={rewards} alt="The prize image" />
        </div>
      </div>
    </section>
  );
};

export default Prizes;
