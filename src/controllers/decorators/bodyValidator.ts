import 'reflect-metadata';
import { MetadataKeys } from './MetadataKeys';

function bodyValidator(...keys: string[]) {
  return function (target: any, key: string, des: PropertyDescriptor) {
    Reflect.defineMetadata(MetadataKeys.validator, keys, target, key);
  };
}
