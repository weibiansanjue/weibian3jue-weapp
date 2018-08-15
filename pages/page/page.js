// pages/page/page.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: "markdown test",
    markdown: "&emsp\;&emsp\;Linux下的文本编辑器有很多，此篇文章挑选 nano 和 vim 两个编辑器，简单介绍如何使用这两个编辑器编辑修改文本文件，如项目的配置文件，日志级别的xml文件等。\n\n &emsp\;&emsp\;在很多 Linux 发行版中，都已经内置了nano 与 vim 命令工具，就不再赘述它们的安装过程了。\n\n- [nano官网](https://www.nano-editor.org/)\n- [vim官网](http://www.vim.org/)\n\n----\n\n## nano\n\n![20180708_nano-ui](http://p2desz41n.bkt.clouddn.com/20180708_nano-ui.JPG)\n\n&emsp\;&emsp\;nano是一个字符终端的文本编辑器，它比另一个我们要介绍的vim简单很多，在nano的终端界面底部可以看到一些常用的快捷键提示，非常适合Linux初学者使用。\n&emsp\;&emsp\;nano命令可以打开指定文件进行编辑，默认情况下它会自动断行，即在一行中输入过长的内容时会自动拆分成几行。使用这种方式处理某些文件可能会带来问题，所以使用nano打开文本文件时，建议加上 -w 选项。\n&emsp\;&emsp\;nano的帮助文档中，Ctrl键使用\"^\"标识，Alt键使用\"M\"标识（Meta）。\n\n### nano 命令语句\n\n```shell\nnano [OPTIONS] [[+LINE, COLUMN] FILE]...\n```\n\n&emsp\;&emsp\;执行 nano 命令，可以加入很多选项，上文中提到的 -w  便是其中一个，如果想知道 nano 命令都支持哪些选项，可以使用 nano -h 命令来查看\n\n\n\n### 打开、保存、关闭文件\n\n- **打开** ：如上文所说，打开文件使用 nano -w filename\n\n- **保存** ：使用快捷键 Ctrl+O\n\n- **退出** ：使用快捷键 Ctrl+X\n\n&emsp\;&emsp\;如果你修改了文件，下面会询问你是否需要保存修改，输入 Y 确认保存，输入 N 则不保存，按 Ctrl+C 取消并返回。\n&emsp\;&emsp\;如果输入了 Y 保存，下一步会让你输入保存的文件名，若不需要修改文件名直接回车即可；若要保存新文件或重命名（另存）则输入确认即可。此时 Ctrl+C 同样可以取消并返回。\n\n![](http://p2desz41n.bkt.clouddn.com/20180707_nano-open-save-close.gif)\n\n### 移动光标\n\n&emsp\;&emsp\;使用方向键移动。\n\n![](http://p2desz41n.bkt.clouddn.com/20180707_nano-move-mouse.gif)\n\n### 编辑文本\n\n&emsp\;&emsp\;在光标处直接敲击键盘输入即可，会在光标所在字符前增加输入的字符。\n\n![](http://p2desz41n.bkt.clouddn.com/20180707_nano-edit.gif)\n\n### 搜索\n\n&emsp\;&emsp\;使用快捷键 ```Crtl+W``` 输入你要搜索的关键字，回车确认。会定位到第一个匹配的文本，可使用 ```Alt+W``` 来定位下一个匹配的文本。\n\n![](http://p2desz41n.bkt.clouddn.com/20180707_nano-search.gif)\n\n\n### 复制、剪切、粘贴\n\n- **复制** ：Alt+6 （单独使用复制一行）\n\n- **剪切** ：Ctrl+K （单独使用剪切一行）\n\n- **粘贴** ：Ctrl+U\n\n![](http://p2desz41n.bkt.clouddn.com/20180707_nano-copy-cut-past.gif)\n\n\n### 复制、剪切某部分\n\n&emsp\;&emsp\;方向键将光标移动到文本开头，使用 ```Alt+A``` 标记开头，使用方向键移动光标到文本末尾，此时选中的文本会反白，使用 ```Alt+6``` 复制 或 ```Ctrl+K``` 剪切。使用 ```Ctrl+U``` 来粘贴。\n&emsp\;&emsp\;```Alt+A``` 一次开始标记，再执行``` Alt+A``` 取消标记。\n\n![](http://p2desz41n.bkt.clouddn.com/20180707_nano-copy-cut-past-sub.gif)\n\n**想了解更多操作，可使用快捷键 ```Ctlr+G``` 查看其它功能。 **\n\n----\n\n## vim\n\n![20180708_vim-ui](http://p2desz41n.bkt.clouddn.com/20180708_vim-ui.JPG)\n\n### 打开、保存、关闭 文件\n\n- ```vi filename```  打开filename文件\n- ```vi +n filename```  打开文件，并将光标置于第n行首\n- ```vi + filename```  打开文件，并将光标置于最后一行首\n\n![](http://p2desz41n.bkt.clouddn.com/20180707_vi-open.gif)\n\n- ```:w``` 保存文件\n- ```:w filename``` 保存至filename文件\n\n![](http://p2desz41n.bkt.clouddn.com/20180707_vi-save.gif)\n\n- ```:n1,n2 w filename``` 将n1到n2行的内容另存为filename文件\n\n![](http://p2desz41n.bkt.clouddn.com/20180707_vi-save-as.gif)\n\n- ```:q```  退出编辑器\n- ```:q!```  强制退出编辑器，且不保存\n- ```:wq```  退出编辑器，并保存文件\n\n### 移动光标\n\n- ```h、j、k、l```  左、下、上、右\n\n- ```zz```  把光标下的文字置于屏幕中央\n\n- ```Ctrl+b```  屏幕往后移动一页。\n\n- ```Ctrl+f```  屏幕往前移动一页。\n\n### 插入文本或行\n\n- ```a```  在当前光标位置的右侧添加文本\n\n![](http://p2desz41n.bkt.clouddn.com/20180707_vi-insert-a.gif)\n\n- ```i```  在当前光标位置的左侧添加文本\n\n![](http://p2desz41n.bkt.clouddn.com/20180707_vi-insert-i.gif)\n\n- ```A```  在当前行的末尾位置添加文本\n\n![](http://p2desz41n.bkt.clouddn.com/20180707_vi-insert-aA.gif)\n\n- ```I```  在当前行的开始处添加文本（非空字符的行首)\n\n![](http://p2desz41n.bkt.clouddn.com/20180707_vi-insert-ii.gif)\n\n- ```O```  在当前行的上面新建一行\n\n![](http://p2desz41n.bkt.clouddn.com/20180707_vi-insert-oO.gif)\n\n- ```o```  在当前行的下面新建一行\n\n![](http://p2desz41n.bkt.clouddn.com/20180707_vi-insert-o.gif)\n\n### 删除、恢复字符或行\n\n- ```x```  删除当前字符\n\n![](http://p2desz41n.bkt.clouddn.com/20180707_vi-x.gif)\n\n- ```dd```  删除当前行\n\n![](http://p2desz41n.bkt.clouddn.com/20180707_vi-dd.gif)\n\n- ```u```   撤销上一步操作\n\n![](http://p2desz41n.bkt.clouddn.com/20180707_vi-u.gif)\n\n\n### 搜索\n\n- ```/.*```  向光标下搜索\n\n![](http://p2desz41n.bkt.clouddn.com/20180707_vi-search-j.gif)\n\n- ```?.*```  向光标上搜索\n\n![](http://p2desz41n.bkt.clouddn.com/20180707_vi-search-k.gif)\n\n- ```n```  向下搜索前一个搜索动作\n\n- ```N```向上搜索前一个搜索动作\n\n![20180707_vi-n-N](http://p2desz41n.bkt.clouddn.com/20180707_vi-n-N.gif)\n\n### 替换\n\n- ```:s/old/new```  用new替换行中首次出现的old\n\n![](http://p2desz41n.bkt.clouddn.com/20180707_vi-son.gif)\n\n- ```:s/old/new/g```  用new替换行中所有的old\n\n![](http://p2desz41n.bkt.clouddn.com/20180707_vi-song.gif)\n\n- ```:n,m s/old/new/g```  用new替换从n到m行里所有的old\n\n![](http://p2desz41n.bkt.clouddn.com/20180707_vi-nong.gif)\n\n- ```:%s/old/new/g```  用new替换当前文件里所有的old\n\n![](http://p2desz41n.bkt.clouddn.com/20180707_vi-ssong.gif)\n\n- ```R```  替换、覆盖当前光标位置及后面的若干文本\n\n![](http://p2desz41n.bkt.clouddn.com/20180707_vi-R.gif)\n\n- ```r```  取代光标所在处的单个字符\n\n![](http://p2desz41n.bkt.clouddn.com/20180707_vi-rr.gif)\n\n### 跳转到制定行\n\n- ```gg```  跳到第一行\n\n![20180707_vim-gg](http://p2desz41n.bkt.clouddn.com/20180707_vim-gg.gif)\n\n- ```nG```  跳到行号为n的行\n\n![20180707_vi-nG](http://p2desz41n.bkt.clouddn.com/20180707_vi-nG.gif)\n\n- ```G```  跳转至文件底部\n\n![20180707_vi-G](http://p2desz41n.bkt.clouddn.com/20180707_vi-G.gif)\n\n### 复制、粘贴\n\n- ```yy```  复制当前行\n- ```p```  粘贴剪切板里的内容在光标后\n\n### vi 选项\n\n- ```:set nu```  显示行号\n- ```:set nonu```  不显示行\n\n![20170707_vi-set-nu](http://p2desz41n.bkt.clouddn.com/20170707_vi-set-nu.gif)\n"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.setNavigationBarTitle({
      title: that.data.title
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})