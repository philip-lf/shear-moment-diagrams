import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

export const UserHome = (props) => {
  const {email} = props

  return (
    <div>
      <h3>Welcome, {email}</h3>
      <p>What Shape Would You like to Use?</p>
      <select>
        <option>Rectangle</option>
        <option>I-Beam</option>
        <option>T-Beam</option>
        <option>Channel-Beam</option>
      </select>
    </div>
  )
}

const mapState = (state) => {
  return {
    email: state.user.email
  }
}

export default connect(mapState)(UserHome)

// PROP TYPES
UserHome.propTypes = {
  email: PropTypes.string
}
