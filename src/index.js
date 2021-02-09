

exports.min = function min (array) {
  if(!array || array.length==0) return 0;

  let minVal = 99999999;
  for(let i = 0; i<array.length; ++i){
    if(array[i]<minVal) minVal=array[i];
  }
  return minVal;
}

exports.max = function max (array) {
  if(!array || array.length==0) return 0;

  let maxVal = 0;
  for(let i = 0; i<array.length; ++i){
    if(array[i]>maxVal) maxVal=array[i];
  }
  return maxVal;
}

exports.avg = function avg (array) {
  if(!array || array.length==0) return 0;

  let sumVal = 0;
  for(let i = 0; i<array.length; ++i){
    sumVal+=array[i];
  }
  return sumVal/array.length;
}

