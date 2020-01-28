import React, { useState, useEffect } from 'react'
import { NewspaperContainer, NewspaperContent, Flex, FlexWrap, NewspaperDate, NewspaperImage, NewspaperQA, NewspaperFacebook } from '../styles'
import { DatePicker } from 'antd'
import axios from 'axios'
import moment from 'moment'
import like from '../images/like.png'

const { RangePicker } = DatePicker

const dateFormat = 'DD-MM-YYYY'

const mockTopics = [
  { topic_id: '38619059', viewers: 42264 },
  { topic_id: '38611133', viewers: 29965 },
  { topic_id: '38602203', viewers: 26649 },
  { topic_id: '38610945', viewers: 18863 },
  { topic_id: '38622192', viewers: 15804 },
  { topic_id: '39580655', viewers: 15804 },
  { topic_id: '39587022', viewers: 15804 },
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
          _topics.push({
            ...topic,
            ...data,
            url: data.permalink,
            title: data.title_full,
            desc: data.desc,
            image: findImage(data.desc_full)
          })
        })
        _topics.sort((a, b) => b.viewers - a.viewers)
        setTopics(_topics)
      })
  }, [])

  const cut = (desc, length) => {
    return desc.substring(0, length).concat(desc.length <= length ? '' : '...')
  }

  const getNewspaperContent = (layout = 1, topic = {}) => {
    const hasImage = topic.image
    const length = layout > 1 && hasImage ? 200 : 300
    const desc = cut(topic.desc, length)
    const title = <h1>{topic.title}</h1>
    const detail = (
      <p>
        {desc}
        <br />
        <a rel="noopener noreferrer" target="_blank" href={topic.url}>อ่านต่อ</a>
      </p>
    )
    const image = hasImage ? <NewspaperImage src={topic.image} layout={layout} /> : ''

    return (
      <NewspaperContent layout={layout} hasImage={hasImage}>
        {layout < 2 ? (
          <>
            <div>
              {title}
              {detail}
            </div>
            {image}
          </>
        ) : (
            <div>
              {title}
              {image}
              {detail}
            </div>
          )}
      </NewspaperContent>
    )
  }

  const getQAContent = (topic = {}) => {
    return (
      <NewspaperQA>
        <div>
          <a rel="noopener noreferrer" target="_blank" href={topic.url}>Q: {topic.title} {topic.title.includes('?') ? '' : '?'}</a>
          <p><img src={topic.avatar} alt={topic.nickname} height="40" /> {topic.nickname} | {moment(parseInt(topic.created_time, 10) * 1000).format('LLL')}</p>
        </div>
        <div>
          A: {cut(topic.comments_desc[0].substring(9), 300)}
          <br />
          <br />
          <p><img src={topic.comments[0].avatar} alt={topic.comments[0].nickname} height="40" />{topic.comments[0].nickname} | {moment(parseInt(topic.comments[0].created_time, 10) * 1000).format('LLL')}</p>
        </div>
      </NewspaperQA>
    )
  }

  const getFacebookContent = (topic = {}) => {
    return (
      <NewspaperFacebook>
        <Flex>
          <img src={topic.avatar} alt={topic.nickname} height="40" />
          <div>
            <a rel="noopener noreferrer" target="_blank" href={topic.url}>{topic.nickname}</a>
            <br />
            <p>
              {moment(parseInt(topic.created_time, 10) * 1000).format('LLL')}
            </p>
          </div>
        </Flex>
        <p>{cut(topic.desc, 300)}<br /><a rel="noopener noreferrer" target="_blank" href={topic.url}>ดูเพิ่มเติม</a></p>
        {topic.image ? <img src={topic.image} alt="" /> : ''}
        <Flex>
          <p><img src={like} alt="like" height="25" /> {topic.point}</p>
          <p>ความคิดเห็น {topic.comment_count} รายการ</p>
        </Flex>
      </NewspaperFacebook>
    )
  }

  return topics.length > 0 ? (
    <NewspaperContainer>
      <h1>P A N T I P&nbsp;&nbsp;&nbsp;N E W S</h1>
      <NewspaperDate>
        <p>ปีที่ 1 ฉบับที่ 1 ประจำวันที่</p>
        <RangePicker
          style={{ width: `300px` }}
          defaultValue={[moment('04-03-2019', dateFormat), moment('06-03-2019', dateFormat)]}
        />
      </NewspaperDate>
      <hr />
      <hr />
      <Flex>
        <div>
          <FlexWrap>
            {getNewspaperContent(1, topics[2])}
            {getNewspaperContent(3, topics[4])}
            {getNewspaperContent(3, topics[0])}
            {getNewspaperContent(3, topics[1])}
            {getNewspaperContent(3, topics[3])}
            {getNewspaperContent(3, topics[3])}
            {getNewspaperContent(3, topics[3])}
          </FlexWrap>
        </div>
        <div>
          <h1>Trending now</h1>
          {[0, 1, 2, 3].map(n => getNewspaperContent(2, topics[n]))}
        </div>
      </Flex>
      <hr />
      <hr />
      <Flex>
        <div>
          <h1>คำถามยอดฮิต</h1>
          <FlexWrap>
            {getQAContent(topics[5])}
            {getQAContent(topics[6])}
            {getQAContent(topics[5])}
          </FlexWrap>
        </div>
        <div>
          <h1>Hits on Facebook</h1>
          <FlexWrap>
            {getFacebookContent(topics[2])}
            {getFacebookContent(topics[6])}
          </FlexWrap>
        </div>
      </Flex>
    </NewspaperContainer>
  )
    : <div>Loading...</div>
}