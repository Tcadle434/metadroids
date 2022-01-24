import React from "react";
import styled from "styled-components";
import { TopSection } from "./topSection";
import { ContentOne } from "./contentOne";
import { ContentTwo } from "./contentTwo";
import { RoadmapSection } from "./roadmapSection";

const PageContainer = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
`;

export function Homepage(props) {
  return(
      <PageContainer>
        <TopSection />
        <ContentOne />
        <ContentTwo />
        <RoadmapSection />
      </PageContainer>
    );
}