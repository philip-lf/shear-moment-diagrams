import React, {Component} from 'react'

class BeamLayout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      height: '',
      width: ''
    }
    this.handleHeight = this.handleHeight.bind(this)
    this.handleWidth = this.handleWidth.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleHeight(event) {
    this.setState({ height: event.target.value })
  }

  handleWidth(event) {
    this.setState({ width: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault()
    beam(this.props.beamType, this.state.height, this.state.width)
  }

  render() {
    return (
      <div>
        <p>{beam(this.props.beamType)}</p>
        <form onSubmit={event => this.handleSubmit(event)}>
          <div className="form-group">
            <label>Height</label>
            <input
                type="text"
                name="height"
                value={this.state.height}
                onChange={this.handleHeight} />
          </div>
          <div className="form-group">
            <label>Width</label>
            <input
                type="text"
                name="width"
                value={this.state.width}
                onChange={this.handleWidth} />
          </div>
          <button type="submit" className="btn btn-default">
            SUBMIT
          </button>
        </form>
        <div id="beam" />
      </div>
    )
  }

}

export default BeamLayout

// return div representing associate shape
function beam(beamType, beamHeight, beamWidth) {
  let beamShape = document.getElementById('beam')
  if (!beamHeight) beamHeight = 100
  if (!beamWidth) beamWidth = 100

  switch (beamType) {
    case 'Rectangle':
      beamShape.style.backgroundColor = 'red'
      beamShape.style.height = `${beamHeight}px`
      beamShape.style.width = `${beamWidth}px`
      return 1
    case 'I-Beam':
      beamShape.style.backgroundColor = 'red'
      beamShape.style.height = `${beamHeight}px`
      beamShape.style.width = `${beamWidth}px`
      return 2
    case 'T-Beam':
      beamShape.style.backgroundColor = 'yellow'
      beamShape.style.height = `${beamHeight}px`
      beamShape.style.width = `${beamWidth}px`
      return 3
    case 'Channel-Beam':
      beamShape.style.backgroundColor = 'black'
      beamShape.style.height = `${beamHeight}px`
      beamShape.style.width = `${beamWidth}px`
      return 4
    default:
      return 5
  }
}
