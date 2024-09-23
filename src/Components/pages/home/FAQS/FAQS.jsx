import "./faqs.css";
import thinkingBoy from "../../../../assets/faqs/faqs.png";
import question_1 from "../../../../assets/faqs/1.png";
import question_2 from "../../../../assets/faqs/2.png";

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
    <section
      id="FAQs"
      className="flex flex-col max-lg:gap-40 lg:flex-row border-b-separator border-b-[1px] border-solid border-x-0 border-t-0"
    >
      <div className="basis-1/2 flex flex-col gap-16 items-center justify-center">
        <div className="w-[60%] max-lg:flex flex-col items-center max-lg:text-center">
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
      <div className="basis-1/2 flex flex-col gap-20 items-center justify-center lg:justify-start relative">
        <div className="flex gap-10">
          <img
            className="w-14 absolute top-[30px] right-[300px] sm:right-[520px] md:right-[700px] lg:right-[480px] xl:right-[550px] 2xl:right-[600px]"
            src={question_2}
            alt="Question 2"
          />
          <img
            className="w-20 absolute top-[-50px] right-[200px] sm:right-[400px] md:right-[550px] lg:right-[350px] xl:right-[420px] 2xl:right-[450px]"
            src={question_1}
            alt="Question 1"
          />
          <img
            className="w-14 absolute top-[30px] right-[100px] sm:right-[300px] md:right-[400px] lg:right-[250px] xl:right-[300px] 2xl:right-[325px]"
            src={question_2}
            alt="Question 2"
          />
        </div>
        <img className="w-[80%]" src={thinkingBoy} alt="Boy Thinking" />
      </div>
    </section>
  );
};

export default FAQs;
