// @flow

import React from 'react'
import styled from 'styled-components'

type Props = {
  mainHeadingText: string,
  mainHeadingColor: string,
  p1Text: string,
  p1Color: string,
  p2Text: string,
  p2Color: string,
}

const Section = styled.section `
  text-align: center;
  background-image: url('https://www.dropbox.com/s/ymw7sp6uh8d6mrg/IMG_2567.JPG?dl=1');
  height: 600px;
  border-radius: 5px;
`
const StyledDiv = styled.div `
  position: relative;
  top: 200px;
`
const MainHeading = styled.h1 `
  font-family: 'Montserrat', sans-serif;
  font-size: 3rem;
  color: ${props => props.mainHeadingColor ? props.mainHeadingColor : '#000'};
  margin: 0;
`
const Paragraph1 = styled.p `
  font-size: 2rem;
  color: ${props => props.p1Color ? props.p1Color : '#000'};
  margin: .2%;
`

const Paragraph2 = styled.p `
  font-size: 1.5rem;
  color: ${props => props.p2Color ? props.p2Color : '000'};
  margin: .5%;
`

const HeroSection = ({ mainHeadingText, mainHeadingColor, p1Text, p1Color, p2Text, p2Color  }: Props ) =>
  <Section>
    <StyledDiv>
      <MainHeading mainHeadingColor={mainHeadingColor}>
        {mainHeadingText}
      </MainHeading>
      <Paragraph1 p1Color={p1Color}>
        {p1Text}
      </Paragraph1>
      <Paragraph2 p2Color={p2Color}>
        {p2Text}
      </Paragraph2>
    </StyledDiv>
  </Section>

export default HeroSection
