import weatherType from "../../assets/weatherType";

function addToMapObj(arr, label, resObj) {
  arr.forEach((code) => {
    resObj[code] = label;
  });
}

function getType(code) {
  let typeMapObj = {};

  addToMapObj(weatherType.troiTrong, "troiTrong", typeMapObj);
  addToMapObj(weatherType.dong, "dong", typeMapObj);
  addToMapObj(weatherType.mua, "mua", typeMapObj);
  addToMapObj(weatherType.muaNang, "muaNang", typeMapObj);
  addToMapObj(weatherType.muaTuyet, "muaTuyet", typeMapObj);
  addToMapObj(weatherType.suong, "suong", typeMapObj);
  addToMapObj(weatherType.mayIt, "mayIt", typeMapObj);
  addToMapObj(weatherType.mayNhieu, "mayNhieu", typeMapObj);

  return typeMapObj[code] || "Không xác định";
}
function getWeatherType(code, isDay) {
  let codeType = getType(code);

  //---------------------------------
  // isDay = 1;
  // codeType = "troiTrong"; //ok
  // codeType = "dong"; //ok
  // codeType = "mua"; //ok
  // codeType = "muaNang"; //ok
  // codeType = "muaTuyet"; //ok
  // codeType = "suong"; //ok
  // codeType = "mayIt"; //ok
  // codeType = "mayNhieu"; //ok
  let nameComponent = `${codeType}Day`;
  isDay
    ? (nameComponent = `${codeType}Day`)
    : (nameComponent = `${codeType}Night`); // troiTrongNight

  // let resObj = { icon: require(`./iconCard/${nameFile}`) };
  // return resObj;

  return nameComponent; //string
}

export default getWeatherType;
