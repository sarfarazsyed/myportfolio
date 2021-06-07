import { SiSpring } from "react-icons/si";
import { GiSchoolBag } from "react-icons/gi";
export const experiences = {
  heading: "Career History",
  quote:
    "Theory without practice is just as incomplete as practice without theory.",
  careerList: [
    {
      profession: <SiSpring />,
      organizationName: "Infosys Limited",
      year: "2019 - Present",
      place: "Hyderabad, Telangana, India",
      role: "Digital Specialist Engineer",
      about:
        "I have been working as a backend developer with spring boot and postgresql as primary skills for an insurance based project.",
    },
    {
      profession: <GiSchoolBag />,
      organizationName: "Sree Vidyanikethan Engineering College",
      year: "2015 - 2019",
      place: "Tirupati, Andhra Pradesh, India",
      role: "Bachelor of Technology",
      major: "Computer Science and Systems Engineering",
      about: "I graduated in Computer Science and Systems Engineering.",
    },
  ],
};
