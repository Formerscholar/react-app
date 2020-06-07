import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Modal } from 'antd'

import { formateDate } from '../../utils/dateUtils'
import menuList from '../../config/menuConfig'
import memoryUtils from '../../utils/memoryUtils'
import storageUtils from '../../utils/storageUtils'
import './index.less'

const { confirm } = Modal

class Header extends Component {
  state = {
    currentTime: formateDate(Date.now()),
  }
  getTime = () => {
    this.intervalId = setInterval(() => {
      const currentTime = formateDate(Date.now())
      this.setState({ currentTime })
    }, 1000)
  }

  gitTitle = () => {
    const path = this.props.location.pathname
    let title
    menuList.forEach((item) => {
      if (item.path == path) {
        title = item.title
      } else if (item.children) {
        const cItem = item.children.find((cItem) => cItem.path == path)
        if (cItem) {
          title = cItem.title
        }
      }
    })
    return title
  }

  logout = () => {
    confirm({
      content: '确定退出吗?',
      onOk: () => {
        storageUtils.removeUser()
        memoryUtils.user = {}
        this.props.history.replace('/login')
      },
    })
  }

  componentDidMount() {
    this.getTime()
  }

  // componentWillMount() {
  //   this.title = this.gitTitle()
  // }

  componentWillUnmount() {
    clearInterval(this.intervalId)
  }

  render() {
    const { currentTime } = this.state
    const { username } = memoryUtils.user
    const title = this.gitTitle()

    return (
      <div className="header">
        <div className="header-top">
          <span>欢迎,{username}</span>
          <a href="#" onClick={this.logout}>
            退出
          </a>
        </div>
        <div className="header-bottom">
          <div className="bot-left">{title}</div>
          <div className="bot-right">
            <span>{currentTime}</span>
            <img
              src="http://api.map.baidu.com/images/weather/day/qing.png"
              alt="weather"
            />
            <span>晴</span>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Header)
