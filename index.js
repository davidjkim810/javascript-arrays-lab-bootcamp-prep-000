const app = "I don't do much."

function destructivelyAppendKitten(name) {
  name.push("kitten")
  return destructivelyAppendKitten(kittens)
}
