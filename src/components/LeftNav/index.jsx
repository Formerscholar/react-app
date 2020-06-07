import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Menu } from 'antd'
import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from '@ant-design/icons'

import logo from '../../asstes/images/logo.png'
import menuList from '../../config/menuConfig'
import './index.less'
const { SubMenu } = Menu

class LeftNav extends Component {
  // getMenuNodes_map = (menuList) => {
  //   return menuList.map((item) => {
  //     if (!item.children) {
  //       return (
  //         <Menu.Item key={item.path} icon={<PieChartOutlined />}>
  //           <Link to={item.path}>{item.title}</Link>
  //         </Menu.Item>
  //       )
  //     } else {
  //       return (
  //         <SubMenu key={item.path} icon={<MailOutlined />} title={item.title}>
  //           {this.getMenuNodes(item.children)}
  //         </SubMenu>
  //       )
  //     }
  //   })
  // }

  getMenuNodes = (menuList) => {
    const path = this.props.location.pathname
    return menuList.reduce((pre, item) => {
      if (!item.children) {
        pre.push(
          <Menu.Item key={item.path} icon={<PieChartOutlined />}>
            <Link to={item.path}>{item.title}</Link>
          </Menu.Item>
        )
      } else {
        const cItem = item.children.find((cItem) => cItem.path == path)
        if (cItem) {
          this.openKey = item.path
        }

        pre.push(
          <SubMenu key={item.path} icon={<MailOutlined />} title={item.title}>
            {this.getMenuNodes(item.children)}
          </SubMenu>
        )
      }
      return pre
    }, [])
  }

  componentWillMount() {
    this.menuNodes = this.getMenuNodes(menuList)
  }

  render() {
    const path = this.props.location.pathname
    const openKey = this.openKey
    return (
      <div className="left-nav">
        <Link to="/" className="nav-header">
          <img src={logo} alt="logo" />
          <h1>后台管理</h1>
        </Link>
        <Menu
          mode="inline"
          theme="dark"
          selectedKeys={[path]}
          defaultOpenKeys={[openKey]}
        >
          {this.menuNodes}
        </Menu>
      </div>
    )
  }
}

export default withRouter(LeftNav)
