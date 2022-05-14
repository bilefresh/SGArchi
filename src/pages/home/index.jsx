import React from "react";
// import Team3 from "../../components/Team3";
import Team2 from "../../components/Team2";
import MainLayout from "../../layouts/main";
// import Video2 from "../../components/Video2";
import Process2 from "../../components/Process2";
import AboutUs8 from "../../components/About-Us8";
// import Services7 from "../../components/Services7";
import Services5 from "../../components/Services5";
import Testimonials1 from "../../components/Testimonials1";
// import WorkWithoutFilter from "../../components/Work-Without-Filter";
import Portfolio3 from "../../components/Portfolio3";
import IntroWithVertical2 from "../../components/Intro-with-vertical2";

const Homepage = () => {
  React.useEffect(() => {
    document.querySelector("body").classList.add("index3");
  });
  return (
    <MainLayout>
      <IntroWithVertical2 />
      <AboutUs8 />
      {/*<Services7 /> */}
       {/*<WorkWithoutFilter />*/}
      {/*<Video2 />*/}
      {/*<Team3 />*/}
	  <Services5 />
	  <br /><br /><br /><br />
	  <Portfolio3 />
	  <Process2 />
	  <Team2 />
      <Testimonials1 bigTitle />
    </MainLayout>
  );
};

export default Homepage;
