function timeoutPromiseResolve(interval) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve("successful");
    }, interval);
  });
};

function timeoutPromiseReject(interval) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      reject("error");
    }, interval);
  });
};

function timeTest() {
  let a = [timeoutPromiseResolve(5000),
  timeoutPromiseReject(2000),
  timeoutPromiseResolve(1000)];
  return Promise.race(a);
}

let startTime = Date.now();
timeTest().then((e) => { console.log(e); }).catch(e => {
  console.log(e);
  let finishTime = Date.now();
  let timeTaken = finishTime - startTime;
  alert("Time taken in milliseconds: " + timeTaken);
})
