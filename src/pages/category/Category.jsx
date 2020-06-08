import React, { Component } from 'react'
import { PlusOutlined } from '@ant-design/icons'
import { Card, Table, Button, message } from 'antd'
import {
  getCategory,
  getAddCategory,
  getUpdateCategory,
} from '../../api/category'

export default class Category extends Component {
  state = {
    categorys: [],
  }

  initColumns = () => {
    this.columns = [
      {
        title: '分类的名称',
        dataIndex: 'name',
      },
      {
        title: '操作',
        width: 300,
        render: () => (
          <span>
            <a href="#" style={{ marginRight: 10 }}>
              修改分类
            </a>
            <a href="#">查看子分类</a>
          </span>
        ),
      },
    ]
  }

  getCategorys = async () => {
    const { data, status } = await getCategory({
      parentId: '0',
    })
    if (status == 0) {
      this.setState({
        categorys: data,
      })
    } else {
      message.error('获取分类列表失败')
    }
  }

  componentWillMount() {
    this.initColumns()
  }

  componentDidMount() {
    this.getCategorys()
  }

  render() {
    const title = '一级分类列表'
    const extra = (
      <Button type="primary">
        <PlusOutlined />
        添加
      </Button>
    )

    const { categorys } = this.state
    return (
      <Card title={title} extra={extra}>
        <Table
          rowKey="_id"
          bordered
          dataSource={categorys}
          columns={this.columns}
        />
      </Card>
    )
  }
}
