const http = require('http')
const querystring = require('querystring')

const server = http.createServer((req, res) => {
  const method = req.method
  const url = req.url
  const path = url.split('?')[0]
  const query = querystring.parse(url.split('?')[1])

  //设置返回格式JSON
  res.setHeader('Content-type', 'application/json')

  //返回的数据
  const resData = {
    method,
    url,
    path,
    query
  }

  if(method === 'GET'){
    res.end(JSON.stringify(resData))
  }

  if(method === 'POST'){
    let postData = ''
    req.on('data', chunk => {
      postData += chunk.toString()
    })
    req.on('end', () => {
      resData.postData = postData
      res.end(JSON.stringify(resData))
    })
  }

  

  // console.log('method: ',  req.method)
  // const url = req.url
  // console.log('url: ', url);
  // req.query = querystring.parse(url.split('?')[1])
  // console.log('query: ', req.query)
  // res.end(
  //   JSON.stringify(req.query)
  // )

  // if(req.method === 'POST'){
  //   // req 数据格式
  //   console.log('content-type: ', req.headers['content-type'])
  //   let postdata = ''
  //   // 接收数据
  //   req.on('data', chunk => {
  //     postdata += chunk.toString()
  //   })
  //   req.on('end', () => {
  //     console.log('postdata',postdata)
  //     res.end('hello word')
  //   })
  // }
})

server.listen(8000)

console.log("OK")