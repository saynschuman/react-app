export default function arrToMap(array) {
  return array.reduce(function(acc, cur) {
    acc[cur.id] = cur
    return acc
  }, {})
}
