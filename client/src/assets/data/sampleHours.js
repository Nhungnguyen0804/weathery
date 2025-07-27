import { windDirect } from "./windDirect";
import { createRandom } from "./random/random";
// {[], [], []} [] la arrhour

function createSampleHour() {
  // lay random 1 key cua obj wind direct
  let resArr = [];
  const keys = Object.keys(windDirect);

  for (let i = 1; i <= 24; i++) {
    let obj = {};
    obj.temp_c = createRandom(15, 40);
    obj.precip_mm = createRandom(0, 10);
    obj.wind_degree = createRandom(0, 360);
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    obj.wind_dir = randomKey;

    resArr.push(obj);
  }

  return resArr;
}

let sampleHour1 = createSampleHour();
let sampleHour2 = createSampleHour();
let sampleHour3 = createSampleHour();
let sampleHour4 = createSampleHour();

export const sampleHours = [sampleHour1, sampleHour2, sampleHour3, sampleHour4];
