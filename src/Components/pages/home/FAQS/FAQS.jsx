import "./faqs.css";
import thinkingBoy from "../../../../assets/faqs/faqs.png";

const FAQs = () => {
  const FAQContent = [
    {
      Question: "Can I work on a project I started before the hackathon?",
    },
    {
      Question: "What happens if I need help during the hackathon?",
    },
    {
      Question: "What happens if I don't have an idea for a project?",
    },
    {
      Question: "Can I join a team or do I have to come with one?",
    },
    {
      Question: "What happens after the hackathon ends",
    },
    {
      Question: "Can I work on a project I started before the hackathon?",
    },
  ];

  return (
    <section className="flex flex-row border-b-separator border-b-[1px] border-solid border-x-0 border-t-0">
      <div className="basis-1/2 flex flex-col gap-16 items-center justify-center">
        <div className="w-[60%]">
          <h1 className="text-[36px]/[1.3] font-bold">Frequently Ask</h1>
          <h1 className="text-secondaryTextColor text-[36px]/[1.3] font-bold">
            Questions
          </h1>
          <p className="text-xl font-normal leading-[2] mt-5 w-[80%]">
            We got answers to the questions that you might want to ask about{" "}
            <span className="font-bold">getlinked Hackathon 1.0</span>
          </p>
        </div>
        <div className="flex flex-col w-[60%] gap-10 text-xl">
          {FAQContent.map((content, index) => {
            return (
              <div
                key={index}
                className="flex flex-row justify-between items-center border-b-secondaryTextColor border-b-[1px] border-solid border-x-0 border-t-0"
              >
                <p>{content.Question}</p>
                <span className="text-secondaryTextColor text-2xl">+</span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="basis-1/2 flex items-center justify-start">
        <img className="w-[80%]" src={thinkingBoy} alt="Boy Thinking" />
      </div>
    </section>
  );
};

export default FAQs;
