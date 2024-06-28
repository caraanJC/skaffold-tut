const randomizeArray = (arr) => arr.map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)

const getNaturalNumbers = (start, end) => Array(end).fill(start).map((n, i) => (n + i).toString())

module.exports = {
    randomizeArray,
    getNaturalNumbers
}