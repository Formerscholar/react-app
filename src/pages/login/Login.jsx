import React, { Component } from 'react'
import { Form, Input, Button, message } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { Redirect } from 'react-router-dom'

import './login.less'
import logo from '../../asstes/images/logo.png'
import { getLogin } from '../../api/home'
import storageUtils from '../../utils/storageUtils'
import memoryUtils from '../../utils/memoryUtils'

class Login extends Component {
  onFinish = async (values) => {
    const { data, status, msg } = await getLogin({
      username: values.username,
      password: values.password,
    })
    console.log('getLogin', data)
    if (status == 0) {
      message.success('登录成功')
      storageUtils.saveUser(data)
      this.props.history.replace('/')
    } else {
      message.error(msg)
    }
  }

  render() {
    if (memoryUtils.user && memoryUtils.user._id) {
      return <Redirect to="/" />
    }

    return (
      <div className="login">
        <header className="login-header">
          <img src={logo} alt="logo" />
          <h1>后台管理系统</h1>
        </header>
        <section className="login-content">
          <h2>用户登录</h2>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={this.onFinish}
          >
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  whitespace: true,
                  message: '用户名不能为空!',
                },
                { min: 4, message: '至少4位数!' },
                { max: 12, message: '最多12位数!' },
                {
                  pattern: /^[a-zA-Z0-9_-]{4,12}$/,
                  message: '用户名必须是英文、数组、下划线',
                },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="用户名"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  whitespace: true,
                  message: '密码不能为空!',
                },
                { min: 4, message: '至少4位数!' },
                { max: 12, message: '最多12位数!' },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="密码"
              />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                登录
              </Button>
            </Form.Item>
          </Form>
        </section>
      </div>
    )
  }
}

export default Login
