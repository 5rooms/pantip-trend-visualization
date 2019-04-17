import React from 'react'
import styled from 'styled-components'
import { VictoryChart, VictoryAxis, VictoryBar } from 'victory'

const Container = styled.div`
  padding: 0 10vw;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
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

export default () => {
  const data = [
    { topic: '38619059', viewers: 42264 },
    { topic: '38611133', viewers: 29965 },
    { topic: '38602203', viewers: 26649 },
    { topic: '38610945', viewers: 18863 },
    { topic: '38622192', viewers: 15804 },
  ]
  const color = ['red', 'pink', 'blue', 'orange', 'green']
  return (
    <Container>
      <VictoryChart
        domainPadding={20}
      >
        <VictoryAxis />
        <VictoryAxis
          dependentAxis
          tickFormat={viewers => (`${viewers} viewers`)}
        />
        <VictoryBar
          style={{
            data: {
              fill: () => color.pop() || 'orange',
              // stroke: (d) => d.x === 3 ? "#000000" : "#c43a31",
              // strokeWidth: 3
            },
            labels: { fill: 'blue' }
          }}
          cornerRadius={{ topLeft: 10, topRight: 10 }}
          data={data}
          x="topic"
          y="viewers"
        />
      </VictoryChart>
      <Title>Topic Trends</Title>
    </Container>
  )
}
