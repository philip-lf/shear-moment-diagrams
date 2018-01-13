import React from 'react'

const BeamLayout = (props) => {

  return (
    <div>
        <p>{beam(props.beamType)}</p>
        <div id="beam" />
    </div>
  )
}

export default BeamLayout

// return div representing associate shape
function beam(beamType) {
  let beamShape = document.getElementById('beam')

  switch (beamType) {
    case 'I-Beam':
      beamShape.style.backgroundColor = 'red'
      return 2
    case 'T-Beam':
      beamShape.style.backgroundColor = 'yellow'
      return 3
    case 'Channel-Beam':
      beamShape.style.backgroundColor = 'black'
      return 4
    default: // Rectangle
      return 1
  }
}
