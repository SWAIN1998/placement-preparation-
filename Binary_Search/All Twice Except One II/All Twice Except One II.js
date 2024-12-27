function runProgram(input) {
  let lines = input.trim().split('\n');
  let t = parseInt(lines[0]);
  let currentLine = 1;
  
  for(let i = 0; i < t; i++) {
      let n = parseInt(lines[currentLine]);
      let arr = lines[currentLine + 1].trim().split(' ').map(Number);
      currentLine += 2;
  }
}

function findTwice(arr, n) {
  let result = 0;
  for(let i = 0; i < arr.length; i++) {
      result ^= arr[i];
  }
  return result;
}

if (process.env.USER === "") {
  runProgram(``);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
      read += input;
  });
  process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
  });
  process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0);
  });
}