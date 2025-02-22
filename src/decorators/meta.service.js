import 'reflect-metadata';
import { ELEMENT_META_KEY } from '../constants';
import { ElementMetadata } from '../element.metadata';

export function getMeta(target) {
  return Reflect.getMetadata(ELEMENT_META_KEY, target) || new ElementMetadata();
}

export function setMeta(target, meta) {
  Reflect.defineMetadata(ELEMENT_META_KEY, meta, target);
}

export function addBinding(target, property, binding) {
  const meta = getMeta(target.constructor),
    { bindings } = metadata;

  !bindings.has(property) && bindings.set(property, new Set());
  bindings.get(property).add(binding);
  setMeta(meta);
}
