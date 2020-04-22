// 题目二： 写一个 UTF-8 Encoding 的函数

const getUtf8Encoding = (str) => {
  let str_arr = str.split('')
  let res = str_arr.map((char) => `\\u${char.charCodeAt().toString(16)}`)
  return res.join('')
}
