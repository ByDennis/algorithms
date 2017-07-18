const mock = require('mockjs').mock
const log = console.log

// 定义必须参数
let buckets = []
const max = 100
const size = 10
const numBuckets = 5

// 初始化数据
const data = mock({
  [`data|${size}`]: [`@integer(1, ${max})`]
}).data

log('初始数据：' + data)

// 分桶
data.forEach((v, i) => {
  const index = Math.floor(v / (max / numBuckets))
  if (!buckets[index]) buckets[index] = []
  buckets[index].push(v)
})

// 桶内排序
buckets = buckets.map(item => {
  return item.sort((a, b) => a - b)
})

// 连接
console.log('排序结果：' + buckets.join())
