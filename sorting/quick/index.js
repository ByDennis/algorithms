const mock = require('mockjs').mock

// 初始化数据
const data = mock({
  [`data|20`]: [`@integer(1, 100)`]
}).data

console.log('初始数据：' + data)

function quickSort (array) {
  function sort (prev, numsize) {
    var nonius = prev
    var j = numsize - 1
    var flag = array[prev]
    if ((numsize - prev) > 1) {
      while (nonius < j) {
        for (; nonius < j; j--) {
          if (array[j] < flag) {
            array[nonius++] = array[j]
            break
          };
        }
        for (; nonius < j; nonius++) {
          if (array[nonius] > flag) {
            array[j--] = array[nonius]
            break
          }
        }
      }
      array[nonius] = flag
      sort(0, nonius)
      sort(nonius + 1, numsize)
    }
  }
  sort(0, array.length)
  return array
}

console.log('排序结果：' + quickSort(data))
