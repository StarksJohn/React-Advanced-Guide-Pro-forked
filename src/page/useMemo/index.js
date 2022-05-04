import React, { useState, useMemo } from 'react'

/*
https://www.bianchengquan.com/article/145784.html
 */
export default function app () {
  const [num, setNum] = useState(0)

  const [factorializeNum, setFactorializeNum] = useState(5)

  // 当 factorializeNum 值不变的时候，这个函数不会再重复触发了
  const factorialize = useMemo(() => {
    console.log('触发了');
    let result = 1;
    for (let i = 1; i <= factorializeNum; i++) {
      result *= i;
    }
    return result;
  }, [factorializeNum]);

  return (
    <>
      {num}
      <button onClick={() => setNum(num + factorialize)}>修改num</button>
      <button onClick={() => setFactorializeNum(factorializeNum + 1)}>修改阶乘参数</button>
    </>
  )
}
