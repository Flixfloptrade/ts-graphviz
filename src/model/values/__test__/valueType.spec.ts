import { LblStringValue } from '../valueType';

const DoubleQuotedValuePattern = /^".+"$/ms;
const HTMLLikeValuePattern = /^<.+>$/ms;

describe('valueType', () => {
  describe('LblStringValue', () => {
    describe('plain string', () => {
      test.each([
        ['test'],
        [
          `
          test
          `,
        ],
      ])('toDot result should be quoted', input => {
        const value = new LblStringValue(input);
        const dot = value.toDot();
        expect(dot).toMatch(DoubleQuotedValuePattern);
        expect(dot).not.toMatch(HTMLLikeValuePattern);
      });
    });

    describe('HTML Like string', () => {
      test.each([
        ['<<B>hoge</B>>'],
        [
          `<
          <U>hoge</U>
          >`,
        ],
        [
          `
          <<I>hoge</I>
          >
          `,
        ],
      ])('toDot result should not be quoted', input => {
        const value = new LblStringValue(input);
        const dot = value.toDot();
        expect(dot).not.toMatch(DoubleQuotedValuePattern);
        expect(dot).toMatch(HTMLLikeValuePattern);
      });
    });
  });
});
