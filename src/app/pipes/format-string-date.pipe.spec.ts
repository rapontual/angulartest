import { FormatStringDatePipe } from './format-string-date.pipe';

describe('FormatStringDatePipe', () => {
  const pipe = new FormatStringDatePipe();
  
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('empty input should return empty', () => {
    expect(pipe.transform('')).toBe('');
  });

  it('invalid input should return empty', () => {
    expect(pipe.transform('abcde')).toBe('');
  });

  it('invalid date should return empty', () => {
    expect(pipe.transform('2024-05-40')).toBe('');
  });


  it('valid input should return formated date', () => {
    const input = '2024-02-28';
    const expected = new Date(input).toLocaleDateString();
    expect(pipe.transform(input)).toBe(expected);
  });
});
