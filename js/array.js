// Anagrams of string  带有重复值

// 基本思路： 使用递归对于给定的字符串中的每个字母，为字母创建字谜。使用map将字母以及每部分的字谜组合，然后使用reduce 将所有的字谜组合成为一个数组中，最基本的情况是将字符串长度等于2 或者 1 。

// 主要实现将传入的字符串进行顺序互换 最多传入三位大小字符串

const anagrams = str => {
    if (str.length <= 2) return str.length === 2 ? [str, str[1] + str[0]] : [str]; 
    console.log("str.split('')" + str.split(''))
        return console.log(str.split('').reduce((acc, letter, i)=> 
            acc        
                .concat(anagrams(str.slice(0, i) + str.slice(i + 1))
                .map(val => letter + val)), []))
    
} 
anagrams('abc')
const array = ['abc', 'acb', 'bca', 'bac', 'cab', 'cba']


// 数组平均数 => 将reduce（）将每个值添加到累加器上去，初始值为0 总和除以数组长度
const average = arr => console.log(arr.reduce((acc, val ) => acc + val , 0) / arr.length) ;

average ([1, 2, 3])


//




// 数组方法总结