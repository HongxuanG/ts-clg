type Mutable<T extends Record<string, any>> = {
  -readonly [key in keyof T]: T[key] extends Object ? Mutable<T[key]> : T[key]
}
// -readonly是 去除readonly修饰符
