import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSubscribed: false}

  onUnsubscribe = () => {
    this.setState(() => ({isSubscribed: false}))
  }

  onSubscribe = () => {
    this.setState(() => ({isSubscribed: true}))
  }

  render() {
    const {isSubscribed} = this.state
    return (
      <div className="container">
        <h1>Welcome</h1>
        <h2>Thank you! Happy Learning</h2>
        <div className="buttonContanier">
          {isSubscribed ? (
            <button type="button" onClick={this.onUnsubscribe}>
              Subscribed
            </button>
          ) : (
            <button type="button" onClick={this.onSubscribe}>
              Subscribe
            </button>
          )}
        </div>
      </div>
    )
  }
}

export default Welcome
