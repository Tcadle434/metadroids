import React from "react";
import styled from "styled-components";
import Fade from 'react-reveal/Fade';


const RoadmapContainer = styled.div`
  width: 100%;
  background: #000000;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 480px) {
}
`;

const SubTitle = styled.h2`
    color: #FFFFFF;
    font-size: 42px;
    text-align: center;
    word-spacing: 120%;
    font-family: SyneMono-Regular;
    margin-block-start: 3em;

    @media screen and (min-width: 480px) and (max-width: 1200px) {
        font-size: 36px;
    }
     @media screen and (max-width: 480px) {
        font-size: 28px;
    }
`;

const TextContainer = styled.div`
    width: 70%;
    margin: auto;


    @media screen and (min-width: 1200px) and (max-width: 1440px) {
        width: 70%;
    }
      @media screen and (min-width: 480px) and (max-width: 1200px) {
        width: 80%;
    }
     @media screen and (max-width: 480px) {
        width: 85%;
    }
`;

export function RoadmapSection(props) {

    return(
        <RoadmapContainer>
            <TextContainer> 
                <SubTitle>Roadmap</SubTitle>
            </TextContainer>
        </RoadmapContainer>
    );
  }