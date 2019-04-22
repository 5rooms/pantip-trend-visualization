import React from 'react'
import styled from 'styled-components'
import pantipLogo from '../images/pantip-logo-yellow.png'

const Container = styled.div`
  height: 80px;
  ${'' /* background-image: linear-gradient(to right, #3C3963 , #9b97db); */}
  box-shadow: 0px 5px 18px rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  color: #f7d43a;
  position: fixed;
  width: 100vw;
  z-index: 99;
`

export default () => {
  return (
    <Container>
      <b style={{ fontSize: '30px', fontFamily: 'Georgia' }}><img src={pantipLogo} alt="logo" height="60" /> Trends</b>
    </Container>
  )
}
