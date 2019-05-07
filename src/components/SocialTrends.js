import React from 'react'
import styled from 'styled-components'
import { FlexWrap, Flex } from '../styles'
import bg from '../images/social-bg3.jpg'
import facebook from '../images/facebook-glow.png'

const Background = styled.div`
  padding: 50px 2vw 80px 2vw;
  text-align: center;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${bg});
  background-position: 50% 40%;
  background-size: 1500px;
  background-repeat: no-repeat;
`

const Container = styled.div`
  max-width: 1300px;
  margin: auto;
`

const TitleBlue = styled.p`
  color: #0026ff;
  font-size: 80px;
  font-family: 'Neoneon';
  margin-right: 10px;
  margin-bottom: 0;
  text-shadow: 0 0 5px #b7d2ff, 0 0 30px #0026ff, 0 0 40px #0026ff, 0 0 50px #0026ff, 0 0 60px #0026ff, 0 0 70px #0026ff, 0 0 80px #0026ff;
`

const TitleViolet = styled.p`
  color: #7c009b;
  font-size: 80px;
  font-family: 'Neoneon';
  margin-left: 10px;
  margin-bottom: 0;
  text-shadow: 0 0 2px #c260db, 0 0 20px #c260db, 0 0 30px #7c009b, 0 0 40px #7c009b, 0 0 50px #7c009b, 0 0 60px #7c009b, 0 0 70px #7c009b;
`

const Box = styled.div`
  color: white;
  background-color: rgba(20, 20, 20, 0.8);
  font-size: 20px;
  padding: 20px 40px;
  max-width: 600px;
  margin: auto;
  text-align: left;
`

const BoxNumber = styled.p`
  font-family: 'Neoneon';
  color: yellow;
  font-size: 35px;
`

const BoxLabel = styled.p`
  margin-top: 15px;
  margin-left: 30px;
`

const BoxIcon = styled.img`
  height: 150px;
  position: relative; left: 50%;
  transform: translateX(-50%);
  margin-top: -90px;
`

export default () => {
  return (
    <Background>
      <Container>
        <FlexWrap style={{ justifyContent: 'center', marginBottom: '80px' }}>
          <TitleBlue>Social</TitleBlue>
          <TitleViolet>Media</TitleViolet>
        </FlexWrap>
        <Box>
          <BoxIcon src={facebook} alt="facebook" />
          <Flex style={{ margin: '10px 0' }}>
            <BoxNumber>1.</BoxNumber>
            <BoxLabel>เริ่มท้อกับการผ่อนบ้าน เมื่ออายุเริ่มหลัก 4x ทำไงดีครับ</BoxLabel>
          </Flex>
          <Flex style={{ margin: '10px 0' }}>
            <BoxNumber>2.</BoxNumber>
            <BoxLabel>สังคมฝรั่งเค้าสอนกันยังไงครับ ทำไมดูเหมือนเค้ามีความเป็นตัวของตัวเองสูง มั่นใจในตัวเอง และมีอิสระในการแสดงความคิด</BoxLabel>
          </Flex>
          <Flex style={{ margin: '10px 0' }}>
            <BoxNumber>3.</BoxNumber>
            <BoxLabel>เครียด เจอถุงยางในกระเป๋าสามี</BoxLabel>
          </Flex>
          <Flex style={{ margin: '10px 0' }}>
            <BoxNumber>4.</BoxNumber>
            <BoxLabel>รู้สึกอยากอ้วก เวลาจับมือกับแฟนค่ะ</BoxLabel>
          </Flex>
          <Flex style={{ margin: '10px 0' }}>
            <BoxNumber>5.</BoxNumber>
            <BoxLabel>สงสัยคับ​ ผู้หญิงที่ใช้แอพแต่งรูปเยอะๆ​ เค้าใช้ชีวิตจริงกันยังใงคับ</BoxLabel>
          </Flex>
        </Box>
      </Container>
    </Background>
  )
}
