// Write your code here
import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSubscribe: true}

  isSubscribed = () => {
    this.setState(prevState => {
      console.log(`is subscribed ${prevState.isSubscribe}`)
      return {isSubscribe: false}
    })
  }

  isSubscribe = () => {
    this.setState(prevState => {
      console.log(`is subscribe ${prevState.isSubscribe}`)
      return {
        isSubscribe: true,
      }
    })
  }

  renderAuthButton = () => {
    const {isSubscribe} = this.state
    if (isSubscribe === true) {
      return (
        <button className="button" onClick={this.isSubscribed} type="button">
          Subscribe
        </button>
      )
    }
    return (
      <button className="button" onClick={this.isSubscribe} type="button">
        Subscribed
      </button>
    )
  }

  render() {
    return (
      <div className="container">
        <h1 className="heading">Welcome</h1>
        <p className="paragraph">Thank You! Happy Learning</p>
        {this.renderAuthButton()}
      </div>
    )
  }
}
export default Welcome
