import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { NewspaperContainer, NewspaperVeryLargeContent, NewspaperLargeContent, NewspaperContent, NewspaperImage } from '../styles'

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
    return ''
  }

  useEffect(() => {
    Promise.all(mockTopics.map(topic => axios.get(`/mike?endpoint=/kratooc/${topic.topic_id}`)))
      .then(values => {
        const _topics = []
        values.forEach(value => {
          const topic = mockTopics.find(t => t.topic_id === value.data._id)
          _topics.push({ ...topic, title: value.data._source.title_full, desc: value.data._source.desc_full, image: findImage(value.data._source.desc_full) })
        })
        _topics.sort((a, b) => b.viewers - a.viewers)
        setTopics(_topics)
      })
  }, [])

  return topics.length > 0 ? <NewspaperContainer>
    <NewspaperVeryLargeContent>
      {topics[2].title}
      {topics[2].image ? <NewspaperImage src={topics[2].image} alt={topics[2].title} /> : ''}
    </NewspaperVeryLargeContent>
    <NewspaperVeryLargeContent>
      {topics[4].title}
      {topics[4].image ? <NewspaperImage src={topics[4].image} alt={topics[4].title} /> : ''}
    </NewspaperVeryLargeContent>
    <NewspaperContent>
      {topics[0].title}
      {topics[0].image ? <NewspaperImage src={topics[0].image} alt={topics[0].title} /> : ''}
    </NewspaperContent>
    <NewspaperContent>
      {topics[3].title}
      {topics[3].image ? <NewspaperImage src={topics[3].image} alt={topics[3].title} /> : ''}
    </NewspaperContent>
    <NewspaperLargeContent>
      {topics[1].title}
      {topics[1].image ? <NewspaperImage src={topics[1].image} alt={topics[1].title} /> : ''}
    </NewspaperLargeContent>
    <NewspaperLargeContent>
      ปรีณาลั่น! ทั้งหมดเป็นฝีมือของทักษิณ
    </NewspaperLargeContent>
    <NewspaperContent>
      ปรีณาลั่น! ทั้งหมดเป็นฝีมือของทักษิณ
      </NewspaperContent>
    <NewspaperContent>
      ปรีณาลั่น! ทั้งหมดเป็นฝีมือของทักษิณ
      </NewspaperContent>
  </NewspaperContainer>
    : <div>Loading...</div>
}