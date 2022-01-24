import React from "react";
import styled from "styled-components";
import { TeamService } from "../../components/teamMember";
import CloneImg from '../../assets/forevclone.png';

const TeamContainer = styled.div`
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
    margin-block-start: 6em;

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

const ContentRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  @media screen and (max-width: 480px) {
    align-items: center;
    justify-content: center;
    display: inline-block;
    width: 90%;
}
`;

export function TeamSection(props) {

    return(
        <TeamContainer>
            <TextContainer> 
                <Title>MEET THE TEAM</Title>
            </TextContainer>

            <ContentRow>

            <TeamService 
                imageUrl={CloneImg}
                name="BlockChief"
              />
              <TeamService 
                imageUrl={CloneImg}
                name="BlockChief"
              />
                <TeamService 
                imageUrl={CloneImg}
                name="BlockChief"
              />
              <TeamService 
                imageUrl={CloneImg}
                name="BlockChief"
              />

            </ContentRow>

            <ContentRow>

            <TeamService 
                imageUrl={CloneImg}
                name="BlockChief"
            />
            <TeamService 
                imageUrl={CloneImg}
                name="BlockChief"
            />
                <TeamService 
                imageUrl={CloneImg}
                name="BlockChief"
            />
            <TeamService 
                imageUrl={CloneImg}
                name="BlockChief"
            />

            </ContentRow>
        </TeamContainer>
    );
  }