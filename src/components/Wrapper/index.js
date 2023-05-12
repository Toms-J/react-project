import React, { Component } from 'react'

export default class Wrapper extends Component {

  constructor(){
    super();

    this.state = {
      count: 0,
    }
  }

  increment = () => {
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      }
    })
  }  



  render() {
    return (
      <div>
        {this.props.render(this.state.count, this.increment)}
      </div>
    )
  }
}
