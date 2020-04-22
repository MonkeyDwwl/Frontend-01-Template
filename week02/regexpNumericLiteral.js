// 题目一： 写一个正则表达式 匹配所有 Number 直接量

/*
*   NumericLiteral
*       DecimalLiteral /^(\.\d+|(0|[1-9]\d*)\.?\d*)([eE][-\+]?\d+)?$/
*       BinaryIntegerLiteral /^0[bB][01]+$/
*       OctalIntegerLiteral /^0[oO][0-7]+$/
*       HexIntegerLiteral /^0[xX][0-9a-fA-F]+$/
*
* */

const isNumericLiteral = (value) => {
  const re = /^(\.\d+|(0|[1-9]\d*)\.?\d*)([eE][-\+]?\d+)?$|^0[bB][01]+$|^0[oO][0-7]+$|^0[xX][0-9a-fA-F]+$/
  return re.test(value)
}
