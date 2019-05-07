import styled, { keyframes } from 'styled-components'

export const FadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`

export const Flex = styled.div`
  display: flex;
`

export const FlexWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
`
