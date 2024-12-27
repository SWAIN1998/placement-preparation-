function runProgram(input){
  let [n, lr] = input.trim().split('\n');
  let [l, r] = lr.split(' ').map(Number);
  console.log(countRejectedPermutations(+n, l, r));
}

function countRejectedPermutations(n, l, r) {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }
  let count = 0;
  findPermutations(arr, 0, n, l, r);
  return count;
  function findPermutations(arr, index, n, l, r) {
    if (index === n) {
      let sum = 0;
      for (let i = 0; i < n; i++) {
        sum += arr[i];
      }
      if (sum >= l && sum <= r) {
        count++;
      }
      return;
    }
    for (let i = index; i < n; i++) {
      [arr[index], arr[i]] = [arr[i], arr[index]];
      findPermutations(arr, index + 1, n, l, r);
      [arr[index], arr[i]] = [arr[i], arr[index]];
    }
  }
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
