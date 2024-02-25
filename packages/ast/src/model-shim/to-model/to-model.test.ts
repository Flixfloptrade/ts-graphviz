import '@ts-graphviz/core/register-default';
import { expect, test } from 'vitest';
import { createElement } from '../../builder/create-element.js';
import { toModel } from './to-model.js';

test('brank ast throw error', () => {
  const ast = createElement('Dot', {}, []);

  expect(() => toModel(ast)).toThrow();
});

test('comment', () => {
  const ast = createElement('Dot', {}, [
    createElement(
      'Comment',
      {
        kind: 'Macro',
        value: 'This is comment',
      },
      [],
    ),
    createElement(
      'Graph',
      {
        strict: false,
        directed: true,
      },
      [],
    ),
  ]);
  const model = toModel(ast);
  expect(model.comment).toStrictEqual('This is comment');
});
