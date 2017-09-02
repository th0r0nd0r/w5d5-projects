class Clock {
  constructor() {
    // 1. Create a Date object.
    this.date = new Date();
    // 2. Store the hours, minutes, and seconds.
    this.hours = this.date.getHours();
    this.minutes = this.date.getMinutes();
    this.seconds = this.date.getSeconds();
    // 3. Call printTime.
    this.printTime();
    // 4. Schedule the tick at 1 second intervals.
    setTimeout(() => this._tick(), 1000);
  }

  printTime() {
    // Format the time in HH:MM:SS
    // Use console.log to print it.
    console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
  }

  _tick() {
    // 1. Increment the time by one second.
    // 2. Call printTime.
    this.seconds += 1;
    if (this.seconds >= 60) {
      this.seconds = 0 ;
      this.minutes += 1 ;
    }
    if (this.minutes >= 60) {
      this.minutes = 0 ;
      this.hours += 1 ;
    }
  }
}

// const clock = new Clock();
// clock.printTime();
// clock;

const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback) {
  // let completionCallback = completionCallback;
  if (numsLeft > 0) {
    reader.question("Pick a number bud", function(res) {
      console.log(`Your number was ${res}, chief`);
      sum += parseInt(res);
      addNumbers(sum, numsLeft - 1, completionCallback);
    });
  }
  if (numsLeft === 0) {
    completionCallback(sum);
    reader.close();
  }
}

// addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));


// Write this first.
function askIfGreaterThan(el1, el2, callback) {
  reader.question(`is ${el1} > ${el2}? \n`, function(res) {
    if (res === "yes") {
      callback(true) ;
    } else if (res === "no"){
      callback(false) ;
    } else if (el2 === undefined) {
      reader.close();
    }
  });
  // Prompt user to tell us whether el1 > el2; pass true back to the
  // callback if true; else false.
}

// askIfGreaterThan(1,2,(val)=>console.log(val));

// Once you're done testing askIfGreaterThan with dummy arguments, write this.
function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
  // Do an "async loop":
  // 1. If (i == arr.length - 1), call outerBubbleSortLoop, letting it
  //    know whether any swap was made.
  // 2. Else, use `askIfGreaterThan` to compare `arr[i]` and `arr[i +
  //    1]`. Swap if necessary. Call `innerBubbleSortLoop` again to
  //    continue the inner loop. You'll want to increment i for the
  //    next call, and possibly switch madeAnySwaps if you did swap.
  if (i === (arr.length - 1)) {
    outerBubbleSortLoop(madeAnySwaps);
    return;
  }
  askIfGreaterThan(arr[i], arr[i + 1], (res) => {
    let swaps = false;
    if (res === true) {
      swaps = true;
      [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
      innerBubbleSortLoop(arr, i + 1, swaps, outerBubbleSortLoop );
    } else {
      innerBubbleSortLoop(arr, i + 1, swaps, outerBubbleSortLoop );
    }
  });
}

// innerBubbleSortLoop([1,4,5,3], 0, false, "inside the matrix");
// Once you're done testing innerBubbleSortLoop, write outerBubbleSortLoop.
// Once you're done testing outerBubbleSortLoop, write absurdBubbleSort.

function absurdBubbleSort(arr, sortCompletionCallback) {
  function outerBubbleSortLoop(madeAnySwaps) {
    // Begin an inner loop if you made any swaps. Otherwise, call
    // `sortCompletionCallback`.
    if (madeAnySwaps === true) {
      innerBubbleSortLoop(arr, 0, madeAnySwaps, outerBubbleSortLoop);
    } else {
      sortCompletionCallback(arr);
    }
  }
  outerBubbleSortLoop(true) ;
  // Kick the first outer loop off, starting `madeAnySwaps` as true.
}

// absurdBubbleSort([3, 2, 1], function (arr) {
//   console.log("Sorted array: " + JSON.stringify(arr));
//   reader.close();
// });

Function.prototype.myBind = function (context) {
  return () => {
    this.apply(context);
  };
};


class Lamp {
  constructor() {
    this.name = "a lamp";
  }
}

const turnOn = function() {
   console.log("Turning on " + this.name);
};

const lamp = new Lamp();

turnOn(); // should not work the way we want it to

// const boundTurnOn = turnOn.bind(lamp);
// const myBoundTurnOn = turnOn.myBind(lamp);
//
// boundTurnOn(); // should say "Turning on a lamp"
// myBoundTurnOn(); // should say "Turning on a lamp"

Function.prototype.myBind = function (ctx, ...bindArgs) {
  // console.log(bindArgs);
  return (...callArgs) => {
    return this.apply(ctx, bindArgs.concat(callArgs));
  };
};
const kjh = curie.meow.myBind(curie, 2)
jkh(3)
///////////

class Cat {
  constructor(name) {
    this.name = name;
  }

  meow() {
    console.log(`${this.name} says meow!`);
  }
}

const curie = new Cat("Curie");
setTimeout(curie.meow, 1000);
setTimeout(curie.meow.myBind(curie), 1000);
// curie.meow();
