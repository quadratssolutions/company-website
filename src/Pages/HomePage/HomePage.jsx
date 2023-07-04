import React from "react";
import Header from "../../components/Header/Header";
import WeOfferSection from "../../components/WeOfferSection/WeOfferSection";
import OurServicesSection from "../../components/OurServicesSection/OurServicesSection";
import JoinWithUsSection from "../../components/JoinWithUsSection/JoinWithUsSection";
import MeetOurTeamSection from "../../components/MeetOurTeamSection/MeetOurTeamSection";
import Footer from "../../components/Footer/Footer";
import StatsSection from "../../components/StatsSection/StatsSection";

function HomePage() {
  return (
    <>
      <Header />
      <hr />
      <WeOfferSection />
      <hr />
      <StatsSection />
      <hr />
      <OurServicesSection />
      <hr />
      <JoinWithUsSection />
      <hr />
      <MeetOurTeamSection />
      <hr id="mobile-hr" />
      <Footer />
    </>
  );
}

export default HomePage;
