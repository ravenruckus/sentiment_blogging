// @flow

import React from 'react'
import styled from 'styled-components'


type Props = {
  pText: string,
  pFontSize: string,
  pTextAlign: string,
  pColor: string,
  pFontFamily: string,
}

const PStyled = styled.p `
  font-size: ${props => props.pFontSize ? props.pFontSize : 'inherit'};
  text-align: ${props => props.pTextAlign ? props.pTextAlign : 'inherit'};
  color: ${props => props.pColor ? props.pColor : '#000' };
  font-family: $props => props.pFontFamily ? props.pFontFamily : 'inherit'
};
`

const Paragraph = ({pText, pFontSize, pTextAlign, pColor, pFontFamily }: Props) =>
  <PStyled pFontSize={pFontSize} pTextAlign={pTextAlign} pColor={pColor} pFontFamily={pFontFamily} >{pText}</PStyled>

export default Paragraph
