import { Fragment } from "react";
import { SectionHeading } from "../elements/section-heading";
import { Experience } from "./experience";
import { Text } from "@react-pdf/renderer";
import { A } from "../elements/a";
import { B } from "../elements/b";

const Publications = () => {
  return (
    <Fragment>
      <SectionHeading>Publications</SectionHeading>
      <Experience
        title="eBPF-Based Runtime Detection of Semantic DDoS Attacks (IEEE)"
        isLast
      >
        <Text>
          Developed <B>CODAX</B> an eBPF-powered framework for kernel-level DDoS
          detection in Linux containers.
          <A src="https://ieeexplore.ieee.org/document/11179973">[Link]</A>
        </Text>
      </Experience>
    </Fragment>
  );
};

export default Publications;
