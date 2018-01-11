import React from 'react'
// import {connect} from 'react-redux'

const BeamLayout = (props) => {

  return (
    <div>
        <p>{props.beamType}</p>
    </div>
  )
}

export default BeamLayout

// const mapState = (state) => {
//   return {
//     email: state.user.email
//   }
// }

// export default connect(mapState)(UserHome)

