function sort(arr){
    let sorted=arr.sort();
    console.log(sorted);
  }
  sort([2,12]);

  function sum(n){
    if(n<=1){
    console.log(n);
    }
    console.log(n + sum(n-1));
  }
  sum(2)

  let y=new RegExp('hi');
  let sample='hi John';
  console.log(y.test(sample));