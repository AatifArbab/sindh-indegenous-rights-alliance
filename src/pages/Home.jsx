import Hero from "../components/Hero";
import MembershipCTA from "../components/MembershipCTA";

import AboutSection from "../sections/home/AboutSection";
import MissionSection from "../sections/home/MissionSection";
import LatestNews from "../sections/home/LatestNews";
import EnvironmentSection from "../sections/home/EnvironmentSection";

const Home = () => {
  return (
    <>
      <Hero />
      <AboutSection />
      <MissionSection />
      <LatestNews />
      <EnvironmentSection />
      <MembershipCTA />
    </>
  );
};

export default Home;