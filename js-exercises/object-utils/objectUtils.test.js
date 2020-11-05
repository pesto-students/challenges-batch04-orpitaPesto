import {
  map, filter, invert, merge, all, some,
} from './objectUtils';

// write your own test cases

describe('map: tranforms as per the callback function', () => {
  it('should return an object', () => {
    const marks = {
      vikas: 50,
      orpita: 30,
      priya: 4,
    };
    const percentage = map(marks, ([key, value]) => [key, (value / 50) * 100]);
    expect(typeof percentage).toBe('object');
    expect(percentage).not.toBe(null);
    expect({
      vikas: 100,
      orpita: 60,
      priya: 8,
    });
  });
});

describe('filter: filters as per the callback function', () => {
  it('should filter through the object', () => {
    const marks = {
      vikas: 50,
      orpita: 30,
      priya: 4,
    };
    const passedStudents = filter(marks, ([key, value]) => {
      if ((value / 50) * 100 > 30) {
        return [key && (value / 50) * 100 > 30];
      }
    });
    expect(typeof passedStudents).toBe('object');
    expect(passedStudents).not.toBe(null);
    expect({
      vikas: 50,
      orpita: 60,
    });
  });
});

describe('invert: inverts key value pair', () => {
  it('should invert', () => {
    const marks = {
      vikas: 50,
      orpita: 30,
      priya: 4,
    };
    const invertedMarks = invert(marks);
    expect(typeof invertedMarks).toBe('object');
    expect(invertedMarks).not.toBe(null);
    expect({
      50: 'vikas',
      60: 'orpita',
      4: 'priya',
    });
  });
});

describe('Merge: Merges objects', () => {
  it('should merge given objects', () => {
    const marks = {
      vikas: 50,
      orpita: 30,
      priya: 4,
    };
    const marks2 = {
      shaurya: 50,
      amit: 30,
      priya: 55,
    };
    const mergedMarks = merge(marks, marks2);
    expect(mergedMarks).not.toBe(null);
    expect({
      vikas: 50, orpita: 30, priya: 55, shaurya: 50, amit: 30,
    });
  });
});

describe('all: iterates over elements to satisfy given condition', () => {
  it('should return valid boolean condition', () => {
    const marks = {
      vikas: 50,
      orpita: 30,
      priya: 40,
    };
    const allPassedStudents = all(marks, ([key, value]) => value > 25);

    expect(allPassedStudents).toBeTruthy();
  });
});

describe('some: iterates over elements to satisfy given condition', () => {
  it('should return valid boolean condition', () => {
    const marks = {
      vikas: 50,
      orpita: 30,
      priya: 40,
    };
    const allPassedStudents = some(marks, ([key, value]) => value > 35);

    expect(allPassedStudents).toBeTruthy();
  });
});
