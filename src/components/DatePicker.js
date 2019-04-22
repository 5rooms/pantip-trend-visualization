import React from 'react'
import styled from 'styled-components'
import { DatePicker } from 'antd'
import moment from 'moment'
import time from '../images/time.jpg'

const { RangePicker } = DatePicker
const dateFormat = 'DD-MM-YYYY'

const Container = styled.div`
  text-align: center;
  padding: 10vh;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${time});
  background-position: 35% 35%;
`

export default () => {
  return (
    <Container>
      <RangePicker
        defaultValue={[moment('04-03-2019', dateFormat), moment('06-03-2019', dateFormat)]}
      />
    </Container>
  )
}
