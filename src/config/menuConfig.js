const menuList = [
  {
    title: '首页',
    path: '/home',
  },
  {
    title: '商品',
    path: '/commodity',
    children: [
      {
        title: '品类管理',
        path: '/category',
      },
      {
        title: '商品管理',
        path: '/product',
      },
    ],
  },
  {
    title: '用户管理',
    path: '/user',
  },
  {
    title: '角色管理',
    path: '/role',
  },
  {
    title: '图形图表',
    path: '/Graphic',
    children: [
      {
        title: '柱状图',
        path: '/charts/bar',
      },
      {
        title: '折线图',
        path: '/charts/line',
      },
      {
        title: '饼图',
        path: '/charts/pie',
      },
    ],
  },
]

export default menuList
