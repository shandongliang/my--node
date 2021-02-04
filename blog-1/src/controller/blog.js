const getList = (author, keyword) => {
  return [
    {
      id: 1,
      title: "标题A",
      content: "内容A",
      createTime: 1612353111375,
      author: "张三"
    },
    {
      id: 2,
      title: "标题B",
      content: "内容B",
      createTime: 1612353172939,
      author: "李四"
    }
  ]
}

module.exports = {
  getList
}