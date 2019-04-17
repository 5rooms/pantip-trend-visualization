import React from 'react'
import styled from 'styled-components'
import { DatePicker } from 'antd'
import moment from 'moment'

const { RangePicker } = DatePicker
const dateFormat = 'DD-MM-YYYY'

const Container = styled.div`
  text-align: center;
  padding: 8vh;
  background: #e8e8e8;
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
