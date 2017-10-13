// @flow

import React, { Component } from 'react'
import styled from 'styled-components'
import Button from './button'
import SentimentButton from '../container/sb_button'


type Props = {
  mainHeadingText: string,
  mainHeadingColor: string,
  p1Text: string,
  p1Color: string,
  p2Text: string,
  p2Color: string,
  buttonLabel: string,
  buttonColor: string,
  buttonBackgroundColor: string,
  buttonBorderColor: string,
  buttonHoverBkColor: string,
  buttonHoverColor: string,
}

const Section = styled.section `
  text-align: right;
  background-image: url('https://s3-us-west-2.amazonaws.com/images.aliciagyori.com/color_pen.png');
  background-repeat: no-repeat;
  height: 300px;
  border-radius: 5px;
  width: 90%;
  margin: 0 auto;
`
const StyledDiv = styled.div `
  position: relative;
  top: 150px;
`
const MainHeading = styled.h1 `
  font-family: 'Montserrat', sans-serif;
  font-size: 3rem;
  color: ${props => props.mainHeadingColor ? props.mainHeadingColor : '#000'};
  margin: 0;
`
const Paragraph1 = styled.p `
  font-size: 2.3rem;
  color: ${props => props.p1Color ? props.p1Color : '#000'};
  margin: 10px 0 15px 0;
`
const HeroSection = ({ mainHeadingText, mainHeadingColor, p1Text, p1Color, p2Text, p2Color, buttonLabel, buttonColor, buttonBackgroundColor, buttonBorderColor, buttonHoverBkColor, buttonHoverColor }: Props ) =>

  <Section>
    <StyledDiv>

      {JSON.stringify({mainHeadingText}) === JSON.stringify({mainHeadingText: undefined}) ?
      <MainHeading mainHeadingColor={'#000'}>
        {'Welcome to My Website'}
      </MainHeading>
      :
      <MainHeading mainHeadingColor={mainHeadingColor}>
        {mainHeadingText}
      </MainHeading>
      }

      {JSON.stringify({p1Text}) === JSON.stringify({p1Text: undefined}) ?
      <Paragraph1 p1Color={'#000'}>
        {'Subtext Here'}
      </Paragraph1>
      :
      <Paragraph1 p1Color={p1Color}>
        {p1Text}
      </Paragraph1>
      }

      { JSON.stringify({buttonLabel})  === JSON.stringify({buttonLabel: undefined}) ?
         <Button label="Learn More"></Button> :
        <Button color={buttonColor} backgroundColor={buttonBackgroundColor} borderColor={buttonBorderColor} hoverBkColor={buttonHoverBkColor} hoverColor={buttonHoverColor} label={buttonLabel} ></Button>
      }

    </StyledDiv>
  </Section>

  //Add link and img


export default HeroSection
