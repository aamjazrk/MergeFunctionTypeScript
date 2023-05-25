import { merge } from './merge';
export function MergeAndSort(collection_1: number[], collection_2: number[]): number[] {
  
  const merged = merge(collection_1, collection_2);
  return merged
}

const collection1 = [77, 1, 3,500, 349, 5, 50, 65];
const collection2 = [100, 2, 4, 6, 75,5];

console.log(MergeAndSort(collection1,collection2));