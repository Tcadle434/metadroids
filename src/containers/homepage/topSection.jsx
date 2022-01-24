
   
import React from "react";
import styled from "styled-components";
import { Navbar } from "../../components/navbar";
import BackgroundImg from "../../assets/background.jpg";
import LogoImg from "../../assets/logoWhite.png";
import Fade from 'react-reveal/Fade';


const TopContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${BackgroundImg});
  background-size: cover;
  object-fit: cover;
  
  @media screen and (max-width: 480px) {
}
`;

const BackgroundContainer = styled.div`
    width: 100%;
    height: 100%;
    background: rgba(9, 10, 10, 0.92);
    text-align: center;

    @media screen and (max-width: 480px) {
        max-width: 100%;
        margin-block-end: 5em;
        align-items: center;
    }
`;

const ContainerContent = styled.div`
    margin-block-start: 10em;
    margin-block-end: 2em;
`;

const TextContainer = styled.div`
    width: 50%;
    margin: auto;
`;

const SubTitle = styled.h2`
    color: #FFFFFF;
    font-size: 30px;
    text-align: center;
    font-family: SyneMono-Regular;
    font-weight: 500;

`;

const LandingContent = styled.h3`
    color: #FFFFFF;
    font-size: 20px;
    text-align: center;
    font-family: SyneMono-Regular;

`;

const CustomLogoImg = styled.img`
    max-width: 75%;
    margin-block-end: 3em;

`;

export function TopSection(props) {
  
    return(
        <TopContainer>
            <BackgroundContainer> 
            <Navbar />
            <Fade>
            <ContainerContent>
                <CustomLogoImg src={LogoImg} />
                <TextContainer>
                <SubTitle>Lorem ipsom dolor et ulam sdunt abunt avorpex ulet</SubTitle>
                <LandingContent>Lorem ipsom dolor et ulam sdunt abunt avorpex ulet.Lorem ipsom dolor et ulam sdunt abunt avorpex ulet.</LandingContent>
                </TextContainer>
            </ContainerContent>
            </Fade>
            </BackgroundContainer>
        </TopContainer>
    );
  }