import "./timeline.css";

const Timeline = () => {
  const TimelineContent = [
    {
      Title: "Hackathon Annoucement",
      Description:
        "The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register",
      Date: "November 18, 2023",
    },
    {
      Title: "Hackathon Annoucement",
      Description:
        "The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register",
      Date: "November 18, 2023",
    },
    {
      Title: "Hackathon Annoucement",
      Description:
        "The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register",
      Date: "November 18, 2023",
    },
    {
      Title: "Hackathon Annoucement",
      Description:
        "The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register",
      Date: "November 18, 2023",
    },
    {
      Title: "Hackathon Annoucement",
      Description:
        "The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register",
      Date: "November 18, 2023",
    },
    {
      Title: "Hackathon Annoucement",
      Description:
        "The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register",
      Date: "November 18, 2023",
    },
  ];

  return (
    <section className="flex flex-col justify-center items-center text-xl border-b-separator border-b-[1px] border-solid border-x-0 border-t-0 px-36">
      <div className="flex flex-col items-center text-center p-2 mb-[5%]">
        <h1 className="text-[36px]/[1.3] font-bold">Timeline</h1>
        <p className="w-[50%]">
          Here is the breakdown of the time we anticipate using for the upcoming
          event
        </p>
      </div>
      {TimelineContent.map((content, index) => {
        return index % 2 == 0 ? (
          <div
            key={index}
            className="flex flex-row p-2 justify-center"
          >
            <div className="text-right content-end p-2 basis-[45%] ">
              <h1 className="text-secondaryTextColor text-[36px] font-bold">
                {content.Title}
              </h1>
              <p>{content.Description}</p>
            </div>
            <div className="flex flex-col items-center p-2 basis-[10%]">
              <div className="p-1 mb-3 w-1 h-40 bg-gradient-to-r from-[#903aff] from-0% to-[#d434fe] to-100%"></div>
              <div className="text-xl flex items-center justify-center size-[60px] text-primaryTextColor font-bold rounded-full bg-gradient-to-r from-[#903aff] from-0% to-[#d434fe] to-100%">
                {index + 1}
              </div>
            </div>
            <div className="content-end p-2 basis-[45%]">
              <h1 className="text-secondaryTextColor text-[36px] font-bold">
                {content.Date}
              </h1>
            </div>
          </div>
        ) : (
          <div
            key={index}
            className=" flex flex-row p-2 justify-center"
          >
            <div className="text-right content-end p-2 basis-[45%]">
              <h1 className="text-secondaryTextColor text-[36px] font-bold">
                {content.Date}
              </h1>
            </div>
            <div className="flex flex-col items-center p-2 basis-[10%]">
              <div className="p-1 mb-3 w-1 h-40 bg-gradient-to-r from-[#903aff] from-0% to-[#d434fe] to-100%"></div>
              <div className="text-xl flex items-center justify-center size-[60px] text-primaryTextColor font-bold rounded-full bg-gradient-to-r from-[#903aff] from-0% to-[#d434fe] to-100%">
                {index + 1}
              </div>
            </div>
            <div className="text-left content-end p-2 basis-[45%] ">
              <h1 className="text-secondaryTextColor text-[36px] font-bold">
                {content.Title}
              </h1>
              <p>{content.Description}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Timeline;
