import { type } from "os";

interface Obj{
  a: string;
  b: number;
  c: boolean;
}

// Readonly TS内置的泛型接口
type ReadonlyObj = Readonly<Obj>;

type PartialObj = Partial<Obj>;

type PickObj = Pick<Obj, 'a'|'b'>

type RecordObj = Record<'x' | 'y', Obj>;

export {}