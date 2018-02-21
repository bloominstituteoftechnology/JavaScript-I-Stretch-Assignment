const counter = () => {
    // Return a function that when invoked increments and returns a counter variable.
    // Example: const newCounter = counter();
    // newCounter(); // 1
    // newCounter(); // 2
    let count = 0;
    console.log('passed the initial point again');

    function inc_count() {
        console.log('this is count before the increase: ', count);
        count += 1;
        return count;
        //console.log(count);
    }
    inc_count();
    //return(count);
  };
  
const myCounter = counter();
console.log(myCounter);
console.log(myCounter);
console.log(myCounter);


/*const counter = () => {
    let count = 0;
     return () => {
       count++;
       return count;
     };
    };

newCounter = counter();
*/