type BaseNumber = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
// 判断是不是Number  递归
type isNumber<N> = N extends `${BaseNumber}${infer S}`
  ? S extends ''
    ? true
    : isNumber<S>
  : false
// 递归通过数组计数的方式累加
type ToNumber<
  S extends string,
  CountArr extends unknown[] = [],
> = isNumber<S> extends true
  ? S extends `${CountArr['length']}`
    ? CountArr['length']
    : ToNumber<S, [...CountArr, unknown]>
  : never
