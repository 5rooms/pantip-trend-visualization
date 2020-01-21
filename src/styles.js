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

export const Center = styled.div`
  text-align: center;
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
  background: white;
  max-width: 1450px;
  margin: auto;
  width: 100%;
  min-height: 100vh;
  padding: 5px;
  color: black;

  & > h1 {
    text-align: center;
    margin-top: 20px;
    margin-bottom: 0px;
    font-size: 70px;
    font-weight: bold;
    font-family: 'Anton', sans-serif;
  }

  & > hr {
    width: 80%;
    margin-bottom: 20px;
    border-width: 2px;
    border-color: black;
  }
`

export const NewspaperDate = styled.div`
  display: flex;
  margin-left: calc(80% - 290px);
  font-weight: bold;

  & > p {
    font-size: 20px;
    margin-right: 20px;
    margin-bottom: 0;
  }
`

export const NewspaperContent = styled.div`
  width: ${props => {
    switch (props.layout) {
      case 2: return '66.66%'
      case 3: return '33.33%'
      default: return '100%'
    }
  }};
  padding: 10px 20px;
  display: ${props => props.layout < 3 ? 'flex' : 'block'};

  & > div:first-child {
    width: ${props => props.hasImage && props.layout < 2 ? '40%' : '100%'};
  }

  & > div > h1, & > div > p {
    padding-right: 20px;
  }

  & > div > h1 {
    font-size: ${props => {
    switch (props.layout) {
      case 2: return '30px'
      case 3: return '20px'
      default: return '40px'
    }
  }};
    font-weight: bolder;
    font-family: 'Pridi', serif;
  }

  & > div > p {
    font-size: 16px;
    font-family: 'Bai Jamjuree', sans-serif;
  }
`

export const NewspaperImage = styled.div`
  background-image: url('${props => props.src}');
  background-repeat: no-repeat;
  background-size: 100% auto;
  width: ${props => props.layout < 2 ? '60%' : '100%'};
  height: ${props => props.layout < 2 ? 'auto' : '250px'};
`
