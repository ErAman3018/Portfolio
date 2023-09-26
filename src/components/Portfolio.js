import React from "react";

// import components
import Projects from "../components/Projects";

const Portfolio = () => {
  return (
    <section id="portfolio" className="section bg-primary min-h-[1200px]">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className="section-title before:content-portfolio relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-3/4 before:hidden before:lg:block">
            My latest Work
          </h2>
          <p className="subtitle">I'm delighted to share my latest web development project,
          a dynamic Travel and Tour website for seamless user experience and optimal performance.
          Leveraging a combination of HTML5, CSS3, JavaScript, and React.js.</p>

        </div>
        <Projects/>
      </div>
    </section>
  );
};

export default Portfolio;
