#问题汇总
##什么是.DS_store？https://www.appducate.com/2013/09/what-is-ds_store-file-on-mac-os-x/
##git clone <url>指令
##ls指令，显示当前目录的所有文件，指令实例：open指令，open file_name/open .打开文件或文件夹
##git status 查看当前状态
##echo http://www.linfo.org/echo.html和https://zh.wikipedia.org/wiki/Echo_(%E5%91%BD%E4%BB%A4)
##git add -A选中全部指令
##git commit -m "xxxx"注意格式为全英文半角
##git push origin master推送到master
##其他常用Mac指令：https://www.tecmint.com/15-basic-ls-command-examples-in-linux/
一般打开中断后，需要知道当前目录下都有哪些文件夹和文件，可以用ls指令
通过cd进入文件夹
cd allin/就进入了allin文件夹。退出当前文件夹cd ..即可，cd ~回到终端默认打开的文件夹位置。
为了确认自己没有进错，使用pwd命令查看当前文件夹的全路径。
cd m会出现一切以m开头的文件，便于查找
##作业除了要注意英文半角外，正式提交前还要不断review
##利用好这门课，就是完全按照老师的要求去做，放弃傲慢。
##银行开户流程，js开发环境的类比。银行开户需要1填写申请单2柜台开户3发卡。运行环境里有第三方库的调用，运行时要用到第三方库。
##第三方服务，比如在澡堂环境下实现洗澡的任务，但是要吃饭就得出去到第三方服务者饭店，因为很多饭店所以是库。
##V8引擎就是执行的一个工具，对代码预处理和执行。引擎就是执行代码是，运行环境的一部分。v8引擎执行代码速度很快，在js和node环境里干的是一样的事儿。
##编译型的语言有一个非常明显的编译过程，要预处理，因此开发较慢，但是执行很快。C++就是编译型语言。
##JS是一个解释性的语言，边分析边执行，开发效率高，运行要慢一些。
##JS黑盒运行的环境问题不需要初学者学习，黑和运行环境里有小一部分是V8引擎（去执行代码）怎么运行不重要，重要的是网络库，日志库，JS内置对象。
##浏览器的环境和nodejs（或者叫node等）环境都不一样，不是完全兼容的，一个前端，一个后端，因为都有JS内置对象，所以部分兼容。
##共性是数据类型相同，差异是可调用的第三方库不同
##打开网页的同时，相当于启动了一个运行环境，可以跑代码了。
##例子在浏览器和node环境中都可以使用内置服务connsole.log("hello,js")，但是在node中不能用内置服务alert，在浏览器chrome内置js环境中可以。
##我们要学习的是左边的内置库，第三方库，你写的代码这三个
##汇编语言跟机器代码结合最深的语言，由JS创造出来的语言有上百种。
##学习需要聚焦，万变不离其宗，吃透一本教材基本上其他就很快了，编程的道理通用。JS的第三方库是独立的，不会像ruby那样可以调用其他语言的第三方库。
##运行环境和引擎的关系，运行环境>引擎，运行环境提供了服务，你写的代码调用那些服务，下指令。
##初学者对第三方库的学习可以从github上找，不知道如何甄别可以向高手请教，或者直接找fork数多的，star多的。
##第三方库打个比方可以这么理解。假如你想吃豆瓣酱，你有两种方式。你自己使用辣椒、油、豆子、盐、糖等原料自己去做一个豆瓣酱，一个是去超市里买品牌厂家做的豆瓣酱，超市的豆瓣酱也是通过这些原料做成的，但是有可能更安全，更美味。在这里的辣椒、油、豆子、盐、糖等可以理解为图中的内置服务；超市买的豆瓣酱就可以理解为图中的第三方库。
##安装nvm的问题
电脑运行环境的问题
安装后退出terminal不是关闭
cd ~
cat .bash_profile
刚老师帮我看了电脑文件 运行       echo "source ~/.bashrc" >> .bash_profile 然后关闭终端重开 运行nvm --version就好了。
1运行命令: touch ~/.bashrc 2重新安装,运行命令: curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.2/install.sh | bash 3运行命令: nvm --version
不要做IR = "$HOME/.nvm"
装完后，直接关闭终端再起终端，直接执行nvm --version
或者在cat .bashrc执行一下：
cd ~
cat .bash

##利用github部署第一个个人在线主页。
##第一次作业和第二次作业讲解
第一次作业主要是熟悉git操作并且从github上clone一个项目
首先，从我的github仓库，你们git clone了我的项目getting-started-with-javascript这时，你本地就有一个getting-started-with-javascript项目在文档中，执行mkdir my_folder这句并不是很重要。这句话的目的是让你创建一个文件夹my_folder。你可以不创建，也可以创建任意的文件夹比如：mkdir work
创建一个专用文件夹的目的就是让你们能规整好自己的项目而已。你clone下来后，势必要进入getting-started-with-javascript目录
这个目录里面有很多隐藏文件。你们可以执行ls -a看一眼
这些隐藏文件记录了项目的信息。你后续执行任何git相关的操作都需要这些隐藏文件。
这也就是为什么我们操作git add和git commit时，一定要进入到getting-started-with-javascript的原因。
你往getting-started-with-javascript添加了内容，比如图片，文档，或改动了里面某个文件。这时，你git add ,git commit git push
最终你git push一定会提交不了。这是我埋给你们的一个坑。我的项目怎么会让你能直接push呢，对吧。随意一定会提示错误。
第六步，你们自己在github上去创建一个自己的项目。然后重复1-5的操作。这时1-5的操作的目标项目都应该是你的项目。然后添加文件，提交。就可以了。由于你们是第一次使用git。git再提交时，需要确认你的身份。
设置user.email和user.name其实，这两条指令再安装完git的时候就可以直接去做，并不一定要等到git push的时候让终端主动提醒你。只不过你们不知道有这两条指令而已。现在你们就懂了。

第二次作业
协同工作我在文档写的很清楚。同学们在以后几个人完成一个项目就一定会用上。想想看，github不一定是要成为代码的仓库，有很多人在github上协同进行翻译书的作业。都需要用到pull request的操作。
看1-4步骤，你先把别人的项目fork到自己的github仓库。那么这个右上角的项目就是你的了。虽然内容一样你我之间的提交都不影响对方。我继续干我的项目xugy0926/getting-- 你干的是你的项目your/getting---当你把你的项目的功能开发完，想提交到我的项目。因为你是从我这fork过去的，我们之间是有联系的。你只要发起一次pull request。我这边就会收到你的提交请求。我会检查你的改动，是否正确。正确，我就会合并进来。这就是协同作业。你们在作业过程，没有搞清楚项目之间的关系，就会出错。认真理解文档的话语很重要。把上面的关系图理解清楚。

注意
提交作业前要记得更新你的fork内容步骤如下：how do I update a  Github forked repository
https://stackoverflow.com/questions/7244321/how-do-i-update-a-github-forked-repository
我的错误就在于clone老师地址时，不应该copy那个url而是带有git扩展名的那个。
##第二节课笔记
一切以命名开始。操作的指令跟代码很接近
函数git，调用对象add，参数-A
先取名，生小孩，把名字和小孩关联上。
名称可以是宝宝啊，捉着正式的名字大名小名
用名字来操纵人。
从姓名开始思考，属性--身高体重性别年龄
，关系--家属闺蜜朋友同学
小明对应的目标是一个具体的人
由特征判断这个人，大脑通过数据来判断筛选。
代号是一个具体的人的各种属性的集合
小明是一堆论七八糟的属性和关系的集合。
程序的目的是什么？处理数据，得到结果。
数据、变量
名称/变量
数据/值
var output = “hello， js”；
var output；//声明一个变量output
output=“hello，js”；//定义这个变量，给他赋值。
实操：
对象数据{}里面都是用：来定义的
##黄家树的第二课作业
 第二课作业 编程中为什么会有丰富化的数据格式？
 
 [静态页面链接](https://cloudyview.github.io/learning-javascript/)
 
 这是一篇课程总结，所以首先回答老师提出的问题，编程中为什么会有丰富化的数据格式？我认为丰富化的数据格式主要是为了满足方便描述对象特征和方便计算机数据处理两方面。
 
## 方便描述对象的特征
 +由于不同的对象有着不同的特征，所以数据格式会有多样化，丰富化的情况。以一个人为例，例如“小明”，针对这个人，我们需要描述一组非常复杂，相互之间无法直接替代的特征来对其进行描述。譬如身高，体重，年龄这些，就比较适合使用数字来描述。而性别，婚否这些，比较适合使用布尔值来描述，人生格言等比较适合采用字符串的方式，生日等比较适合采用日期格式等。还有一些离散型的特征，例如家属，需要利用数组类型来描述，而某些对象例如所属公司，或者项目，可能是一组属性的集合，将这组属性作为整体来描述。
 +
 +根据所描述对象的不同，我们常常会用到组合型的数据格式，这些组合数据包含一组数据，这一组数据里同样可以有基本数据和组合数据。每种对象的特征，在不同的场合会有不同的抽象的方式方法和不同的视角，因此，也会导致数据格式的多样性。
 +
 +对于这种复杂的情况，当然，我们也可以通过一大段文字来描述，将所有数据都放在一堆，让读的人自己去分析，去找。这样一来读起来是非常费劲的，而利用格式化和符号化的方式，则可以让人更加轻松的理解数据。
 +
 +## 方便计算机进行数据处理
 +编程所编写的程序，采用的是计算机语言，而程序本身的目标则是处理数据，得到结果。也就是说，我们的程序所处理的数据，必须是计算机读得懂，容易处理的数据。
 +
 +如果说，人类可以读得懂自然语言的文字所描述的各种数据，那么计算机实际上普遍并没有这么智能。计算机能够处理的肯定是经过了格式化和符号化的数据。而针对不同数据类型，计算机显然有不同的处理方式。例如都是数字，计算机就可以对其采用数学运算符来进行操作，而对于字符串，当然也可以有字符串的处理方式，如果非要对字符串进行加减乘除，显然没太多意义。
 +
 +还有一点就是关于数据的存储了。早期计算机的资源很有限，所以基本上要充分利用每一个字节的存储资源，因此，数据类型里对数字要区分为整型，浮点型之类，为了减少对内存的消耗。因此，有一部分数据格式的设计是为了对计算机资源进行更为有效的利用。
 +
 +以上是我对于数据格式的理解。
 +
 +
 +下面是对于课程的学习总结
 +
## 命名
 +
 +### 一切从命名开始
 +这一课的开端是：“一切从命名开始”，从命名开始，我们得以操纵变量和数据。这句话太赞。
 +
 +以前感觉程序员可以从零开始构造一个体系，这个体系能够达成某些功能，实现某些目标，感觉非常神奇。但是对于程序员到底是如何做到这一点，理解的并不深刻。
 +
 +而这句话———— 一切从命名开始，打开了这个结。
 +
 +命名是针对变量进行的（这个理解不知道是不是以偏概全了，请老师指正），而通过变量，我们可以进一步去连接数据。所以，通过命名，我们可以去操纵数据。有了数据，我们就可以通过编程的手段对数据进行处理，然后得到我们想要的结果。而这样，我们就可以构建一个自我完备的，自洽的体系。
 +
 +命名是非常重要的，相当于一个抓手，如果抓手没有了，找不到了，或者不好用了，操作数据等等都无从谈起。
 +
### 驼峰大小写命名法
 +命名的书写方式，老师也给出了范例，实际上常见的有四种，即全部小写，下划线分割方式，单词首字母大写，第二个单词开始首字母大写，也就是：myname,my_name,MyName,myName。
 +
 +老师今天提到了驼峰式命名，Camel Case，就是后两种命名书写方式。MyName这种叫做大驼峰方式，myName叫做小驼峰方式。
 +
 +命名中间没有空格或者任何连接线，可以减少错误，而单词首字母大写，有利于加强可读性。
 +
 +由于很多系统里面，实际上是不区分大小写字母的，所以，我推断，MyName和myName在计算机处理的时候，实际上是等价的，驼峰方式只是为了程序员阅读方便。
 +
 +### 对于命名方式的思考
 +命名既然如此重要，那么肯定要充分的思考其特点。对于计算机来说，命名神马的无所谓。我们将文件放上一个系统，例如放上淘宝的图片空间，淘宝系统就会自动给一个命名。这个文件命名完全不具备可读性。但是，对于淘宝系统来说，却是无所谓的，因为它只需要让这个名字不重复，不冲突就好。
 +
 +所以，命名方式，主要帮助对程序员增加对编程工作本身的控制力的。人类是需要意义才能够理解和记忆事务的，如果记忆毫无意义的信息，人类的能力非常差。所以，命名本身必须具有容易为自己和将来可能看到程序的人理解的意义。
 +
 +同时，还必须保证不会重复，不会有冲突。
 +
 +从这些角度出发，我推论（没经验，只能推论）：
 +> - 变量的命名最好以英文单词来构成。拼音似乎不应成为推荐的用法 
 +> - 命名所构成的英文单词与其所对应的属性、内容有较强的关联
 +> - 不同类型的变量，最好带有规则，例如针对Animal的属性，就用譬如AnimalHeight,AnimalWeight.
 +
## 程序的目的
 +程序的目的：处理数据，得到结果。
 +乍一看，好像没说完吧，程序能够通信，玩游戏，做文档，管生产等等。但是，如果认真的思考一下，就会发现，其实程序只有两件事情：数据，算法。所以，针对数据，进行处理（用算法来处理数据），得到结果。
 +
 ##变量的使用
 
 变量的使用：声明变量，定义变量，赋值变量
 
 定义变量的意思，我推断是要将变量究竟适合于何种数据格式要说清楚。也就是说，计算机底层的执行，是必须知道变量的类型的。而JS应该是在第一次赋值的时候，根据数据本身的类型对变量先做了一次定义，然后再使用的。
 
 这里的问题是：究竟是第一次赋值的时候进行了定义，还是每次赋值都重新定义呢？一个变量在一个程序里可以随意改变自己的类型吗？如果是C的话，肯定是不可以。
##老师的sample code.js
//声明并定义变量

var name = 'xiaoming';
var age = 18;
var height = 170, weight = 130.1;
var isMan = true;
var student = false;
var xinshengUserName = 'xiaoming';
var wechat_user_name = 'xiaoming';
var locaitonBase = '北京';
var company = locaitonBase + '新生大学';
var myLikeColorsList = ['blue', 'green', 'black', 'write'];
var myLikeFoods = ['刀削面', '拉面', '牛肉面', '杂酱面', '麻辣面', '烩面', '莜面'];

//声明并定义对象变量
var myJavaScriptLessionInfoObj = {
  teacher: name,
  teacherWeChat: wechat_user_name,
  title: 'JavaScript编程入门',
  beginTime: '2018/8/8',
  endTime: '2018/9/4',
  boysStudent: 417,
  girlsStudent: 119,
  lessionTarget: '帮助更多小白学习JavaScript',
  githubUrl: 'https://github.com/xugy0926/getting-started-with-javascript'
};

/*
* 输出个人信息
* 输出个人信息时，必要信息要求加辅助提示语
*/

console.log('姓名');
console.log(name);

console.log("年龄: " + age);
console.log('身高 = ' + height + ', 体重 = ' + weight);
console.log('地点: ' + locaitonBase);
console.log('公司: ' + company);

console.log('\n');

console.log('----我喜欢的颜色----');

console.log('我总共喜欢 ' + myLikeColorsList.length + ' 种颜色');
// 根据游标访问数据的内容，数组的游标从0开始
console.log(myLikeColorsList[0]);
console.log(myLikeColorsList[1]);
console.log(myLikeColorsList[2]);
console.log(myLikeColorsList[3]);

console.log('--------------------');

console.log('\n');

console.log('----我喜欢的食物----');
console.log('我总共喜欢 ' + myLikeFoods.length + ' 种食物');

// for 循环
for (var i = 0; i < myLikeFoods.length; i++) {
  console.log(myLikeFoods[i]);
}

console.log('--------------------');
console.log('\n');
console.log('JavaScript课程信息');
console.log(myJavaScriptLessionInfoObj);

console.log('\n');
console.log('#####################');
console.log('我是分界线')
console.log('#####################');
// 用上面定义的变量重新打包，并定义出xiaoming这边变量

var xiaoming = {
  name: name,
  config: {
    age: age,
    height: height,
    weight: weight,
    isMan: isMan,
    student: student
  },
  like: {
    myLikeColorsList: myLikeColorsList,
    myLikeFoods: myLikeColorsList
  },
  work: {
    locaitonBase: locaitonBase,
    company: company
  },
  myJavaScriptLessionInfoObj: myJavaScriptLessionInfoObj
}

console.log(xiaoming);
##第一次使用git.md
语言格式规范，不能有中文双引号这样的错误，已经有的的错误包括1输入了提示符>，2代码的空格没有，3双引号用中文。
mac终端常用指令总结：（务必熟记）
https://github.com/xugy0926/getting-started-with-javascript/blob/master/topics/MAC-Terminal-command-list.md
git简易指南http://rogerdudler.github.io/git-guide/index.zh.html
专业版的http://iissnan.com/progit/ 