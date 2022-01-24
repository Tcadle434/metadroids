import React from "react";
import styled from "styled-components";
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';
import CottonCandyImg from '../../assets/cottoncandy.png';
import FangsImg from '../../assets/fangs.png';
import VampireImg from '../../assets/vampire.png';


const ContentContainer = styled.div`
  width: 100%;
  background: #090A0A;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 480px) {
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

const SubTitle = styled.h2`
    color: #FFFFFF;
    font-size: 30px;
    text-align: center;
    word-spacing: 120%;
    font-family: SyneMono-Regular;
    margin-block-start: 6em;

    @media screen and (min-width: 480px) and (max-width: 1200px) {
        font-size: 28px;
    }
     @media screen and (max-width: 480px) {
        font-size: 20px;
    }
`;

const Details = styled.p`
    color: #FFFFFF;
    font-size: 20px;
    text-align: center;
    word-spacing: 120%;
    font-family: SyneMono-Regular;
    margin-block-end: 3em;

    @media screen and (min-width: 480px) and (max-width: 1200px) {
        font-size: 18px;
    }
     @media screen and (max-width: 480px) {
        font-size: 14px;
    }
`;

const SampleImg = styled.img`
    height: 15em;
    width: 15em;
    margin: 40px;
    border-radius: 20px;

`;

const ImageContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-block-start: 1em;
    margin-block-end: 12em;

    @media screen and (max-width: 480px) {
    margin-block-start: 6em;
    display: inline-block;
    align-items: center;
    }
`;


export function ContentOne(props) {

    return(
        <ContentContainer>
            <Fade>
            <TextContainer>
            <SubTitle> Lorem ipsom dolor et ulam sdunt abunt avorpex ulet </SubTitle>
            <Details>Lorem ipsom dolor et ulam sdunt abunt avorpex ulet. Lorem ipsom dolor et ulam sdunt abunt avorpex ulet. Lorem ipsom dolor et ulam sdunt abunt avorpex ulet. Lorem ipsom dolor et ulam sdunt abunt avorpex ulet</Details>
            </TextContainer>
            </Fade>

            <ImageContainer>
            <Flip>

            <SampleImg src={CottonCandyImg} />
            <SampleImg src={FangsImg} />
            <SampleImg src={VampireImg} />
            </Flip>

            </ImageContainer>

        </ContentContainer>
    );
  }