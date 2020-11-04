import { accessorProperties } from './accessorProperties';

// describe("Template Test", () => {
//   test("Template Test", () => {
//     expect(true).toBe("Write your own tests here");
//   });
// });

describe('get Binary Data', () => {
  test('get Binary data', () => {
    const obj = accessorProperties();
    obj.number = 0;
    expect(obj.number).toBe('0');
    obj.number = 12;
    expect(obj.number).toBe('1100');
  });
});
