import { type } from "os";

// T extends U ? X : Y

type TypeName<T> = 
  T extends string ? 'string' :
  T extends number ? 'number'  :
  T extends boolean ? 'boolean' :
  T extends undefined ? 'undefined' :
  T extends Function ? 'function':
  'object';

type T1 = TypeName<string>
type T2 = TypeName<string[]>;

type T3 = TypeName< string | string[]>;

// 实现类型过滤
type Diff<T, U> = T extends U ? never : T;

// never是没有的存在
type t4 = Diff<'a' | 'b' | 'c', 'a' | 'e'>;

// 扩展diff, 过滤undefined和null
type NotNull<T> = Diff<T, undefined | null>;
type T5 = NotNull<string | number | undefined | null>;

// Exclude<T, U> = Diff
// NonNullable<T> = NotNull
// Extract<T, U>
type T6 = Extract<'a' | 'b' | 'c', 'a' | 'e'>;

// ReturnType<T>
type T7 = ReturnType<()=>string>;


