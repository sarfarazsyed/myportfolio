import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import styled from "styled-components";
import { GiSandsOfTime } from "react-icons/gi";

const VerticalTimeLine = styled(VerticalTimeline)`
  &:: before {
    content: "";
    position: absolute;
    top: 0;
    left: 18px;
    height: 100%;
    width: 4px;
    background: rgba(219, 120, 120, 0.6);
  }
`;

export const Experience = (careerHistory) => {
  return (
    <>
      <VerticalTimeLine layout="1-column-left">
        {careerHistory.career.careerList.map((career, index) => {
          return (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "transparent",
                color: "#aaaaa9",
                borderBottom: "none",
              }}
              contentArrowStyle={{
                borderRight: "8px solid  #aaaaa9",
              }}
              date={career.year}
              iconStyle={{
                borderRadius: "25%",
                background: "rgba(219, 120, 120, 0.9)",
                color: "#010017",
                boxShadow:
                  "0 0 0 2px #aaaaa9, inset 0 2px 0 rgb(0 0 0 / 8%), 0 3px 0 4px rgb(0 0 0 / 5%)",
              }}
              icon={career.profession}
            >
              <h4 className="vertical-timeline-element-title">{career.role}</h4>
              <h6 className="vertical-timeline-element-subtitle">
                {career.organizationName}
              </h6>
              <h6 className="vertical-timeline-element-subtitle">
                {career.place}
              </h6>
              <p>{career.about}</p>
            </VerticalTimelineElement>
          );
        })}
        <VerticalTimelineElement
          iconStyle={{
            borderRadius: "25%",
            background: "rgba(219, 120, 120, 0.9)",
            color: "#010017",
            boxShadow:
              "0 0 0 2px #aaaaa9, inset 0 2px 0 rgb(0 0 0 / 8%), 0 3px 0 4px rgb(0 0 0 / 5%)",
          }}
          icon={<GiSandsOfTime />}
        />
      </VerticalTimeLine>
    </>
  );
};
