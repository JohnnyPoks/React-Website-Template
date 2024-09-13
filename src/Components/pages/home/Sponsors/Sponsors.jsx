import "./sponsor.css";
import libertyLogo from "../../../../assets/sponsors/Liberty company logo.png";
import libertyPay from "../../../../assets/sponsors/Liberty company.png";
import winwise from "../../../../assets/sponsors/Winwise logo.png";
import payBox from "../../../../assets/sponsors/Paybox.png";
import wisper from "../../../../assets/sponsors/wisper logo.png";

const Separator = () => {
  return (
    <div className="flex flex-col items-cente p-10">
      <div className="p-1 mb-10 w-1 h-40 bg-secondaryTextColor"></div>
      <div className="p-1 mt-10 w-1 h-40 bg-secondaryTextColor"></div>
    </div>
  );
};

const Logo = (props) => {
  const { image_1, image_2, height_1, width_1, height_2, width_2 } = props;
  return (
    <div className="flex flex-col justify-between items-center">
      <div>
        <img
          className="size-40"
          src={image_1}
          alt="Logo"
          style={{ height: height_1, width: width_1 }}
        />
      </div>
      <div className="p-1 my-6 w-80 h-1 bg-secondaryTextColor"></div>
      <div>
        <img
          className="size-40"
          src={image_2}
          alt="Logo"
          style={{ height: height_2, width: width_2 }}
        />
      </div>
    </div>
  );
};

const Sponsors = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-16 border-b-separator border-b-[1px] border-solid border-x-0 border-t-0 px-32">
      <div className="text-[36px]/[1.3] font-bold text-center flex flex-col items-center justify-center">
        <h1>Partners and Sponsors</h1>
        <p className="text-xl font-normal mt-5 w-[70%]">
          Getlinked Hackathon 1.0 is honored to have the following major
          companies as its partners and sponsors
        </p>
      </div>

      <div className="border-secondaryTextColor border-[3px] border-solid rounded-md flex flex-row p-20 items-baseline">
        <Logo image_1={libertyLogo} image_2={wisper} />

        <Separator />

        <Logo
          image_1={libertyPay}
          image_2={payBox}
          height_1="2.5rem"
          width_1="13rem"
          height_2="4rem"
          width_2="12rem"
        />
        {/* <div className="flex flex-col justify-between items-center">
          <div>
            <img className="w-52 h-10 mb-20" src={libertyPay} alt="Logo" />
          </div>
          <div className="p-1 my-6 w-80 h-1 bg-secondaryTextColor"></div>
          <div>
            <img className="w-48 h-16 mt-20" src={payBox} alt="Logo" />
          </div>
        </div> */}

        <Separator />

        <div className="flex flex-col justify-between items-center">
          <div>
            <img className="size-40" src={winwise} alt="Logo" />
          </div>
          <div className="p-1 my-6 w-80 h-1 bg-secondaryTextColor"></div>
          <div className="flex flex-col gap-4 mt-28">
            <h1 className="text-5xl/[0px]">
              Vuzual <span className="text-[#FF0000]">Plus</span>
            </h1>
            <small className="text-right">Design Studios</small>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
