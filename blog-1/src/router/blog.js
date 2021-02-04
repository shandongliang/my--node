const { getList } = require('../controller/blog')
const { SuccessModal, ErrorModal } = require('../model/resModal')

const handleBlogRouter = (req, res) => {
  const method = req.method

  if(method === "GET" && req.path === "/api/blog/list"){
    const author = req.query.author || ''
    const keyword = req.query.keyword || ''
    const listData = getList(author, keyword)
    return new SuccessModal(listData)
  }

  if(method === "GET" && req.path === "/api/blog/detail"){
    return {
      msg: "这是返回博客详情的接口"
    }
  }

  if(method === "POST" && req.path === "/api/blog/create"){
    return {
      msg: "这是新建博客的接口"
    }
  }

  if(method === "POST" && req.path === "/api/blog/update"){
    return {
      msg: "这是更新博客的接口"
    }
  }

  if(method === "POST" && req.path === "/api/blog/del"){
    return {
      msg: "这是删除博客的接口"
    }
  }
}

module.exports = handleBlogRouter