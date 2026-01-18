import { Text } from "@react-pdf/renderer";
import { Experience } from "./experience";
import { Li, Ul } from "../elements/ul";
import { B } from "../elements/b";

const StrollbyExperiences = () => {
  return (
    <Experience
      title="UST | Strollby"
      subtitle="Product Engineer"
      startDate="July 2023"
      hasDuration={false}
      hasDivider
    >
      <Text>
        Product engineer for B2B products, overseeing system design,
        infrastructure, and cross-team developer experience.
      </Text>

      <Ul>
        <Li>
          Engineered two business-critical B2B applications from 0-to-1, scaling
          to a <B>multi-zonal Next.js architecture</B> with 10+ independently
          deployable micro-frontends to optimize deployment velocity.
        </Li>
        <Li>
          Led the team to build the design system using used across 12+
          independent projects using <B>React Aria and PandaCSS</B> enforced
          WCAG standards and visual consistency via a Storybook-driven
          regression testing workflow.
        </Li>
        <Li>
          Architected the frontend delivery pipeline on{" "}
          <B>Google Cloud (GKE)</B>, implementing NGINX traffic routing, Cloud
          CDN, and automated CI/CD via Bitbucket to ensure high availability and
          performance.
        </Li>

        <Li>
          Led migration of Redux to <B>Zustand</B> and designing an internal{" "}
          <B>GraphQL platform layer</B> with Apollo Client and Graphql-codegen,
          significantly reducing boilerplate and type-safety overhead.
        </Li>
        <Li>
          Core maintainer of a <B>Turborepo monorepo</B> utilizing pnpm;
          established a comprehensive testing culture using{" "}
          <B>Playwright (E2E) and Vitest</B> to secure mission-critical user
          flows.
        </Li>
      </Ul>
    </Experience>
  );
};

export default StrollbyExperiences;
