import { Map } from 'immutable'

export function arrToMap(array, DataRecord = Map) {
  return array.reduce((acc, item) => acc.set(item.id, DataRecord(item)), new Map({}))
}

export function mapToArr(object) {
  return object.valueSeq().toArray()
}
