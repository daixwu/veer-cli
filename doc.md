# 脚手架搭建

## 初始化项目文件

```bash
mkdir <filename>

cd <filename>

npm init -y
```

新建 bin 目录来放置一些命令的可执行文件，在文件夹下新建 index.js 并写入以下内容

```js
#!/usr/bin/env node

console.log('hi cli!')
```

配置 package.json中的bin字段

```json
"bin": {
  "demo": "./bin/index.js"
}
```

执行 npm link 链接命令到全局 (npm unlink 移除链接)

执行 bin 中配置的命令测试，例如这里

```bash
demo
```

输出如下

```bash
hi cli!
```

## 使用 commander 处理命令行

安装：

```bash
npm install commander

#!/usr/bin/env node

'use strict'

const commander = require('commander')
```

## 下载模板

安装：

```bash
npm install download-git-repo
```

```js
const download = require('download-git-repo')

download(templateUrl, projectName, { clone: true }, function (err) {
  if(err) {
    console.log('下载失败')
  } else {
    console.log('下载成功')
  }
})
```

### 命令行交互

```bash
npm install inquirer
```

## 模板引擎

```bash
npm install handlebars
```

把项目下的 package.json 文件读取出来

使用向导的方式才是用户输入的信息

使用模板引擎把用户输入的数据解析到 package.json 文件中

解析完毕后把解析之后的结果重新写入 package.json 文件中

## rimraf

```bash
npm i rimraf
```

## 视觉美化

```bash
npm install ora
```

```js
const ora = require('ora')
//开始下载
const spinner = ora('正在下载模板')
spinner.start()
//下载失败调用
spinner.fail()
//下载成功调用
spinnner.succeed()
```

然后通过 chalk 来为打印信息加上样式，比如成功信息为绿色，失败为红色，这样子会让用户更容易分辨，同时也让终端的显示更加好看

```bash
npm install chalk
```

```js
const chalk = require('chalk')

console.log(chalk.blue('hello world!'))
```

## log-symbols（美化符号）

```bash
npm install log-symbols
```

## npm 发包

1. 打开 npmjs.com 官网
2. 注册npm账号
3. npm检索是否有重名的包名
4. 将package.json 中的 name 修改为发布到 npm 上的包名（和本地项目名称无关）
5. 控制台执行 npm login
6. 登录成功后在项目下执行 npm publish

## 用户安装

```bash
npm install —global <包名>
```