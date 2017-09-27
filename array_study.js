
//数组的使用
var data =[1,2,3,5];
var total = 0;//全局变量定义
for (i =0; i < data.length; i++){
  if (!data[i])continue;

  total += data[i];
}
console.log(total);
//我的问题再简化一下，这个答案为什么是4？

var data =[1,2,3,4];

for (i =0; i < data.length; i++){
  if (!data[i])continue;

  total += data[i];
}
console.log(total);
//我的问题再简化一下，这个答案为什么是4？原因是+=写成了=+

var data =[1,2,3,5];

for (i =0; i < data.length; i++){
  if (!data[i])continue;

  total += data[i];
}
console.log(total);


//p150多维数组的使用
for(var i = 0;i < a.length;i++){
    if(!a[i]) continue;//
}
for(var i = 0;i < a.length;i++){
    if(a[i] === undefined) continue;//
}
for(var i = 0;i < a.length;i++){
    if(!(i in a)) continue;//
}

//p109改写的

var data =[3,,3,,2333,,3232]
for (i =0; i < data.length; i++){
  if (!data[i])continue;//不能处理undefined的数据
  var total =0;
  total += data[i];
}
console.log(total);

//多维数组matrix[x][y]

//创建一个多维数组
var table = new Array(10);//表格里有10行
for(var i=0;i<table.length;i++)
    table[i]=new Array(10);//每行里有10列
//初始化数组
for(var row=0;row<table.length;row++){
    for(col=0;col<table[row].length;col++){
        table[row][col]=row*col;
    }
}
//使用多维数组来查询和计算
var output=table[5][7];
console.log(output);

//152
//数组方法join()
var foodList = ['beef','pork','tomatoes','patatoes'];
foodList.join();//把所有元素相加，中间默认由逗号隔开
foodList.join(" ");//默认逗号消失，空格
foodList.join("");//中间空格消失，整个连在一起


console.log(foodList);//[ 'beef', 'pork', 'tomatoes', 'patatoes' ]
console.log(foodList.join());//beef,pork,tomatoes,patatoes
console.log(foodList.join(" "));
console.log(foodList.join(""));


var menue = new Array(20);//长度为20的菜单列表
menue.join('-');//
console.log(menue.join('-'));//
//犀牛书152页
var b = new Array(10);  b.join('-')//打印的结果是9个连字号组成的字符串，这个不理解，
//理解了:var a =[1,2,3,4,5,6,7,8,9,0];console.log(a.join('-'));//1-2-3-4-5-6-7-8-9-0一共九个
//concat()方法
var a = [1,2,3];
console.log(a.concat(4,5));//[ 1, 2, 3, 4, 5 ]
console.log(a.concat([4,5]));//[ 1, 2, 3, 4, 5 ]
console.log(a.concat([4,5],[6,7]));//[ 1, 2, 3, 4, 5, 6, 7 ]
console.log(a.concat(4,[5,[6,7]]));//[ 1, 2, 3, 4, 5, [ 6, 7 ] ]不会传递扁平化数组的数组

//slice()指定数组的一个片段或子数组，两个参数的位置分别是开始和结束的位置，包含第一个参数指定的位置
//与不含第二个参数指定的位置之间的所有元素。如果只有一个参数，表示返回的数组将包含从开始位置到数组结尾的所有元素。
//如果出现负数，表示倒数-1最后一个，-3倒数第三个。
var a = [1,2,3,4,5];
console.log(a.slice(0,3));//[ 1, 2, 3 ]
console.log(a.slice(3));//[ 4, 5 ]
console.log(a.slice(1,-1));//[ 2, 3, 4 ]
console.log(a.slice(-3,-2));//[ 3 ]


//reverse()会修改调用的数组
var a = [1,2,3,4];
a.reverse().join();//[4,3,2,1]

//sort()默认排列的是字符串，按照Unicode编码大小排列，比较数字需要调用函数
//sort()会修改调用的数组
var a = new Array('banana','apple','cherry');
a.sort();//[ 'apple', 'banana', 'cherry' ]
console.log(a);//[ 'apple', 'banana', 'cherry' ]
console.log(a.sort()); //[ 'apple', 'banana', 'cherry' ]
var b = a.join(", ");
console.log(b);//apple, banana, cherry
//------

var a = [33,23,4,222,1111];
console.log(a.sort());//[ 1111, 222, 23, 33, 4 ]
console.log(a.sort(function(a,b){return b-a;}));//[ 1111, 222, 33, 23, 4 ]
console.log(a.sort(function(a,b){return a-b;}));//[ 4, 23, 33, 222, 1111 ]
//对一个字符串数组执行不区分大小写的字母表排序。
a = ['ant','BUG','caT','DOg'];
console.log(a.sort());//[ 'BUG', 'DOg', 'ant', 'caT' ]
console.log(a.sort(function(s,t){
    var a = s.toLowerCase();
    var b = t.toLowerCase();
    if(a<b) return -1;
    if(a>b) return 1;
    return 0;
}));//[ 'ant', 'BUG', 'caT', 'DOg' ]
