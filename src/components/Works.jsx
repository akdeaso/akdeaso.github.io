import React from "react";
import SectionTitle from "./SectionTitle";
import WorkItem from "./WorkItem";
import works from "../data/works";

const Works = () => {
  return (
    <div className="py-12">
      <SectionTitle id="works">Recent Works</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {works.map((work) => (
          <WorkItem
            key={work.title}
            imgUrl={work.imgUrl}
            title={work.title}
            date={work.date}
            desc={work.desc}
            tech={work.tech}
            linkUrl={work.linkUrl}
            demoUrl={work.demoUrl}
          ></WorkItem>
        ))}
      </div>
    </div>
  );
};

export default Works;
