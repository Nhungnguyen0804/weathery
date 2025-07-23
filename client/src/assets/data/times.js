function createTime(arr) {
  for (let i = 0; i < 24; i++) {
    i < 10 ? arr.push(`0${i}:00`) : arr.push(`${i}:00`);
  }
}

const times = [];
createTime(times);

export default times;
