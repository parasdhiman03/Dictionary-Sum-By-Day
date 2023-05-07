describe('solution', () => {
  it('should return the correct output for the given input', () => {
    const D = {
      '2020-01-01': 4,
      '2020-01-02': 4,
      '2020-01-05': 5,
      '2020-01-06': 2,
      '2020-01-07': 1
    };
    const expectedOutput = {
      'Sun': 5,
      'Mon': 4,
      'Tue': 4,
      'Wed': 4,
      'Thu': 3,
      'Fri': 3,
      'Sat': 3
    };
    expect(solution(D)).toEqual(expectedOutput);
  });

  it('should handle edge cases', () => {
    const D = {
      '1970-01-01': 1,
      '2100-01-01': 1
    };
    const expectedOutput = {
      'Sun': 1,
      'Mon': 1,
      'Tue': 1,
      'Wed': 1,
      'Thu': 1,
      'Fri': 1,
      'Sat': 1
    };
    expect(solution(D)).toEqual(expectedOutput);
  });
});
