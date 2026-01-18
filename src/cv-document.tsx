import { Page, Text, Document, StyleSheet, Font } from "@react-pdf/renderer";

import { COLOR, FONT_FAMILY } from "./constants.ts";
import { SectionHeading } from "./elements/section-heading.tsx";
import { Experience } from "./sections/experience.tsx";
import { Ul, Li } from "./elements/ul.tsx";
import { B } from "./elements/b.tsx";
import { resolveFontPath } from "./utils/path/path.utils.ts";
import { A } from "./elements/a.tsx";
import Summary from "./sections/summary.tsx";
import HeaderWithLinks from "./sections/header-with-links.tsx";
import Education from "./sections/education.tsx";
import Skills from "./sections/skills.tsx";
import Publications from "./sections/publications.tsx";
import StrollbyExperiences from "./sections/strollby.tsx";
import GuztyAcceronsExperience from "./sections/gusty.tsx";

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    fontFamily: FONT_FAMILY.COMPUTER_MODERN,
    color: COLOR.PRIMARY,
    backgroundColor: COLOR.SECONDARY,
    padding: "24pt 36pt",
    fontSize: 10,
    lineHeight: 1.2,
  },
});

Font.register({
  family: FONT_FAMILY.COMPUTER_MODERN,
  fonts: [
    {
      src: resolveFontPath("regular"),
      fontStyle: "normal",
      fontWeight: "normal",
    },
    {
      src: resolveFontPath("bold"),
      fontStyle: "bold",
      fontWeight: "bold",
    },
  ],
});

export const CvDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <HeaderWithLinks />
      <Summary />

      <SectionHeading>Work Experience</SectionHeading>

      <StrollbyExperiences />

      <GuztyAcceronsExperience />

      <Education />
      <Publications />

      <Skills />

      <SectionHeading>Additional Activities</SectionHeading>
      <Experience title="Volunteer Mentorship">
        <Text>
          Mentored <B>37</B> developers one-on-one at{" "}
          <A src="https://getmentor.dev/mentor/daniil-sitdikov-1781">
            GetMentor
          </A>
          , gave <B>6</B> tech talks, and mentored students at{" "}
          <A src="https://www.guidedao.xyz">GuideDao coding school</A>.
        </Text>
      </Experience>
      <Experience title="Open Source">
        <Ul>
          <Li>
            Developed{" "}
            <A src="https://github.com/Danilqa/node-file-router">
              node-file-router
            </A>{" "}
            (<B>119 stars</B>,{" "}
            <A src="https://devhunt.org/tool/node-file-router">
              2nd Tool of the Week, DevHunt
            </A>
            )
          </Li>
          <Li>
            Contributed to{" "}
            <A src="https://github.com/DefinitelyTyped/DefinitelyTyped/pull/55370">
              DefinitelyTyped / Jaeger
            </A>{" "}
            (<B>46.6k stars</B>)
          </Li>
          <Li>
            Other created projects:{" "}
            <A src="https://github.com/Danilqa/web-performance-handbook">
              web-performance-handbook
            </A>
            ,{" "}
            <A src="https://github.com/Danilqa/image-proxy-service">
              image-proxy-service
            </A>
            ,{" "}
            <A src="https://github.com/Danilqa/react-props-diff-logger">
              react-props-diff-logger
            </A>
          </Li>
        </Ul>
      </Experience>
      <Experience title="Tech Writting">
        <Text>
          Wrote <B>11</B> articles on{" "}
          <A src="https://dev.to/dsitdikov">Dev.to</A> and{" "}
          <A src="https://hackernoon.com/u/dsitdikov">Hackernoon</A> with{" "}
          <B>26k</B> views in total. <B>3 </B>articles were featured as top
          stories.
        </Text>
        .
      </Experience>
      <Experience title="Hackaton — Digital Breakdown 2019" isLast>
        <Text>
          <B>3-rd place</B> in the world’s largest hackathon, as{" "}
          <A src="https://www.guinnessworldrecords.com/world-records/most-participants-in-a-software-development-marathon">
            confirmed by <B>Guinness World Records.</B>
          </A>
        </Text>
      </Experience>
    </Page>
  </Document>
);
