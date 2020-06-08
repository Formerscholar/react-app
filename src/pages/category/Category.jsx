import React, { Component } from 'react'
import { PlusOutlined, ArrowRightOutlined } from '@ant-design/icons'
import { Card, Table, Button, message, Modal } from 'antd'
import {
  getCategory,
  getAddCategory,
  getUpdateCategory,
} from '../../api/category'

export default class Category extends Component {
  state = {
    categorys: [],
    subCategorys: [],
    parentId: '0',
    parentName: '',
    visible: false,
    showStatus: 0,
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
        render: (category) => (
          <span>
            <a href="#" style={{ marginRight: 10 }} onClick={this.showUpdate}>
              修改分类
            </a>
            {this.state.parentId == '0' ? (
              <a href="#" onClick={() => this.showSubCategorys(category)}>
                查看子分类
              </a>
            ) : null}
          </span>
        ),
      },
    ]
  }

  getCategorys = async () => {
    const { parentId } = this.state
    const { data, status } = await getCategory({
      parentId,
    })
    if (status == 0) {
      if (parentId == 0) {
        this.setState({
          categorys: data,
        })
      } else {
        this.setState({
          subCategorys: data,
        })
      }
    } else {
      message.error('获取分类列表失败')
    }
  }

  showSubCategorys = (category) => {
    this.setState(
      {
        parentId: category._id,
        parentName: category.name,
      },
      () => {
        this.getCategorys()
      }
    )
  }

  showFirstCategorys = () => {
    this.setState({
      parentId: '0',
      parentName: '',
      subCategorys: [],
    })
  }

  handleCancel = () => {
    this.setState({
      showStatus: 0,
    })
  }

  addCategory = () => {}

  updateCategory = () => {}

  showAdd = () => {
    this.setState({
      showStatus: 1,
    })
  }

  showUpdate = () => {
    this.setState({
      showStatus: 2,
    })
  }

  componentWillMount() {
    this.initColumns()
  }

  componentDidMount() {
    this.getCategorys()
  }

  render() {
    const {
      categorys,
      subCategorys,
      parentId,
      parentName,
      showStatus,
    } = this.state
    const title =
      parentId == '0' ? (
        '一级分类列表'
      ) : (
        <span>
          <a href="#" onClick={this.showFirstCategorys}>
            一级分类列表
          </a>
          <ArrowRightOutlined style={{ margin: '0  10px' }} />
          <span>{parentName}</span>
        </span>
      )
    const extra = (
      <Button type="primary" onClick={this.showAdd}>
        <PlusOutlined />
        添加
      </Button>
    )

    return (
      <Card title={title} extra={extra}>
        <Table
          rowKey="_id"
          bordered
          dataSource={parentId == 0 ? categorys : subCategorys}
          columns={this.columns}
        />
        <Modal
          title="添加分类"
          visible={showStatus == 1}
          onOk={this.addCategory}
          onCancel={this.handleCancel}
        >
          <p>添加分类</p>
        </Modal>

        <Modal
          title="更新分类"
          visible={showStatus == 2}
          onOk={this.updateCategory}
          onCancel={this.handleCancel}
        >
          <p>更新分类</p>
        </Modal>
      </Card>
    )
  }
}
