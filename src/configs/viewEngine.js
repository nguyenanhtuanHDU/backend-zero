const path = require('path')
const express = require('express')

const configViewEngine = (app) => {
  console.log('check __dirname', __dirname)
  // config views engine
  app.set('views', path.join('./src', 'views'))
  app.set('view engine', 'ejs')
  // config static file
  // cấu hình static file tìm trong thư mục puclic
  app.use(express.static(path.join('./src', 'public')))
}

module.exports = configViewEngine
