import dayjs from "dayjs";
import weatherType from "../weatherType";

export function randomFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function maxInArray(arr) {
  return Math.max(...arr);
}
export function minInArray(arr) {
  return Math.min(...arr);
}
export function createRandom(a, b) {
  return (Math.random() * (b - a) + a).toFixed(1);
}
export function createRandomArray(
  inputArr,
  date,
  arrMaxTemp,
  arrMinTemp,
  type
) {
  let numberDay;
  type === 5 ? (numberDay = 2) : (numberDay = 4);
  let MaxTemp_max = maxInArray(arrMaxTemp);
  let MaxTemp_min = minInArray(arrMaxTemp);
  let MinTemp_max = maxInArray(arrMinTemp);
  let MinTemp_min = minInArray(arrMinTemp);
  // date = "2025-07-25"
  for (let i = 1; i <= numberDay; i++) {
    let Obj = {};
    Obj.date = dayjs(date).add(i, "day").format("YYYY-MM-DD");
    Obj.maxTempC = createRandom(MaxTemp_min, MaxTemp_max);
    Obj.minTempC = createRandom(MinTemp_min, MinTemp_max);
    Obj.code = randomFromArray(weatherType.all);
    inputArr.push(Obj);
  }
}
