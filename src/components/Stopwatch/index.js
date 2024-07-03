import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {timer: 0, timerRunning: false}

  componentwillUnmount = () => {
    clearInterval(this.timerId)
  }

  resetTime = () => {
    clearInterval(this.timerId)
    this.setState({timer: 0, timerRunning: false})
  }

  stopTime = () => {
    clearInterval(this.timerId)
    this.setState({timerRunning: false})
  }

  startTime = () => {
    const {timerRunning} = this.state
    if (!timerRunning) {
      this.setState({timerRunning: true})
      this.timerId = setInterval(this.timerfn, 1000)
    }
  }

  timerfn = () => {
    const {timerRunning} = this.state
    if (timerRunning) {
      this.setState(prevState => ({timer: prevState.timer + 1}))
    } else {
      clearInterval(this.timerId)
    }
  }

  render() {
    const {timer} = this.state
    const minutes = Math.floor(timer / 60)
    const seconds = Math.floor(timer % 60)
    return (
      <div className="stopwatchBox">
        <h1>Stopwatch</h1>
        <div className="stopwatchSubBox">
          <div className="StopwatchLogo">
            <img
              className="stopwatchImg"
              alt="stopwatch"
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
            />
            <p className="Timerlogotxt">Timer</p>
          </div>
          <h1 className="Timer">
            {minutes < 10 ? `0${minutes}` : minutes}:
            {seconds < 10 ? `0${seconds}` : seconds}
          </h1>
          <div className="btnBox">
            <button onClick={this.startTime} className="btnBox1" type="button">
              Start
            </button>
            <button onClick={this.stopTime} className="btnBox2" type="button">
              Stop
            </button>
            <button onClick={this.resetTime} className="btnBox3" type="button">
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default Stopwatch
