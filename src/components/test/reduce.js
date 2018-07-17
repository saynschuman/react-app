export function reduce() {
  const arr = [
    {
      id: 'asdasd',
    },
    {
      id: 'sdffds',
    },
    {
      id: 'asdawefwefsd',
    },
  ]

  var obj = arr.reduce(function(acc, cur) {
    acc[cur.id] = cur
    return acc
  }, {})

  console.log(obj)
}
