const longProcess = (sleepTime, processId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Process# ' + processId + ' compleated!');
      resolve();
    }, sleepTime);
  });
};

const main = async () => {
  console.log('Process# 1');

  console.log('Process# 2 is started...Downloading huge files!!');
  await longProcess(5000, 2);

  console.log('Process# 3 is started...Downloading huge files!!');
  await longProcess(3000, 3);

  console.log('Process# 4');
};

main();
