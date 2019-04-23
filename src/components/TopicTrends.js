import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import podium from '../images/podium.png'
import crown1 from '../images/crown1.png'
import Loader from 'react-loader-spinner'
import Fade from 'react-reveal/Fade'
import Tada from 'react-reveal/Tada'

const Background = styled.div`
  padding: 50px 2vw 0 2vw;
  text-align: center;
  box-shadow: inset 2px 2px 18px #000000;
  ${'' /* background: #f9f9f9; */}
  background: #212121;
  color: white;
`

const Container = styled.div`
  max-width: 1300px;
  margin: auto;
`

const Title = styled.b`
  font-size: 50px;
  margin-bottom: 100px;
`

const Podium = styled.div`
  background-image: url(${podium});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: bottom;
  height: 27vw;
  max-height: 350px;
  display: flex;
  justify-content: center;
`

const TopicTitle = styled.div`
  margin-top: 20px;
  font-weight: bold;
  font-size: 16px;
`

const Viewer = styled.p`
  font-size: 20px;
  color: yellow;
  margin-bottom: 0;
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

  getTopicTitle(index) {
    const _topics = this.state.topics
    let backgroundColor = 'rgba(16, 0, 255, 0.5)'
    let maxWidth = `40%`
    if (index === 0) {
      backgroundColor = 'rgba(196, 0, 13, 0.5)'
      maxWidth = `60%`
    } else if (index === 1) {
      backgroundColor = 'rgba(32, 124, 13, 0.5)'
    }
    return (
      <TopicTitle
        style={Object.assign({
          maxWidth,
          backgroundColor,
          minWidth: '400px',
          fontSize: index === 0 ? '20px' : '',
          margin: 'auto',
          marginTop: '1vh',
        },
          index === 1 ? {
            marginRight: '0 !important'
          } : {},
          index === 2 ? {
            marginLeft: '0 !important'
          } : {}
        )}
      >
        <span>
          {_topics[index].title}<br />
          <Viewer>{_topics[index].viewers.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} viewers</Viewer>
        </span>
      </TopicTitle>
    )
  }

  render() {
    return (
      <Background>
        <Container>
          <Title>Top Topics</Title><br /><br /><br />
          {this.state.topics.length > 0 ?
            <Fade bottom>
              <img src={crown1} alt="1" height="120px" />
              <Tada>{this.getTopicTitle(0)}</Tada>
              <Podium>
                {this.getTopicTitle(1)}
                {this.getTopicTitle(2)}
              </Podium>
            </Fade>
            : <div style={{ height: '37vw', display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
              <Loader
                type="Plane"
                color="#00BFFF"
                height="27vw"
                width="100"
              />
            </div>}
        </Container>
      </Background>
    )
  }
}
