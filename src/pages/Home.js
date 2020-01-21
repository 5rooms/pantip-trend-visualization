import React from 'react'
import SideBar from '../components/SideBar'
import Newspaper from '../components/Newspaper'
import { Flex } from '../styles'

export default () =>
  <Flex>
    <SideBar />
    <div style={{ marginLeft: '200px' }} />
    <Newspaper />
  </Flex>
