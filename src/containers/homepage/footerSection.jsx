import React from "react";
import styled from "styled-components";
import LogoBlack from "../../assets/logoBlack.png";

const FooterContainer = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #FFFFFF;
  @media screen and (max-width: 480px) {
    display: inline-block;

}
  `;

const BrandContainer = styled.div`
  margin-left: 5%;
`;


const AccessibilityContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 10%;
  @media screen and (max-width: 480px) {
    display: flex;
    flex-direction: column;
    align-items: center;
}
`;

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const NameText = styled.p`
    font-family: SyneMono-Regular;
    font-size: 20px;
    color: #FFFFFF;
`;

const FooterText = styled.p`
    font-family: SyneMono-Regular!important;
    font-size: 18px!important;
    color: #000000;

`;

const CustomLogoImg = styled.img`
margin-block-start: 3em;

    max-width: 30%;

    @media screen and (min-width: 480px) and (max-width: 1200px) {
        max-width: 30%;
    }
     @media screen and (max-width: 480px) {
        max-width: 75%;
    }

`;

export function FooterSection(props) {

    return (
      <FooterContainer>
      <BrandContainer> 
        <TextContainer>
            <CustomLogoImg src={LogoBlack} />
            <FooterText>All rights reserved. <br />© 2022</FooterText>
        </TextContainer>
      </BrandContainer>

      <AccessibilityContainer>
      <a href = "https://twitter.com/metamorfans">
            <FooterText> Twitter </FooterText>
        </a>
        <a href = "">
            <FooterText> Discord </FooterText>
        </a>
      </AccessibilityContainer>
      </FooterContainer>
  
    );
  
  }