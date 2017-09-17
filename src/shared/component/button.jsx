// @flow

import React from 'react'
import styled from 'styled-components'

type Props = {
  label: string,
  handleClick: Function,
  color: string,
}

const ButtonStyled = styled.button `
  color: ${props => props.color};
  background-color: ${props => props.theme.main};
  font-size: 1rem;
  padding: .5% .5%;
  border: 2px solid palevioletred;
  border-radius: 3px;
`

const Button = ({ label, handleClick, color }: Props) =>
  <ButtonStyled color={color} onClick={handleClick}>{label}</ButtonStyled>

export default Button
