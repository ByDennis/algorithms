const mock = require('mockjs').mock

// 定义算法
function insertionSort (array) {
  let index = -1
  for (let el of array) {
    index++
    if (index === 0) {
      continue
    }
    let j = index - 1
    while (j >= 0 && array[j] > el) {
      array[j + 1] = array[j]
      j--
      array[j + 1] = el
    }
  }
}

// 初始化数据
const data = mock({
  [`data|20`]: [`@integer(1, 100)`]
}).data

console.log('初始数据：' + data)

insertionSort(data)

console.log('排序结果：' + data)
