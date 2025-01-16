function testNum(a){
  let result;
  if(a >0){
    result = 'số dương';
  }else{
    result = 'không phải số dương';
  }
  return result;
}
console.log(testNum(-5));
