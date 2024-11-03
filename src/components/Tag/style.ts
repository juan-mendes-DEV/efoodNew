import styled from 'styled-components'
import { Props } from '.'

export const TagContainer = styled.div<Props>`
  background-color: #e66767;
  color: white;
  font-size: ${(props) => (props.size === 'big' ? '12px' : '10px')};
  font-weight: bold;
  padding: ${(props) => (props.size === 'big' ? '8px 16px' : '4px 6px')};
  display: inline-block;
  margin: 7px;
`
