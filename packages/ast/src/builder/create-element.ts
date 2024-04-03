import { Builder } from './builder.js';
import type { CreateElement } from './types.js';
/**
 * Create an {@link ASTNode} of the specified type
 *
 * @param type - Type of the {@link ASTNode}
 * @param props - Properties of the {@link ASTNode}
 * @param children - Children of the {@link ASTNode}
 * @returns An {@link ASTNode}
 * @public
 */
export const createElement: CreateElement =
  Builder.prototype.createElement.bind(new Builder());
