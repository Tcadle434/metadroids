import React from "react";
import styled from "styled-components";
import { ContentComponent } from "../../components/contentComponent";
import Fade from 'react-reveal/Fade';
import PipeImg from '../../assets/pipe.png';
import MatrixImg from '../../assets/matrix.png';
import MetaBanner from '../../assets/metadroid-banner.png';


const ContentContainer = styled.div`
  width: 100%;
  background: #151516;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 480px) {
}
`;

const ComponentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  margin-block-end: 1.2em;
  @media screen and (min-width: 480px) and (max-width: 1420px) {
    width: 80%;
  }
    @media screen and (max-width: 480px) {
      align-items: center;
      justify-content: center;
      display: inline-block;
      width: 90%;
  }
`;

const SubTitle = styled.h2`
    color: #FFFFFF;
    font-size: 30px;
    text-align: center;
    word-spacing: 120%;
    font-family: SyneMono-Regular;
    margin-block-start: 3em;
    margin-block-end: 3em;


    @media screen and (min-width: 480px) and (max-width: 1200px) {
        font-size: 28px;
    }
     @media screen and (max-width: 480px) {
        font-size: 20px;
    }
`;

const Banner = styled.img`
    width: 100%;

`;

export function ContentTwo(props) {

    return(
        <ContentContainer>
            <ComponentContainer> 
                <Fade>
                <SubTitle>Lorem ipsom dolor et ulam sdunt abunt avorpex ulet</SubTitle>
                </Fade>

            <Fade top>
            <ContentComponent
                subTitle= "Lorem ipsom"
                descriptionOne="Lorem ipsom dolor et ulam sdunt abunt avorpex ulet.Lorem ipsom dolor et ulam sdunt abunt avorpex ulet"
                descriptionTwo="Lorem ipsom dolor et ulam sdunt abunt avorpex ulet.Lorem ipsom dolor et ulam sdunt abunt avorpex ulet"
                imageUrl={PipeImg}
            />
            </Fade>

            <Fade top>
            <ContentComponent
                subTitle= "Lorem ipsom"
                descriptionOne="Lorem ipsom dolor et ulam sdunt abunt avorpex ulet.Lorem ipsom dolor et ulam sdunt abunt avorpex ulet"
                descriptionTwo="Lorem ipsom dolor et ulam sdunt abunt avorpex ulet.Lorem ipsom dolor et ulam sdunt abunt avorpex ulet"
                imageUrl={MatrixImg}
                isReversed
            />
            </Fade>
        </ComponentContainer>
        
        <Banner src={MetaBanner} />

        </ContentContainer>
    );
  }