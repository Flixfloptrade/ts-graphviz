import type { AttributeKey, AttributesGroupModel } from '@ts-graphviz/common';
import { AttributesBase } from './AttributesBase.js';

/**
 * A set of attribute values for any object.
 * @public
 */
export class AttributesGroup<T extends AttributeKey = AttributeKey>
  extends AttributesBase<T>
  implements AttributesGroupModel<T>
{
  public comment?: string;
}
