import { Map, OrderedMap } from 'immutable'

export function arrToMap(array, DataRecord = Map) {
  return array.reduce((acc, item) => acc.set(item.id, DataRecord(item)), new OrderedMap({}))
}

export function mapToArr(object) {
  return object.valueSeq().toArray()
}
