const { rejects } = require('assert')
const fs = require('fs')
const { resolve } = require('path')
const path = require('path')

// const fullFileName = path.resolve(__dirname, 'files', 'a.json')

// fs.readFile(fullFileName, (err, data) => {
//   if(err){
//     console.error(err)
//   }
//   console.log(data.toString())
// })


// 使用callback
// const getFileContent = (pathname, callback) => {
//   const fullFileName = path.resolve(__dirname, 'files', pathname)

//   fs.readFile(fullFileName, (err, data) => {
//     if(err){
//       console.error(err)
//     }
//     callback(JSON.parse(data.toString()))
//   })
// }

// getFileContent('a.json', aData =>{
//   console.log(aData)
//   getFileContent(aData.next, bData =>{
//     console.log(bData)
//     getFileContent(bData.next, cData =>{
//       console.log(cData)
//     })
//   })
// })

// 使用promise
const getFileContent = (pathname) => {
  const promise = new Promise((resolve, reject) => {
    const fullFileName = path.resolve(__dirname, 'files', pathname)
    fs.readFile(fullFileName, (err, data) => {
      if(err){
        reject(err)
        return
      }
      resolve(JSON.parse(data.toString()))
    })
  })
  return promise
}

getFileContent('a.json').then(aData => {
  console.log(aData)
  return getFileContent(aData.next)
}).then(bData => {
  console.log(bData)
  return getFileContent(bData.next)
}).then(cData => {
  console.log(cData)
})