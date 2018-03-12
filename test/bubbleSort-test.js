assert = require('chai').assert;
bubbleSort = require('../lib/bubbleSort');

describe('bubble sort', function() {
  it('can sort numbers', function(){
    assert.deepEqual(bubbleSort([3,2,4,5,3,2,1]), [1,2,2,3,3,4,5])
  })

  it('can sort floats', function(){
    assert.deepEqual(bubbleSort([3.2,5.0,3.4,6.2,7.9]), [3.2, 3.4, 5.0, 6.2, 7.9])
  })

  it('can sort strings', function(){
    assert.deepEqual(bubbleSort(["b", "g", "a", "c"]), ["a", "b", "c", "g"])
  })
})
