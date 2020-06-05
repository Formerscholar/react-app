import React, { Component } from 'react'
import { Button, message } from 'antd'

export default class App extends Component {
  handleClick = () => {
    message.success('This is a success message')
  }

  render() {
    return (
      <Button type="primary" onClick={this.handleClick}>
        antd按钮
      </Button>
    )
  }
}
