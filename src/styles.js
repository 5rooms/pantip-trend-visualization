import styled, { keyframes } from 'styled-components'

export const FadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`

export const SlideIn = (height) => keyframes`
  from {
    height: 0;
    align-items: center;
    overflow: hidden;
  }

  to {
    height: ${height};
    align-items: center;
    overflow: auto
  }
`

export const Flex = styled.div`
  display: flex;
`

export const FlexWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const Center = styled.div`
  text-align: center;
`

export const NavbarContainer = styled.div`
  height: 80px;
  background-color: white;
  color: black;
  box-shadow: ${props => props.scrollPosition > 0 ? '0px 2px 10px rgba(0, 0, 0, 0.3)' : '0px 2px 5px rgba(0, 0, 0, 0.09)'};
  display: flex;
  align-items: center;
  position: fixed;
  width: 100vw;
  z-index: 99;
  animation: ${SlideIn('80px')} 2s;
  padding: 0 6.5%;

  & > * {
    animation: ${SlideIn('100%')} 2s;
    animatin: ${FadeIn} 2s;
    margin: 0 5%;
  }

  & > div:first-child {
    margin: 0;
  }

  & > div:nth-child(2) > div:last-child {
    position: absolute;
    right: 4%;
  }

  & > div {
    display: flex;
  }

  & > div > div {
    margin: 0 50px;
    font-size: 20px;
    font-family: 'Pridi', serif;
  }
`

export const NavbarSpace = styled.div`
  height: 80px;
`

export const SideBarContainer = styled.div`
  height: 100vh;
  width: 250px;
  position: fixed;
  overflow: hidden;
  background-color: #1B262C;

  & div, & li, & ul {
    background-color: #1B262C !important;
    border: 0 !important;
    color: white;
    margin-top: 0 !important;
    margin-bottom: 0 !im
  }
`

export const SideBarTitle = styled.div`
  padding: 30px 30px;
  font-size: 25px;
  font-weight: bold;
  text-align: center;
`

export const SideBarIcon = styled.img`
  height: 25px;
  width: 25px;
  margin-right: 15px;
  background-color: transparent !important;
`

export const SideBarSectionTitle = styled.li`
  height: 10px;
  font-weight: bold;
  padding: 20px 0 15px 24px;
`

export const Divider = styled.div`
  height: 1px;
  width: 80%;
  background-color: #C4C4C4;
`

export const SideBarRoom = styled.span`
  background-color: #007065;
  padding: 5px 10px;
`

export const NewspaperContainer = styled.div`
  max-width: 90%;
  margin: auto;
  min-height: 100vh;
  padding: 5px;
  animation: ${FadeIn} 1s;

  & > h1 {
    text-align: center;
    margin-top: 20px;
    margin-bottom: 10px;
    font-size: 70px;
    font-weight: bold;
    font-family: 'Anton', sans-serif;
  }

  & > hr {
    width: 100%;
    margin-top: 50px;
    border-width: 0.5px;
    border-color: black;
  }

  & > hr:nth-child(4), & > hr:nth-child(7) {
    margin-top: -5px;
    margin-bottom: 20px;
  }

  & > div:nth-child(5) > div:first-child {
    max-width: 70%;
    border-right: 1px solid black;
  }

  & > div:nth-child(5) > div:nth-child(2) > h1, & > div:nth-child(8) > div > h1 {
    font-family: 'Anton', sans-serif;
    border: 2px solid black;
    width: 180px;
    text-align: center;
    margin: auto;
    margin-bottom: 10px;
  }

  & > div:nth-child(8) > div > h1 {
    width: 200px;
    font-family: 'Pridi', serif;
    font-size: 30px;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  & > div:nth-child(8) > div:first-child {
    width: 50%;
    border-right: 1px solid black;
  }

  & > div:nth-child(8) > div {
    width: 50%;
  }

  & > div:nth-child(8) > div:nth-child(2) {
    ${'' /* background-color: #e9ebee; */}
    padding: 0 20px;
  }

  & > div:nth-child(8) > div:nth-child(2) > h1 {
    width: 280px;
  }
`

export const NewspaperDate = styled.div`
  display: flex;
  font-weight: bold;
  float: right;
  color: black;

  & > p {
    font-size: 20px;
    margin-right: 20px;
    margin-bottom: 0;
  }
`

export const NewspaperContent = styled.div`
  width: ${props => {
    switch (props.layout) {
      // case 2: return '66.66%'
      case 3: return '33.33%'
      default: return '100%'
    }
  }};
  padding: 10px 20px;
  display: ${props => props.layout === 1 ? 'flex' : 'block'};
  color: black;

  & > div:first-child {
    width: ${props => props.hasImage && props.layout === 1 ? '40%' : '100%'};
  }

  & > div > h1, & > div > p {
    padding-right: 20px;
  }

  & > div > h1 {
    font-size: ${props => {
    switch (props.layout) {
      case 2: return '20px'
      case 3: return '20px'
      default: return '30px'
    }
  }};
    font-weight: bolder;
    font-family: 'Pridi', serif;
  }

  & > div > p {
    font-size: ${props => props.layout === 1 ? '20px' : '16px'};
    font-family: 'Bai Jamjuree', sans-serif;
  }
`

export const NewspaperImage = styled.div`
  background-image: url('${props => props.src}');
  background-repeat: no-repeat;
  background-size: 100% auto;
  width: ${props => props.layout === 1 ? '60%' : '100%'};
  height: ${props => props.layout === 1 ? 'auto' : '200px'};
  margin-top: 10px;
  margin-bottom: 10px;
  transition: transform .2s;

  &:hover {
    transform: scale(1.03);
  }
`

export const NewspaperQA = styled.div`
  padding: 10px 20px;
  color: black;

  & > div:first-child {
    background-color: #c4c4c4;
  }

  & > div:first-child > h1 {
    font-weight: bold;
    font-size: 20px;
  }

  & > div:nth-child(2) {
    background-color: #eeeeee;
  }

  & > div {
    font-size: 18px;
    padding: 10px 10px;
  }

  & > div > p {
    text-align: right;
    font-size: 16px;
    margin-bottom: 0;
  }

  & img {
    border-radius: 50%;
    margin-right: 8px;
  }
`

export const NewspaperFacebook = styled.div`
  padding: 12px;
  font-size: 16px;
  background: white;
  color: black;
  margin: 5px 0;
  border-radius: 3px;

  & > div > div > a {
    color: #385898;
    font-weight: 600;
  }

  & > div > div > p {
    color: #616770;
    font-size: 14px;
  }

  & > div > img {
    margin-right: 8px;
    border-radius: 50%;
  }
`
