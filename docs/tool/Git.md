## 分支

分支名其实是一个指针，指向某次提交记录

```
git branch newBranch // 创建新分支，分支名newBranch,不切换到新分支
git checkout -b newBranch // 创建并切换到新分支
```

#### git merge

当前是在`main`分支上，要合并`bugFix`分支上的修改

```
git merge bugFix
```

<img :src="$withBase('/Git/image-20210303134635352.png')" alt="图片加载失败">
<img :src="$withBase('/Git/image-20210303134724896.png')" alt="图片加载失败">

再把`main`分支合并到`bugFix`

```
git checkout bugFix
git merge main
```

<img :src="$withBase('/Git/image-20210303134849742.png')" alt="图片加载失败">

因为 `main` 继承自 `bugFix`，`Git` 什么都不用做，只是简单地把 `bugFix` 移动到 `main` 所指向的那个提交记录

#### git rebase

假如当前是在`bugFix`分支，执行`git rebase main`会把`bugFix`分支上的工作直接移到`main`分支上，移动以后会使得两个分支的功能看起来像是按顺序开发，但实际上它们是并行开发的

<img :src="$withBase('/Git/image-20210303135458343.png')" alt="图片加载失败">
<img :src="$withBase('/Git/image-20210303135641702.png')" alt="图片加载失败">

原先`bugFix`的提交记录 C3 依然存在（树上那个半透明的节点），而 C3' 是`rebase` 到 `main `分支上的 C3 的副本，接下来需要将`main`也更新到 C3' 上

```
git checkout main
git rebase bugFix
```

<img :src="$withBase('/Git/image-20210303135900342.png')" alt="图片加载失败">

由于 `bugFix` 继承自 `main`，所以 `Git` 只是简单的把 `main` 分支的引用向前移动了一下而已

#### 关联远程分支

```
git checkout -b [localBranch] [remoteBranch]
git branch -u [remoteBranch] [localBranch] // 如果当前就在localBranch分支上，可以省略[localBranch]
```

#### 删除远程分支

```
git push origin :foo // 删除远程的foo分支
```

## 常见问题

### 开发新功能

例如要从`master`分支创建新分支

```
git checkout master // 切换到master分支
git pull // 拉取最新代码
git checkout -b newBranch // 创建并切换到新分支
git push // 看提示
git push --set-upstream origin newBranch // 关联到远程分支
```

之后修改代码后直接`git push`即可

### 同个分支别人已经提交过代码

```
git fetch
git rebase o/main
git push
```
<img :src="$withBase('/Git/image-20210303152007577.png')" alt="图片加载失败">
<img :src="$withBase('/Git/image-20210303152023188.png')" alt="图片加载失败">

如果换成

```
git fetch
git merge o/main
git push
```

<img :src="$withBase('/Git/image-20210303152218610.png')" alt="图片加载失败">

```
git pull = git fetch + git merge
git pull --rebase = git fetch + git rebase
```

### 将master分支合并到自己分支

```
git checkout master // 切换到master分支上
git pull
git checkout myBranch // 再切回自己分支
git merge master // 合并master上的更新内容
git push origin myBranch // 推送合并后的内容
```

### 想更新分支代码，而本地改动还不想提交

```
git stash // 把本地的改动先缓存
git pull
git stash pop // 把刚刚缓存的再拉出来
```

