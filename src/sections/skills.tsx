import { Fragment } from "react";
import { Text } from "@react-pdf/renderer";

import { SectionHeading } from "../elements/section-heading";
import { Row } from "../elements/row";
import { Bullet } from "../elements/bullet";

const row1Skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Design Systems",
  "Micro Front-ends",
  "Performance Optimization",
  "Accessibility",
];

const row2Skills = [
  "Zustand",

  "React Query",
  "Redux",
  "Xstate",
  "Node JS",
  "Vitest",
  "Playwright",
  "CI/CD",
  "Mono repo",
  "Turbo repo",
];

const renderRow = (skills: string[]) => (
  <Row>
    {skills.map((skill, index) => (
      <Fragment key={skill}>
        <Text>{skill}</Text>
        {index < skills.length - 1 && <Bullet />}
      </Fragment>
    ))}
  </Row>
);

const Skills = () => {
  return (
    <Fragment>
      <SectionHeading>Skills</SectionHeading>
      {renderRow(row1Skills)}
      {renderRow(row2Skills)}
    </Fragment>
  );
};

export default Skills;
