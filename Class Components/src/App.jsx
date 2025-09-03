import { Component } from 'react'
import './App.css'

class App extends Component {
  state = {
    count: 0,
  }

  increaseValue = () => {
    this.setState({ count: this.state.count + 1 })
  }

  resetValue = () => {
    this.setState({ count: 0 })
  }

  addTen = () => {
    this.setState({ count: this.state.count + 10 })
  }

  removeTen = () => {
    if (this.state.count <= 0) {
      console.log('cart Value low')
    } else {
      this.setState({ count: this.state.count - 10 })
    }
  }

  render() {
    return (
      <>
        <div className="centerthisbox">
          <h1 style={{ color: 'white' }}>Class Comonent Component</h1>

          <div className="counter">
            <h2 style={{ color: 'white' }}>Count: {this.state.count}</h2>
            <div className="bottons">
              <button className="increase" onClick={this.increaseValue}>
                Increase
              </button>
              <button
                className="increase"
                onClick={this.resetValue}
                disabled={this.state.count === 0}
              >
                Reset
              </button>
            </div>
            <div className="changeTen">
              <div className="changeTenColor">
                <h2 onClick={this.addTen}>+ 10</h2>
              </div>
              {this.state.count > 10 && (
                <div className="changeTenColor">
                  <h2 onClick={this.removeTen}>- 10</h2>
                </div>
              )}
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default App
