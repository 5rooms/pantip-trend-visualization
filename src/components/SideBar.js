import React from 'react'
import { Menu, DatePicker, Button } from 'antd'
import { SideBarTitle, SideBarIcon, SideBarContainer, SideBarSectionTitle, SideBarRoom, Center } from '../styles'
import moment from 'moment'
import twitter from '../images/twitter.png'
import facebook from '../images/facebook.png'
import google from '../images/google.png'

const { SubMenu } = Menu
const { RangePicker } = DatePicker

const dateFormat = 'DD-MM-YYYY'

export default () => {
  return (
    <SideBarContainer>
      <Menu
        defaultOpenKeys={['social']}
        mode="inline"
      >
        <SideBarTitle>Pantip News</SideBarTitle>
        <SideBarSectionTitle>Room Rank</SideBarSectionTitle>
        {/* <Divider /> */}
        <Menu.Item>1. <SideBarRoom>ห้องเฉลิมกรุง</SideBarRoom></Menu.Item>
        <Menu.Item>2. <SideBarRoom>ห้องกรุงโซล</SideBarRoom></Menu.Item>
        <Menu.Item>3. <SideBarRoom>ห้องบลูแพลนเน็ต</SideBarRoom></Menu.Item>
        <Menu.Item>4. <SideBarRoom>ห้องก้นครัว</SideBarRoom></Menu.Item>
        <Menu.Item>5. <SideBarRoom>ห้องบางรัก</SideBarRoom></Menu.Item>
        <SideBarSectionTitle>Period of Trend</SideBarSectionTitle>
        <Center>
          <RangePicker
            style={{ width: `95%` }}
            defaultValue={[moment('04-03-2019', dateFormat), moment('06-03-2019', dateFormat)]}
          />
        </Center>
        <SubMenu
          key="social"
          title={
            <li style={{ height: '10px', fontWeight: 'bold' }}>Hits on</li>
          }
        >
          <Menu.Item key="twitter">
            <SideBarIcon src={twitter} alt="twitter" />
            Twitter
          </Menu.Item>
          <Menu.Item key="facebook">
            <SideBarIcon src={facebook} alt="facebook" />
            Facebook
          </Menu.Item>
          <Menu.Item key="google">
            <SideBarIcon src={google} alt="google" />
            Google
          </Menu.Item>
        </SubMenu>
        <Center>
          <Button type="primary" style={{ marginTop: '30px' }}>Dashboard</Button>
        </Center>
      </Menu>
    </SideBarContainer>
  )
}
