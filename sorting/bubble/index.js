const mock = require('mockjs').mock

// 定义算法
function bubbleSort (array) {
  // 定义必须参数
  let switchCount // 交换次数
  let loopCount = 0 // 循环次数
  do {
    switchCount = 0
    for (let i = 0; i < array.length - loopCount; i++) {
      if (array[i] > array[i + 1]) {
        switchCount++ // 统计交换次数
        let temp = array[i]
        array[i] = array[i + 1]
        array[i + 1] = temp
      }
    }
    loopCount++ // 统计循环次数
  } while (switchCount !== 0)
}

// 初始化数据
const data = mock({
  [`data|20`]: [`@integer(1, 100)`]
}).data

console.log('初始数据：' + data)

bubbleSort(data)

console.log('排序结果：' + data)
