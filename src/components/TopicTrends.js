import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios'

const Container = styled.div`
  padding: 20px 10vw;
  text-align: center;
  box-shadow: inset 2px 2px 18px #888888;
  background: #f9f9f9;

  & > .VictoryContainer {
    height: 450px !important;
    width: 820px !important; 
  }
`

const Title = styled.b`
  font-size: 50px;
  margin-top: 50px;
`

const topics = [
  { topic_id: '38619059', viewers: 42264 },
  { topic_id: '38611133', viewers: 29965 },
  { topic_id: '38602203', viewers: 26649 },
  { topic_id: '38610945', viewers: 18863 },
  { topic_id: '38622192', viewers: 15804 },
]
export default class TopicTrends extends Component {
  constructor(props) {
    super(props)
    this.state = {
      topics: []
    }
  }

  componentDidMount() {
    Promise.all(topics.map(topic => axios.get(`/mike?endpoint=/kratooc/${topic.topic_id}`)))
      .then(values => {
        const _topics = []
        values.forEach(value => {
          const topic = topics.find(t => t.topic_id === value.data._id)
          _topics.push({ ...topic, title: value.data._source.title_full })
        })
        _topics.sort((a, b) => b.viewers - a.viewers)
        this.setState({
          topics: _topics
        })
      })
  }

  render() {
    const _topics = this.state.topics
    return (
      <Container>
        <Title>Topic Trends</Title><br />
        {_topics.length > 0 ?
          _topics.map(topic =>
            <div key={topic.topic_id}>{_topics.indexOf(topic) + 1}.) {topic.title}</div>
          )
          : ''}
      </Container>
    )
  }
}
