import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Layout } from 'antd'

import memoryUtils from '../../utils/memoryUtils'
import LeftNav from '../../components/LeftNav'
import MyHeader from '../../components/Header'

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
          <Content style={{ backgroundColor: '#fff' }}>Content</Content>
          <Footer style={{ textAlign: 'center', color: '#ccc' }}>
            chad.com
          </Footer>
        </Layout>
      </Layout>
    )
  }
}

export default Admin
