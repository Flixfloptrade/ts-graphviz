import type { ASTNode, AttributeASTNode } from '../../../types.js';
import type { PrintPlugin } from '../types.js';

export const AttributePrintPlugin: PrintPlugin<AttributeASTNode> = {
  match(ast: ASTNode) {
    return ast.type === 'Attribute';
  },
  print(context, ast): string {
    return `${context.print(ast.key)} = ${context.print(ast.value)};`;
  },
};
