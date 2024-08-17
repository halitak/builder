type GetPath<TData extends object, TPath extends string> =
  TPath extends `${infer TFirst}.${infer TRest}`
  ? TFirst extends keyof TData
    ? TData[TFirst] extends object
      ? GetPath<TData[TFirst], TRest>
      : never
    : TFirst extends `${infer TIndex extends number}`
      ? TData extends any[]
        ? GetPath<TData[TIndex], TRest>
        : never
      : never
  : TPath extends keyof TData
    ? TData[TPath]
    : TPath extends `${infer TIndex extends number}`
      ? TData extends any[]
        ? TData[TIndex]
        : never
      : never;

type ToString<T extends PropertyKey> =
 T extends string ? T : T extends number ? `${T}` : never;

export type DeepKeys<TObj> = {
  [K in keyof TObj]: 
    TObj[K] extends any[]
      ? TObj[K]["length"] extends 0
        ? `${ToString<K>}`
        : `${ToString<K>}` | `${ToString<K>}.${number}` | `${ToString<K>}.${number}.${DeepKeys<TObj[K][number]>}`
      : TObj[K] extends object
        ? `${ToString<K>}` | `${ToString<K>}.${DeepKeys<TObj[K]>}`
        : `${ToString<K>}`
}[keyof TObj];

// type TestKeys = DeepKeys<{ items: { name: "colinhacks" }[], foo: { bar: 5 }, baz: 10, 1: 10 }>;
//   ^?

export function get<TData extends object, TPath extends DeepKeys<TData> =  DeepKeys<TData>>(data: TData, pathStr: TPath): GetPath<TData, TPath> {
  let target: any = data;
  const path = pathStr.split(".");
  while (path.length) target = target[path.shift()!];
  return target;
}

// const data = { items: [{ name: "colinhacks" }] };

// /* ----------- */
// /* QUERY TESTS */
// /* ----------- */
// const dataItems = get(data, "items");
// //    ^?
// const dataItems0 = get(data, "items.0");
// //    ^?
// const dataName = get(data, "items.0.name");
// //    ^?

// /* --------- */
// /* KEY TESTS */
// /* --------- */
// const KEY_TESTS = [
//   get(data, "items"),
//   get(data, "items.0"),
//   get(data, "items.1.name"),
//   get(data, "items.2.name"),
//   // ^ Shall not fail

//   get(data, "items.2.surname"),
//   // ^ Shall fail
// ]