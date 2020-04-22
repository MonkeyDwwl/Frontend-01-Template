// 题目三： 写一个正则表达式，匹配所有的字符串直接量，单引号和双引号

const isStringLiteral = (value) => {
  const re = /^[\u0000-\uffff]+$/
  return re.test(value)
}
