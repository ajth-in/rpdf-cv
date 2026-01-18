import { Text } from "@react-pdf/renderer";
import { Experience } from "./experience";
import { B } from "../elements/b";

const GuztyAcceronsExperience = () => {
  return (
    <Experience
      title="Guzty Accerons"
      subtitle="Full-stack Developer (Intern)"
      startDate="Aug 2021"
      endDate="Mar 2022"
      hasDivider
      isLast
    >
      <Text>
        Full-stack intern contributing to an internal administration platform{" "}
        <B>(ReactJs, ExpressJs, TailwindCSS)</B>
      </Text>
    </Experience>
  );
};

export default GuztyAcceronsExperience;
