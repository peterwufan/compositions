//函数的设计给了一个参数callback
function callback(number) {
//函数参数的判定
    if(number>5)
    {console.log('I finished running finally!');}else{return}
}
function run() {
    console.log('🏃🏃🏃🏃🏃');
    callback(4);
}
//间接回调函数的使用，函数的调用
run(callback);

//alt+shift+f=adjust format automatically


var data =[3,,3,2333,3232]
for (i =0; i < data.length; i++){
  if (data[i] === undefined)continue;//不能处理undefined的数据
  var total =0;
  total += data[i];
}
console.log(total);

var data =[3,,3,,2333,,3232]
for (i =0; i < data.length; i++){
  if (!(i in data))continue;//不能处理undefined的数据
  var total =0;
  total += data[i];
}
console.log(total);

//我理解不了这个continue到底是什么意思，这两次console.log是有区别的，
//一次是有undefined数据存在，一次没有，为什么结果都是3232
//语法书上continue 的使用方法：当执行到continue语句的时候，(p108页)
//当前的循环逻辑就终止了，随即执行下一次循环
//continue 在while语句中的用法
//zoom out vsc : "command"+"+";zoom in :"command"+"-"
var i = 0;
var j = 8;
checkiandj: while (i < 4) {
    console.log('i:' + i);
    i += 1;

    checkj: while (i > 4) {
        console.log('J:' + j);
        j -= 1;

        if ((j % 2) == 0)//求余数
            continue checkj;
        console.log(j + 'is odd')
    }
    console.log('i=' + i);
    console.log('j=' + j);
}
