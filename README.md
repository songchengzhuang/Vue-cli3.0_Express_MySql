
# vue3.0+express+mysql基础开发环境搭建。

vue3.0+express+mysql基础开发环境搭建（支持单页面和多页面开发）。

1.下载，执行 npm i

2.npm run start-node 启动express后台
  
  npm run build   ---vue单页面开发打包（这两步就可以看效果）

3.浏览器打开 localhost：3000/ 单页面开发，vue打包dist在service目录中

4.浏览器打开 localhost：3000/login 和浏览器打开 localhost：3000/loginlist 可查看多页面开发示范

5.（重点）npm run serve   ---启动vue3.0脚手架 ，进行单页面开发


# 目录

service/views => 多页面静态页

routes=>index.js 页面路由

routes=>users.js 接口路由

# mysql数据库

建库：websites

建表：study_tbl

表字段：

id int(8) AUTO_INCREMENT 

name varchar(100)
       
age int(8)
