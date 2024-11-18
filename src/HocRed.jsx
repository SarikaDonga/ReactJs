import React from 'react'

const HocRed = (props) => {
  return (
    <div style={{color:"blue",backgroundColor:"red",width:'100px'}}><props.cmpo/></div>
  )
}

export default HocRed