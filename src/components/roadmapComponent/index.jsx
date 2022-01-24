import React from "react";
import styled from "styled-components/macro";


const ServiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  padding: 0px 10px;
  margin: 15px;
  background-color: #090A0A;
  border: 3px solid #FFFFFF;
  width: 900px;
  @media screen and (max-width: 480px) {

  }
`;

const Details = styled.p`
  color: #FFFFFF;
  font-family: SyneMono-Regular;
  font-size: 20px;
  max-width: 100%;
  @media screen and (max-width: 480px) {
    font-size: 16px;
    text-align: center;
    max-width: 100%;
}
`;

const DescriptionContainer = styled.div`
  width: 60%;
  margin: auto;
  height: 7em; 

  @media screen and (min-width: 1200px) and (max-width: 1440px) {
    height: 12em;
    width: 70%;
  }
  @media screen and (min-width: 480px) and (max-width: 1200px) {
    height: 20em;
    width: 80%;

  }
 @media screen and (max-width: 480px) {
    width: 85%;
    display: inline-block;
}
`;

export function RoadmapComponent(props) {
    const { title, imageUrl, description } = props;

    return (
      <ServiceContainer>
        <DescriptionContainer>
            <Details> {description} </Details>
        </DescriptionContainer>
      </ServiceContainer>

    );
  
  }