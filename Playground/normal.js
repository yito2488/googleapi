const longProcess = (sleepTime, processId) => {
  setTimeout(() => {
    console.log('Process# ' + processId + ' compleated!');
  }, sleepTime);
};

console.log('Process# 1');

console.log('Process# 2 is started...Downloading huge files!!');
longProcess(5000, 2);

console.log('Process# 3 is started...Downloading huge files!!');
longProcess(3000, 3);

console.log('Process# 4');
