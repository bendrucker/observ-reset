'use strict'

module.exports = function observReset (observ, Constructor) {
  Constructor = Constructor || nullConstructor
  observ.set(Constructor()())
}

function nullConstructor () {
  return function nullValue () {
    return null
  }
}
