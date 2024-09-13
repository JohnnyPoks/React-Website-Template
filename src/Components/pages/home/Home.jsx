import Section_1 from "./Section_1/Section_1";
import Overview from "./Overview/Overview";
import FAQs from "./FAQS/FAQS";
import Timeline from "./Timeline/Timeline";
import Prizes from "./Prizes/Prizes.jsx";
import Sponsors from "./Sponsors/Sponsors.jsx";
import PPTerms from "./PPTerms/PPTerms.jsx";
import Footer from "./Footer/Footer.jsx";

function Home() {
  return (
    <>
      <Section_1 />
      <Overview />
      <FAQs />
      <Timeline />
      <Prizes />
      <Sponsors />
      <PPTerms />
      <Footer />
    </>
  );
}

export default Home;
