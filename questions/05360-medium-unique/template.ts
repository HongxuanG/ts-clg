type Unique<T extends unknown[], S extends any[] = []> = T extends [
  infer First,
  ...infer Rest,
]
  ? IsCover<First, S> extends true
    ? Unique<Rest, S>
    : Unique<Rest, [...S, First]>
  : S

type IsCover<T, S> = S extends [infer First, ...infer Rest]
  ? IsEqual<T, First> extends true
    ? true
    : IsCover<T, Rest>
  : false

/**
 * 思路
 * 拆分数组  First 和 Rest
 * 判断最后一个First是否 extends  Rest的Union类型
 * 是 说明有重复的  继续递归Rest 跳过该Last，不归纳到结果中
 * 否 说明是唯一的  归纳到结果中，继续递归剩下的Rest部分
 */
type ss2 = Unique<[1, 1, 2, 2, 3, 3]>
