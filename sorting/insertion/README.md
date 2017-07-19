# 插入排序

有一个已经有序的数据序列，要求在这个已经排好的数据序列中插入一个数，但要求插入后此数据序列仍然有序，这个时候就要用到一种新的排序方法——插入排序法,插入排序的基本操作就是将一个数据插入到已经排好序的有序数据中，从而得到一个新的、个数加一的有序数据，算法适用于少量数据的排序，时间复杂度为O(n^2)。是稳定的排序方法。插入算法把要排序的数组分成两部分：第一部分包含了这个数组的所有元素，但将最后一个元素除外（让数组多一个空间才有插入的位置），而第二部分就只包含这一个元素（即待插入元素）。在第一部分排序完成后，再将这个最后元素插入到已排好序的第一部分中。


插入排序的基本思想是：每步将一个待排序的纪录，按其关键码值的大小插入前面已经排序的文件中适当位置上，直到全部插入完为止。

算法设计有很多方法。插入排序使用的是增量（incremental）方法；在排好子数组A[1..j-1]后，将A[j]插入，形成排好序的子数组A[1..j]；
步骤

1. 从有序数列和无序数列{a2,a3，…，an}开始进行排序；
2. 处理第i个元素时（i=2,3，…，n），数列{a1,a2，…，ai-1}是已有序的，而数列{ai,ai+1，…，an}是无序的。用ai与ai-1，a i-2，…，a1进行比较，找出合适的位置将ai插入；
3. 重复第二步，共进行n-i次插入处理，数列全部有序。

## 时间

- 最差：o(n^2) 最好：o(n)  平均：o(n^2)


## 空间 

- o(1)