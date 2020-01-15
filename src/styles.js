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
  width: 300px;
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
  background: #D2E9E1;
  width: 100%;
  min-height: 100vh;
  padding: 5px;
  display: flex;
  flex-wrap: wrap;

  & > div {
    background: #3399AA;
    padding: 10px;
    border: 10px solid #D2E9E1;
    font-family: 'Kanit', sans-serif;
    color: #FFCD05;
    overflow: hidden;
  }
`

export const NewspaperVeryLargeContent = styled.div`
  width: 50%;
  height: 50%;
  font-size: 30px;
`

export const NewspaperLargeContent = styled.div`
  width: 50%;
  height: 25%;
  font-size: 24px;
`

export const NewspaperContent = styled.div`
  width: 25%;
  height: 25%;
  font-size: 24px;
`

export const NewspaperImage = styled.img`
  width: 100%;
`
