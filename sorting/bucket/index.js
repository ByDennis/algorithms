const mock = require('mockjs').mock
const log = console.log

function bucketSort (array, size, max, numBuckets) {
  // 定义必须参数
  let buckets = []

  array.forEach((v, i) => {
    const index = Math.floor(v / (max / numBuckets))
    if (!buckets[index]) buckets[index] = []
    buckets[index].push(v)
  })

  // 桶内排序
  buckets = buckets.map(item => {
    return item.sort((a, b) => a - b)
  })

  // 连接
  return buckets.join(',').split(',').filter(item => typeof item !== 'undefined')
}

// 初始化数据
const data = mock({
  [`data|20`]: [`@integer(1, 100)`]
}).data

log('初始数据：' + data)

// 连接
console.log('排序结果：' + bucketSort(data, 20, 100, 5))
