const solution = require('./properNounCorrection.js');

test('test 1', () => {
    expect(solution('pARiS')).toBe('Paris');
});

test('test 2', () => {
    expect(solution('John')).toBe('John');
});

test('test 3', () => {
    expect(solution('mary')).toBe('Mary');
});

test('test 4', () => {
    expect(solution('a')).toBe('A');
});

test('test 5', () => {
    expect(solution('B')).toBe('B');
});

test('test 6', () => {
    expect(solution('yFZMlGvUQP')).toBe('Yfzmlgvuqp');
});

test('test 7', () => {
    expect(solution('HQQrrDxuqe')).toBe('Hqqrrdxuqe');
});

test('test 8', () => {
    expect(solution('atDh')).toBe('Atdh');
});

test('test 9', () => {
    expect(solution('pJHSYVAZB')).toBe('Pjhsyvazb');
});

test('test 10', () => {
    expect(solution('dKrqO')).toBe('Dkrqo');
});
