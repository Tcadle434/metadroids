import React from "react";
import styled from "styled-components";
import { RoadmapComponent } from "../../components/roadmapComponent";
import Bounce from 'react-reveal/Bounce';


const RoadmapContainer = styled.div`
  width: 100%;
  background: #090A0A;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 480px) {
}
`;

const Title = styled.h2`
    color: #FFFFFF;
    font-size: 64px;
    text-align: center;
    word-spacing: 120%;
    font-family: SyneMono-Regular;
    margin-block-start: 1.5em;

    @media screen and (min-width: 480px) and (max-width: 1200px) {
        font-size: 36px;
    }
     @media screen and (max-width: 480px) {
        margin-block-start: 6em;
        font-size: 28px;
    }
`;

const SubTitle = styled.h2`
    color: #FFFFFF;
    font-size: 48px;
    text-align: center;
    word-spacing: 120%;
    font-family: SyneMono-Regular;
    margin-block-start: 1.5em;

    @media screen and (min-width: 480px) and (max-width: 1200px) {
        font-size: 32px;
    }
     @media screen and (max-width: 480px) {
        font-size: 24px;
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
                <Title>ROADMAP</Title>
            </TextContainer>

            <Bounce bottom>
            <TextContainer> 
                <SubTitle>Phase 1</SubTitle>
            </TextContainer>
            <RoadmapComponent description='Lorem ipsom dolor et ulam sdunt abunt avorpex ulet'/>
            </Bounce>
            <Bounce bottom>
            <TextContainer> 
                <SubTitle>Phase 2</SubTitle>
            </TextContainer>
            <RoadmapComponent description='Lorem ipsom dolor et ulam sdunt abunt avorpex ulet'/>
            </Bounce>
            <Bounce bottom>
            <TextContainer> 
                <SubTitle>Phase 3</SubTitle>
            </TextContainer>
            <RoadmapComponent description='Lorem ipsom dolor et ulam sdunt abunt avorpex ulet'/>
            </Bounce>
        </RoadmapContainer>
    );
  }