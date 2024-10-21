import "./overview.css";
import people from "../../../../assets/home/overview/overview_3.png";
import Button from "../../../partials/button/Button";

const KeyAttributes = () => {
  const KeyAttributesContent = [
    {
      attribute: "Innovation and Creativity:",
      description:
        "Evaluate the uniqueness and creativity of the solution. Consider whether it addresses a real-world problem in a novel way or introduces innovative features. ",
    },
    {
      attribute: "Functionality:",
      description:
        "Assess how well the solution works. Does it perform its intended functions effectively and without major issues? Judges would consider the completeness and robustness of the solution.",
    },
    {
      attribute: "Impact and Relevance:",
      description:
        " Determine the potential impact of the solution in the real world. Does it address a significant problem, and is it relevant to the target audience? Judges would assess the potential social, economic, or environmental benefits. ",
    },
    {
      attribute: "Technical Complexity:",
      description:
        "Evaluate the technical sophistication of the solution. Judges would consider the complexity of the code, the use of advanced technologies or algorithms, and the scalability of the solution.",
    },
    {
      attribute: "Adherence to Hackathon Rules:",
      description:
        "Judges will Ensure that the team adhered to the rules and guidelines of the hackathon, including deadlines, use of specific technologies or APIs, and any other competition-specific requirements.",
    },
  ];

  return (
    <section className="flex flex-col lg:flex-row pb-40 border-b-separator border-b-[1px] border-solid border-x-0 border-t-0">
      <div className="basis-1/2 flex items-center justify-center">
        <img className="w-[80%]" src={people} alt="People Standing" />
      </div>
      <div className="basis-1/2 flex flex-col items-start max-lg:items-center max-lg:justify-center gap-5 max-lg:text-center">
        <div className="w-[100%]">
          <h1 className="text-[36px]/[1.3] font-bold">Judging Criteria</h1>
          <h1 className="text-secondaryTextColor text-[36px]/[1.3] font-bold">
            Key attributes
          </h1>
        </div>
        <div className="max-lg:flex flex-col justify-center items-center text-center lg:text-left">
          {KeyAttributesContent.map((content, index) => {
            return (
              <p
                key={index}
                className="text-xl font-normal leading-[2] mt-5 w-[75%]"
              >
                <span className="text-tertiaryTextColor font-bold">
                  {content.attribute}{" "}
                </span>
                {content.description}
              </p>
            );
          })}
        </div>
        <Button Text="Register" />
      </div>
    </section>
  );
};

export default KeyAttributes;
