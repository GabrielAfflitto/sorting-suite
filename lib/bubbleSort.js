function bubbleSort(a){
  var b = a.length
  var swapped;
  do{
    swapped = false;
    for(var i = 0; i < b-1; i++){
      if(a[i] > a[i+1]){
        var temp = a[i];
        a[i] = a[i + 1];
        a[i+1] = temp;
        swapped = true;
      }
    }
  } while(swapped);
  return a;
};

console.log(bubbleSort([4,5,7,6,3,1,2]));
