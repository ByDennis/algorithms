const mock = require('mockjs').mock

// 定义必须参数
let switchCount // 交换次数
let loopCount = 0 // 循环次数

// 初始化数据
const data = mock({
  [`data|20`]: [`@integer(1, 100)`]
}).data

console.log('初始数据：' + data)

do {
  switchCount = 0
  for (let i = 0; i < data.length - loopCount; i++) {
    if (data[i] > data[i + 1]) {
      switchCount++ // 统计交换次数
      let temp = data[i]
      data[i] = data[i + 1]
      data[i + 1] = temp
    }
  }
  loopCount++ // 统计循环次数
} while (switchCount !== 0)

console.log('排序结果：' + data)
