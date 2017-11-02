// @flow

import React from 'react'
import styled from 'styled-components'

type Props = {
  label: string,
  handleClick: Function,
  color: string,
  backgroundColor: string,
  borderColor: string,
  hoverBkColor: string,
  hoverColor: string,
}

const ButtonStyled = styled.button `
  color: ${props => props.color ? props.color : '#fff'};
  background-color: ${props => props.backgroundColor ? props.backgroundColor : 'hsl(0, 0%, 20%)' };
  font-size: 1rem;
  padding: 5px;
  border: 2px solid ${props => props.borderColor ? props.borderColor : 'hsl(0, 0%, 40%)'};
  border-radius: 5px;
  :hover {
    background-color: ${props => props.hoverBkColor ? props.hoverBkColor : 'hsl(0, 0%, 90%)'};
    color: ${props => props.hoverColor ? props.hoverColor : 'hsl(0, 0%, 20%)'};
    transition: background-color .5s, color .5s;
  };
  }
`

const Button = ({ label, handleClick, color, backgroundColor, borderColor, hoverBkColor, hoverColor }: Props) =>
<ButtonStyled color={color} backgroundColor={backgroundColor} borderColor={borderColor} hoverBkColor={hoverBkColor}   onClick={handleClick} hoverColor={hoverColor}>{label}</ButtonStyled>

export default Button
