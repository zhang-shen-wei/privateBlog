---
title: 搭建个人博客分享
description: Hexo + Butterfly主题 + 云服务器 快速搭建专属博客网站
date: 2024-12-02 15:35:57
tags: 分享
---




# 1 搭建博客的多种选择

1、使用在线的博客系统，如语雀、掘金、CSDN等。

- 优点：直接创建账号使用即可，简单方便，不需要维护
- 缺点：文章分散在各个平台，不易于管理

2、`Hexo` + 云服务器搭建静态博客系统

- 优点：文章掌管在自己手里，方便管理。可以定制化一些页面，从0开始搭建，还能学习到一些服务器知识。
- 缺点：只支持静态内容，没有后台管理系统，需要租服务器

3、利用 `github` 搭建个人博客

- 优点：无需借助服务器，难度适中
- 缺点：国内环境会出现访问失败或访问超时的情况

综合考虑，个人选择 `Hexo` + 云服务器，利用闲置服务器，搭建专属博客网站

# 2 创建Hexo博客

## 2.1 `Hexo` 简介

Hexo 是一款快速、简洁且高效的博客框架。
采用 **Markdown** 解析文章，借助主题可快速构建美观的静态博客网页。

## 2.2 创建Hexo项目

搭建过程和创建Vue项目一样简便：`安装脚手架` -> `初始化` -> `创建页面` -> `启动`

安装Hexo脚手架：`npm install -g hexo-cli`

初始化项目：`npx hexo init project-name`

创建新文章：`hexo new doc-name`

启动服务：`hexo server`

## 2.3 目录结构
````text
├─public	// 生成的静态文件夹
├─scaffolds	// 模板文件夹，新建文章时，会根据该模板文件来创建文件
├─source	// 资源文件夹。
│  ├─_posts	// 存放用户文章资源
│  ├─categories	// 存放分类页面
│  ├─tags	// 存放标签页面
│  └─images	// 存放图片文件
├─_config.butterfly.yml	// 主题配置文件
├─_config.yml	// 配置文件
├─db.json
├─package.json
└─package-lock.json
````

## 2.4 相关配置
比较重要的有以下这些配置项

|       配置项       | 描述                                                         |
| :----------------: | :----------------------------------------------------------- |
|       title        | 网站标题                                                     |
|       author       | 作者                                                         |
|     permalink      | 文章的 [永久链接](https://hexo.io/zh-cn/docs/permalinks) 格式 |
| permalink_defaults | 永久链接中各部分的默认值                                     |
|     source_dir     | 配置源文件夹路径                                             |
|     public_dir     | 配置打包文件路径                                             |
|      tag_dir       | 配置标签文件夹                                               |
|    archive_dir     | 配置归档文件夹                                               |
|    category_dir    | 配置分类文件夹                                               |
|      per_page      | 每页显示的帖子数。 `0` 关闭分页功能                          |

## 2.5 常用命令

生成静态文件：`hexo gengerate`

部署网站：`hexo deploy`

清除缓存文件（db.json）和已生成的静态文件（public）：`hex clean`

## 2.6 写作模板

`Hexo` 创建文章时默认添加 `Front-matter` 内容（`YAML` 或 `JSON` 格式代码块）用于配置写作设置。

![](/images/img.png)

可在 `scaffolds` 模板文件夹中修改默认模板（如 `post`、`page`、`draft`），或在 `_config.yml` 中调整 `default_layout`，新建文章时自动应用模板设置。

## 2.7 Cursor辅助写作

用 `Cursor` 编辑器打开博客项目，描述你的需求，cursor可以检测博客项目的框架，帮你生成一篇文章的大纲



# 3 博客美化

## 3.1 主题安装与配置

选用Butterfly主题：[Butterfly](https://butterfly.js.org/posts/21cfbf15/)

安装主题依赖：`hexo-theme-butterfly`

应用主题：修改博客配置文件 `_config.yml`：

```yaml
theme: butterfly
```

推荐在根目录下创建一个文件 `_config.butterfly.yml` 用于存放 `Butterfly` 主题相关配置，存在同名配置时，`_config.butterfly.yml` 的配置优先级更高

以下时一些主要配置示例，可以让你的博客看着更加炫酷，详细可以参考 [主题配置](https://butterfly.js.org/posts/4aa8abbe/)

```yaml
subtitle:
  enable: true # 显示副标题
  effect: true # 打字机效果
  sub: # 打字机内容
    - 今日事，今日毕
    - Never put off till tomorrow what you can do today

related_post:
  enable: true
  limit: 6 # 显示推荐文章数目
  date_type: created # 显示文章创建日或者更新日

search:
  use: local_search # 启用本地搜索，需要安装hexo-generator-searchdb

beautify:
  enable: true
  field: site # 在全站生效
  title-prefix-icon: '\f0c1' # 标题前缀的 icon
  title-prefix-icon-color: '#F47466' # 标题前缀的 icon 的颜色
canvas_fluttering_ribbon:
  enable: true
  mobile: true # 手机端显示彩带效果

lightbox: Medium Zoom # 支持图片放大查看
```

## 3.2 高级功能

`Butterfly` 主题不仅仅是让博客变得更加好看，它还为 `Hexo` 扩展了额外的高级的功能

### 3.2.1 额外接入文件

- 如想添加额外的 `js/css/meta` 等等东西，可以在 `Inject` 里添加，支持添加到  `head` ( `</body>` 标签之前)和 `bottom` ( `</html>` 标签之前)。

```yaml
inject:
  head:
    - <link rel="stylesheet" href="/self.css">
  bottom:
    - <script src="xxxx"></script>
```

### 3.2.2 标签外挂

[标签外挂](https://butterfly.js.org/posts/ceeb73f/#Note-Bootstrap-Callout) 为主题带来一些额外的类似 `组件库` 的功能和 `UI` 方面的强化。

如 `Note`提示、`Tabs` 切换tab、`Chartjs` 图表等

**`Note` 提示**

```text
{% note info flat %}
`标签外挂` 为主题带来一些额外的功能和 `UI` 方面的强化
{% endnote %}
```

渲染效果：

{% note info flat %}
`标签外挂` 为主题带来一些额外的功能和 `UI` 方面的强化
{% endnote %}

**`Tabs` 切换tab**

```text
{% tabs 标签 %}
<!-- tab 第一个tab -->
**这是标签1。**
<!-- endtab -->
<!-- tab 第二个tab -->
**这是标签2。**
<!-- endtab -->
<!-- tab 第三个tab -->
**这是标签3。**
<!-- endtab -->
{% endtabs %}
```

渲染效果：

{% tabs 标签 %}
<!-- tab 第一个tab -->
**这是标签1。**
<!-- endtab -->
<!-- tab 第二个tab -->
**这是标签2。**
<!-- endtab -->
<!-- tab 第三个tab -->
**这是标签3。**
<!-- endtab -->
{% endtabs %}

**`Chartjs` 图表**

```text
{% chartjs 100 %}
<!-- chart -->
{
    "type": "line",
    "data": {
        "labels": ["January", "February", "March", "April", "May", "June", "July"],
        "datasets": [{
            "label": "My First dataset",
            "backgroundColor": "rgb(255, 99, 132)",
            "borderColor": "rgb(255, 99, 132)",
            "data": [0, 10, 5, 2, 20, 30, 45]
        }]
    },
    "options": {
        "responsive": true,
        "title": {
            "display": true,
            "text": "Chart.js Line Chart"
        }
    }
}
<!-- endchart -->
{% endchartjs %}
```

渲染效果：

{% chartjs 100 %}
<!-- chart -->
{
"type": "line",
"data": {
"labels": ["January", "February", "March", "April", "May", "June", "July"],
"datasets": [{
"label": "My First dataset",
"backgroundColor": "rgb(255, 99, 132)",
"borderColor": "rgb(255, 99, 132)",
"data": [0, 10, 5, 2, 20, 30, 45]
}]
},
"options": {
"responsive": true,
"title": {
"display": true,
"text": "Chart.js Line Chart"
}
}
}
<!-- endchart -->
{% endchartjs %}

# 4 接入AI聊天

# 4 部署到服务器

基本原理就是将云服务器当作 `git` 仓库，编写好文章后在本地生成静态文件，并推送到云服务器 `git` 仓库，服务器自动拉取文件并部署到服务器上

## 4.1 准备云服务器git环境

确定博客存放目录，修改niginx配置：

```nginx
server {
	listen	80;
	server_name www.duomangcoding.top;# 域名
	root	/home/admin/blog;
	location / {
	}
}
```

创建对应路径的文件夹：

```shell
cd /home && mkdir admin && cd admin && mkdir blog
```

此时应该在 `/home/admin` 路径下

在该路径下创建一个新的 `git` 仓库，并创建一个 `post-update` 文件

```shell
git init --bare blog.git

vim blog.git/hooks/post-update
```

在 `post-update` 文件中添加以下内容

```shell
git --work-tree=/home/admin/blog --git-dir=/home/admin/blog.git checkout -f
```

给 `post-update` 文件添加执行权限

```shell
chmod +x blog.git/hooks/post-update
```

## 4.2 本地推送部署

尝试在 `windows` 环境链接服务器

```shell
ssh -v root@47.108.154.178
```

出现以下信息说明链接成功，可以推送部署

![](/images/img_1.png)

修改博客项目中的配置文件 `_config.yml`

```yml
deploy:
  type: git
  repo: root@47.108.154.178:/home/admin/blog.git
  branch: master
```

发布到服务器

```shell
hexo clean
hexo g -d
```

## 4.3 自动部署

使用 `Github Action` ，提交代码到仓库，`github` 自动打包部署到服务器

仓库创建 `workflow` 工作流

```yaml
name: hexo_deploy # 定义工作流名称
on: # 监听master分支推送代码时触发工作流
  push:
    branches: [ "master" ]
jobs:
  build:
    runs-on: ubuntu-20.04 # 定义运行环境
    steps: # 定义工作流具体执行步骤
      - name: checkout # 指定仓库分支
        uses: actions/checkout@master
      - name: use Node 18 # 指定node版本
        uses: actions/setup-node@v1
        with: 
          node-version: 18
      - name: npm install
        run: |
          npm install -g hexo-cli
          npm install
        env:
         CI: true
      - name: hexo build # 打包hexo
        run: |
          hexo clean
          hexo generate
        env:
          CI: true
      - name: Deploy # 部署
        uses: easingthemes/ssh-deploy@v5.1.0
        env:
          SSH_PRIVATE_KEY: ${{ secrets.ACCESS_TOKEN }} # 服务器私钥
          ARGS: "-avz --delete"
          SOURCE: "public/" # 静态文件路径
          REMOTE_HOST: "47.108.154.178" # 服务器IP
          REMOTE_USER: "root" # 服务器用户名
          TARGET: "/home/admin/blog" # 服务器静态文件路径
```

其中最关键的就是服务器私钥这个变量，获取方式：

首先去你服务器的`~/.ssh`目录，此时目录下应该有4个文件，分别是`authorized_keys`、`id_rsa`、`id_rsa.pub`、`known_hosts`。

如果没有`id_rsa`和`id_rsa.pub`，可以使用`ssh-keygen`来生成，这两个文件就是对应的私钥和公钥。

并复制一份公钥到 `autorized_keys` ，并修改他的权限

```
# 生成公钥和密钥文件
ssh-keygen
# 复制一份公钥
cp id_rsa.pub anthorized_keys
# 然后修改它的权限
chmod 600 ~/.ssh/authorized_keys # 设置只有读写权限
chmod 700 ~/.ssh # 设置有读 写 执行权限
```

运行命令`cat ~/.ssh/id_rsa` 获取到私钥的内容，将其复制到仓库环境变量中。

完成上述配置，本地提交代码到 `Github` 仓库后即可自动打包部署到云服务器上。

具体自动部署结果和日志可以去 `Github` 仓库的 `Actions` 中查看。