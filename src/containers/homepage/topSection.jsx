
   
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

    @media screen and (max-width: 480px) {
        margin-block-start: 12em;
    }
`;

const TextContainer = styled.div`
    width: 50%;
    margin: auto;

    @media screen and (min-width: 1200px) and (max-width: 1440px) {
        width: 70%;
    }
      @media screen and (min-width: 480px) and (max-width: 1200px) {
        width: 80%;
    }
     @media screen and (max-width: 480px) {
        width: 90%;
    }
`;

const SubTitle = styled.h2`
    color: #FFFFFF;
    font-size: 30px;
    text-align: center;
    font-family: SyneMono-Regular;

    @media screen and (min-width: 480px) and (max-width: 1200px) {
        font-size: 28px;
    }
     @media screen and (max-width: 480px) {
        font-size: 20px;
    }

`;

const LandingContent = styled.h3`
    color: #FFFFFF;
    font-size: 20px;
    text-align: center;
    font-family: SyneMono-Regular;

    @media screen and (min-width: 480px) and (max-width: 1200px) {
        font-size: 18px;
    }
     @media screen and (max-width: 480px) {
        font-size: 14px;
    }

`;

const CustomLogoImg = styled.img`
    max-width: 75%;
    margin-block-end: 3em;

    @media screen and (min-width: 480px) and (max-width: 1200px) {
        max-width: 85%;
    }
     @media screen and (max-width: 480px) {
        max-width: 90%;
    }

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