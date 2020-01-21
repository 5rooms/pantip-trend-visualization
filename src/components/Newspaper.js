import React, { useState, useEffect } from 'react'
import { NewspaperContainer, NewspaperContent, FlexWrap, NewspaperDate, NewspaperImage } from '../styles'
import { DatePicker } from 'antd'
import axios from 'axios'
import moment from 'moment'

const { RangePicker } = DatePicker

const dateFormat = 'DD-MM-YYYY'

const mockTopics = [
  { topic_id: '38619059', viewers: 42264 },
  { topic_id: '38611133', viewers: 29965 },
  { topic_id: '38602203', viewers: 26649 },
  { topic_id: '38610945', viewers: 18863 },
  { topic_id: '38622192', viewers: 15804 },
]

export default () => {
  const [topics, setTopics] = useState([])

  const findImage = desc => {
    if (desc.includes('src'))
      return desc.split('src')[1].split('"')[1]
    return null
  }

  useEffect(() => {
    Promise.all(mockTopics.map(topic => axios.get(`/mike?endpoint=/kratooc/${topic.topic_id}`)))
      .then(values => {
        const _topics = []
        values.forEach(value => {
          const topic = mockTopics.find(t => t.topic_id === value.data._id)
          const data = value.data._source
          _topics.push({ ...topic, url: data.permalink, title: data.title_full, desc: data.desc, image: findImage(data.desc_full) })
        })
        _topics.sort((a, b) => b.viewers - a.viewers)
        setTopics(_topics)
      })
  }, [])

  const getNewspaperContent = (layout = 1, topic = {}) => {
    const hasImage = topic.image
    const title = <h1>{topic.title}</h1>
    const detail = (
      <p>
        {topic.desc.substring(0, layout > 1 && hasImage ? 200 : 500)}...&nbsp;
        <br />
        <a rel="noopener noreferrer" target="_blank" href={topic.url}>อ่านต่อ</a>
      </p>
    )
    const image = hasImage ? <NewspaperImage src={topic.image} layout={layout} /> : ''

    return (
      <NewspaperContent layout={layout} hasImage={hasImage}>
        {layout < 3 ? (
          <>
            <div>
              {title}
              {detail}
            </div>
            {image}
          </>
        ) : (
            <div>
              {image}
              {title}
              {detail}
            </div>
          )}
      </NewspaperContent>
    )
  }

  return topics.length > 0 ? (
    <NewspaperContainer>
      <h1>P A N T I P&nbsp;&nbsp;&nbsp;N E W S</h1>
      <NewspaperDate>
        <p>ปีที่ 1 ฉบับที่ 1</p>
        <RangePicker
          style={{ width: `300px` }}
          defaultValue={[moment('04-03-2019', dateFormat), moment('06-03-2019', dateFormat)]}
        />
      </NewspaperDate>
      <hr />
      <FlexWrap>
        {getNewspaperContent(1, topics[2])}
        {getNewspaperContent(2, topics[4])}
        {getNewspaperContent(3, topics[0])}
        {getNewspaperContent(2, topics[1])}
        {getNewspaperContent(3, topics[3])}
      </FlexWrap>
    </NewspaperContainer>
  )
    : <div>Loading...</div>
}