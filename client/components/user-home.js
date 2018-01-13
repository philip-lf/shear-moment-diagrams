import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import BeamLayout from './BeamLayout'

class UserHome extends Component {
  constructor(props) {
    super(props)
    this.state = {
      beamType: ''
    }
    this.handleBeamType = this.handleBeamType.bind(this)
  }

  handleBeamType(event) {
    console.log('beam type: ', event.target.value)
    this.setState({ beamType: event.target.value })
  }

  render() {
    const {email} = this.props
    return (
      <div>
        <h3>Welcome, {email}</h3>
        <p>What Shape Would You like to Use?</p>
        <select
          name="beam"
          value={this.state.beamType}
          onChange={this.handleBeamType}>
          <option>Rectangle</option>
          <option>I-Beam</option>
          <option>T-Beam</option>
          <option>Channel-Beam</option>
        </select>
        <BeamLayout beamType={this.state.beamType} />
      </div>
    )
  }
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
