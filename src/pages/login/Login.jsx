import React, { Component } from 'react'
import './login.css'
import logo from '../../asstes/images/logo.png'

class Login extends Component {
  render() {
    return (
      <div className="login">
        <header className="login-header">
          <img src={logo} alt="logo" />
          <h1>后台管理系统</h1>
        </header>
        <section className="login-content">
          <h2>用户登录</h2>
          <div>组件标签 </div>
        </section>
      </div>
    )
  }
}

export default Login
