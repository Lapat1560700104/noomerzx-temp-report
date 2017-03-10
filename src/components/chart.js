import React from 'react'
import { Sparklines, SparklinesBars } from 'react-sparklines'

const chart = (props) => {
  return (
    <div>
      <Sparklines height={70} width={220} data={props.data}>
        <SparklinesBars style={{ stroke: "white", strokeWidth: "0.5", fill: props.color }} />
      </Sparklines>
    </div>
  )
}

export default chart