import React, { PureComponent } from 'react'
import Navbar from '../components/Navbar'
import TopicTrends from '../components/TopicTrends'
import DatePicker from '../components/DatePicker'
import styled from 'styled-components'
// import axios from 'axios'

const Container = styled.div`
  padding-top: 80px;
`


export default class Applications extends PureComponent {
  componentDidMount() {
    // axios.get('/')
    //   .then(res => console.log(res.data))
    //   .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <Navbar />
        <Container>
          <DatePicker />
          <TopicTrends />
        </Container>
      </div>
    )
  }
}
