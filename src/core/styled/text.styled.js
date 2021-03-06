import styled from 'styled-components'
import { color, size } from 'core/commons'

const baseStyle = `
font-family: Roboto;
font-style: normal;
font-weight: normal;
line-height: normal;
color: ${color.text};
`

export const StyledText = styled.p`
${baseStyle}
${props => (props.color ? `color: ${props.color};` : '')}
font-size: ${props => (props.size ? props.size : size.font.md)};
`

export const StyledHeader = styled.h2`
${baseStyle}
${props => (props.color ? `color: ${props.color};` : '')}
font-size: ${props => (props.size ? props.size : size.font.lg)};
`

export const StyledLink = styled.a`
${baseStyle}
cursor: pointer;
color: ${props => (props.color ? props.color : color.primary)};
${props => (props.nounderline ? 'text-decoration: none;' : '')}
&:hover {
    color: ${props => (props.hoverColor ? props.hoverColor : color.primaryActive)};
}
`