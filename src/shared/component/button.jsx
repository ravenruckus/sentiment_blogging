// @flow

import React from 'react'
import styled from 'styled-components'

type Props = {
  label: string,
  handleClick: Function,
  color: string,
}

const ButtonStyle = styled.button `
  color: ${props => props.color};
  background-color: ${props => props.theme.main};
  font-size: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`

const Button = ({ label, handleClick, color }: Props) =>
  <button color={color} onClick={handleClick}>{label}</button>

export default Button
