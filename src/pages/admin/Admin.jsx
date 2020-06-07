import React, { Component } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { Layout } from 'antd'

import memoryUtils from '../../utils/memoryUtils'
import LeftNav from '../../components/LeftNav'
import MyHeader from '../../components/Header'
import Home from '../home/Home'
import Category from '../category/Category'
import Product from '../product/Product'
import Role from '../role/Role'
import User from '../user/User'
import Bar from '../charts/Bar'
import Line from '../charts/Line'
import Pie from '../charts/Pie'

const { Footer, Sider, Content } = Layout

class Admin extends Component {
  render() {
    const user = memoryUtils.user
    if (!user || !user._id) {
      return <Redirect to="/login" />
    }

    return (
      <Layout style={{ height: '100%' }}>
        <Sider>
          <LeftNav />
        </Sider>
        <Layout>
          <MyHeader>Header</MyHeader>
          <Content style={{ margin: '20px', backgroundColor: '#fff' }}>
            <Switch>
              <Route path="/home" component={Home}></Route>
              <Route path="/category" component={Category}></Route>
              <Route path="/product" component={Product}></Route>
              <Route path="/role" component={Role}></Route>
              <Route path="/user" component={User}></Route>
              <Route path="/charts/bar" component={Bar}></Route>
              <Route path="/charts/line" component={Line}></Route>
              <Route path="/charts/pie" component={Pie}></Route>
              <Redirect to="/home" />
            </Switch>
          </Content>
          <Footer style={{ textAlign: 'center', color: '#ccc' }}>
            chad.com
          </Footer>
        </Layout>
      </Layout>
    )
  }
}

export default Admin
