const app = "I don't do much."

function destructivelyAppendKitten(name) {
  return kittens.push(name)
}

function destructivelyRemoveLastKitten(name) {
  return kittens.pop(name)
}

function destructivelyPrependKitten(name) {
  return kittens.unshift(name)
}

function destructivelyRemoveFirstKitten(name) {
  return kittens.shift(name)
}

function appendKitten(name) {
  return [...kittens, name]
}

function prependKitten(name) {
  return [name,...kittens]
}

function removeLastKitten() {
  var kittens = kittens.slice(-1)
  return removeLastKitten()
}
()
