# 学html从MDN基础开始

MDN是适合我开始初步学习的地方，前段时间的课程中穿插讲的html部分，实际上是要一定基础的人才听得明白的，实际上昨天我通过看MDN的技术文档已经自己建立了一个网页，值得珍藏。

# 介绍html
html有很多元素，段落，圆点列表，表格。文件被分为很多逻辑区块，包括head，columns，navigation menu，插入的图片，音频，视频等
paragraph?bulleted list?table?structure a document into logical sections？ header?three columns of content?a navigation menu?embed content such as images and videos into a page.

## <em></em>斜体字元素

## <p></p>段落元素

## <a></a>锚定元素

## 添加<img>元素
图片元素<img scr="/可以本地也可以是网址"><img src="https://raw.githubusercontent.com/mdn/beginner-html-site/gh-pages/images/firefox-icon.png">

## 给a元素增加属性
<p><a href="https://www.mozilla.org/" title="The Mozilla homepage" target="https://french5.github.io/my-website/">A link to my favourite website.</a></p>
- `href`:跳转的网址内容
- `title`: 鼠标放上面显示的跳转页面的信息.
- `target`:在本页面显示， `target="_blank"`将在新的空白页面显示.

## <input type="text">

## 单引号和双引号效果一样
<a href="http://www.example.com">A link to my example.</a>
<a href='http://www.example.com'>A link to my example.</a>
这样写只是个人喜好。

## <meta charset="utf-8">
采用这种标记，可以让网页编译识别所有人类的语言，不会出现乱码现象。比如你的页面里有日语，阿拉伯语，等都可以识别出来。
<meta property="og:image" content="https://developer.cdn.mozilla.net/static/img/opengraph-logo.dc4e08e2f6af.png">
<meta property="og:description" content="The Mozilla Developer Network (MDN) provides
information about Open Web technologies including HTML, CSS, and APIs for both Web sites
and HTML5 Apps. It also documents Mozilla products, like Firefox OS.">
<meta property="og:title" content="Mozilla Developer Network">
这是用搜索引擎搜索到以后下面的描述性文字，meta里的内容被搜索引擎抓取。

<title></title>: The [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/title)浏览器标签，就是收藏页面的或者页面顶部显示的信息。

## 使用Github文件

RAW----file-----save page as------选择好路径

## 表情符号
<title>&lt;title&gt; element</title>![Screen Shot 2017-09-19 at 4.43.54 PM](/Users/wufan/Desktop/Screen Shot 2017-09-19 at 4.43.54 PM.png)
## 语言标签
<html lang="en-US">
通过设置语言来加速html文件识别字符，特别地对于类似法语和英语一样的单词six可以有效区分。或者单独一部分标识成外国语言如：
<p>Japanese example: <span lang="jp">ご飯が熱い。</span>.</p>

## html是如何与css、script挂钩的
在写html的时候，除了清楚html要用到的元素以外。如何与css、script挂钩呢？
通常会在head元素内，添加形式如<link ref="stylesheet" src="style.css">来加上css。现在有了bootstrap这种第三方库，只要引入即可调用很多css。
添加形式如<script src="scripts/main.js"></script>来与html互动，现在有了vue第三方库，更方便实现效果。

<a href="https://www.mozilla.org/en-US/">
  <img src="mozilla-image.png" alt="mozilla logo that links to the mozilla homepage">
</a>

A URL, or Uniform Resource Locator is simply a string of text that defines where something is located on the Web. For example Mozilla's English homepage is located at https://www.mozilla.org/en-US/.

Document fragments
It is possible to link to a specific part of an HTML document (known as a document fragment), rather than just to the top of the document. To do this you first have to assign an id attribute to the element you want to link to. It normally makes sense to link to a specific heading, so this would look something like the following:

<h2 id="Mailing_address">Mailing address</h2>
<p>Want to write us a letter? Use our <a href="contacts.html#Mailing_address">mailing address</a>.</p>
You can even use the document fragment reference on its own to link to another part of the same document:

<p>The <a href="#Mailing_address">company mailing address</a> can be found at the bottom of this page.</p>
absolute URL: Points to a location defined by its absolute location on the web, including protocol and domain name. So for example, if an index.html page is uploaded to a directory called projects that sits inside the root of a web server, and the web site's domain is http://www.example.com, the page would be available at http://www.example.com/projects/index.html (or even just http://www.example.com/projects/, as most web servers just look for a landing page such as index.html to load if it is not specified in the URL.)
An absolute URL will always point to the same location, no matter where it is used.

relative URL: Points to a location that is relative to the file you are linking from, more like what we looked at in the previous section. For example, if we wanted to link from our example file at http://www.example.com/projects/index.html to a PDF file in the same directory, the URL would just be the filename — e.g. project-brief.pdf — no extra information needed. If the PDF was available in a subdirectory inside projects called pdfs, the relative link would be pdfs/project-brief.pdf (the equivalent absolute URL would be http://www.example.com/projects/pdfs/project-brief.pdf.)

Use the download attribute when linking to a download
When you are linking to a resource that is to be downloaded rather than opened in the browser, you can use the download attribute to provide a default save filename. Here's an example with a download link to the Windows version of Firefox 39:

<a href="https://download.mozilla.org/?product=firefox-39.0-SSL&os=win&lang=en-US"
   download="firefox-39-installer.exe">
  Download Firefox 39 for Windows
</a>

<!DOCTYPE html>
<html>

<head>
    <meta name="author" content="Chris Mills">
    <meta name="description" content="The MDN Learning Area aims to provide
complete beginners to the Web with all they need to know to get
started with developing web sites and applications.">
    <title>&lt;title&gt; element</title>
</head>

<body>
    <h1>&lt;h1&gt; element</h1>
</body>

</html>

bootstrap很强大，这里<link rel="stylesheet" href="https://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    <link rel="stylesheet" href="./public/style.css">还有 <link href="https://fonts.googleapis.com/css?family=Merriweather" rel="stylesheet">都是脱机也能工作的，是不是什么映射？不懂，我知道只要引入以后就存在你的电脑某个地方，就算删掉文件也一样用。