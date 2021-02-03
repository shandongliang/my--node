const handleBlogRouter = (req, res) => {
  const method = req.method
  const url = req.url
  const path = url.split('?')[0]

  if(method === "GET" && path === "/api/blog/list"){
    return {
      msg: "这是返回博客列表的接口"
    }
  }

  if(method === "GET" && path === "/api/blog/detail"){
    return {
      msg: "这是返回博客详情的接口"
    }
  }

  if(method === "POST" && path === "/api/blog/create"){
    return {
      msg: "这是新建博客的接口"
    }
  }

  if(method === "POST" && path === "/api/blog/update"){
    return {
      msg: "这是更新博客的接口"
    }
  }

  if(method === "POST" && path === "/api/blog/del"){
    return {
      msg: "这是删除博客的接口"
    }
  }
}

module.exports = handleBlogRouter