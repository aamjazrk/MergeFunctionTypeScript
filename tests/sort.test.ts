import { MergeAndSort } from '../src/index';
import { expect } from 'chai';
describe('sortArray', () => {
  it('result should not equal with expexted value', () => {
    const input1 = [5, 2, 8, 1, 9];
    const input2 = [90, 3, 16];
    const expected = [1, 2, 5, 8, 9];
    const sorted = MergeAndSort(input1,input2);
    expect(sorted).to.not.deep.equal(expected);
  });


  it('should return an empty array if the input is empty', () => {
    const input1: number[] = [];
    const input2: number[] = [];
    const expected: number[] = [];
    const sorted = MergeAndSort(input1,input2);
    expect(sorted).to.deep.equal(expected);
  });

  it('should return the same array if it is sorted', () => {
    const input1 = [1, 2, 3, 4, 5];
    const input2 = [9,4,7,10];
    const expected = [1, 2, 3, 4, 4, 5, 7, 9,10];
    const sorted = MergeAndSort(input1,input2);
    expect(sorted).to.deep.equal(expected);
  });
});
