const topKFrequent = (nums, k) => {
  const map = new Map()
  for(const num of nums) {
    map.set(num, (map.get(num) || 0) + 1)
  }
  const sorted = Array.from(map.entries()).sort((a, b) => b[1] - a[1])

  return sorted.slice(0, k).map(pair => pair[0])
}

const paramNums = [1,2,2,3,3,3]
console.log(topKFrequent(paramNums, 2))
