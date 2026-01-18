import { Fragment } from "react";
import { SectionHeading } from "../elements/section-heading";
import { Row } from "../elements/row";
import { Text } from "@react-pdf/renderer";
import { CAREER_START_DATE } from "../constants";

const getExperienceYears = () => {
  const now = new Date();
  const diffInMs = now.getTime() - CAREER_START_DATE.getTime();
  const diffInYears = diffInMs / (1000 * 60 * 60 * 24 * 365.25);

  return diffInYears.toFixed(1);
};

const Summary = () => {
  const experienceYears = getExperienceYears();

  return (
    <Fragment>
      <SectionHeading>Summary</SectionHeading>
      <Row>
        <Text>
          Frontend developer with {experienceYears}+ years of experience in
          product-driven tech companies, focused on building scalable solutions
          from scratch and improving performance in complex B2C and B2B
          applications.
        </Text>
      </Row>
    </Fragment>
  );
};

export default Summary;
