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
