### git使用规范

在本地安装git之后，请先设置好用户名等，否则助教无法知道提交的姓名。

```
#初始设置
git config --global user.name "<用户名>" #设置用户名
git config --global user.email "<电子邮件>" #设置电子邮件
用户名是自己名字。
详情可以查看gitlab上的指令。
```

然后，创建ssh key，和远端仓库连接。

```
#远端操作
git clone git@gitlab.secoder.net:NineEve/NineEve_ResearchPlatform.git #克隆到本地。
git merge #将远端分支与本地当前分支合并。
git pull [<远端别名>] [<远端branch>] #抓取并合并,相当于第2、3步
git push [-f] [<远端别名>] [<远端branch>] #推送到远端，-f为强制覆盖
```

目前已有master分支和develop分支。

当进行临时开发时，请建立新的分支，命名规则如下

| 新分支用处      | 命名规则               |
| --------------- | ---------------------- |
| 开发新的feature | feat/XXX(feature name) |
| 修复已有bug     | bugfix/XXX(bug name)   |

完成新分支的开发之后，push到远程仓库上，然后使用pull request请求合并到develop分支。

```
#分支操作
git branch <分支名> #新建分支
git checkout <分支名> #切换到分支
git merge <分支名> #合并某分支到当前分支
```

warning: 本地仓库请不要push到develop或者master分支！！！否则版本回滚起来很麻烦。

**commit规范**

```
<type>: <subject>
空行
<body>
空行
<footer>
```

type

- feat：新功能（feature）
- fix：修补bug
- docs：文档（documentation）
- refactor：重构（即不是新增功能，也不是修改bug的代码变动）
- test：增加测试

subject

- 简单描述commit

body

- 详细描述干了什么。现在时。

footer

- 如果需要关闭issue的话，可以在这里加上Closes #XXX (对应的issue号)。
- 可以没有。