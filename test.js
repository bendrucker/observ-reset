'use strict'

var test = require('tape')
var Observ = require('observ')
var reset = require('./')

test(function (t) {
  var observ = Observ('foo')
  reset(observ)
  t.equal(observ(), null)

  observ.set(123)
  reset(observ, Constructor)
  t.equal(observ(), 'bar')

  t.end()

  function Constructor () {
    return function observable () {
      return 'bar'
    }
  }
})
