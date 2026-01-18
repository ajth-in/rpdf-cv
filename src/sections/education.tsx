import { Fragment } from "react";
import { SectionHeading } from "../elements/section-heading";
import { Experience } from "./experience";

const educationList = [
  {
    title: "TKM College of Engineering, Kollam, Kerala",
    subtitle: "Bachelor’s Degree in Computer Science (GPA 9.35 / 10.0)",
    startDate: "2019",
    endDate: "2023",
    hasDuration: false,
  },
];

const Education = () => {
  return (
    <Fragment>
      <SectionHeading>Education</SectionHeading>
      {educationList.map((item, index) => (
        <Experience
          key={item.title}
          title={item.title}
          subtitle={item.subtitle}
          startDate={item.startDate}
          endDate={item.endDate}
          hasDuration={item.hasDuration}
          isLast={index === educationList.length - 1}
        />
      ))}
    </Fragment>
  );
};

export default Education;
