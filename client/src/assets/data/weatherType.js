const dong = [1087, 1273, 1276];
const mua = [
  1063, 1072, 1150, 1153, 1168, 1171, 1180, 1183, 1189, 1192, 1195, 1198, 1201,
  1237, 1240, 1243, 1246, 1261, 1264,
];
// lúc mưa lúc nắng/trăng
const muaNang = [1186];

const mayIt = [1003];
const mayNhieu = [1006, 1009];

const weatherType = {
  troiTrong: [1000], // dông = mây + mưa + sét

  // mưa tuyết = mây + tuyết
  muaTuyet: [
    1069, 1204, 1207, 1249, 1252, 1066, 1114, 1117, 1210, 1213, 1216, 1219,
    1222, 1225, 1255, 1258, 1279, 1282,
  ],
  suong: [1030, 1135, 1147],
  dong,
  mua,
  muaNang,
  mayIt,
  mayNhieu,
  // allMay: [...mayIt, ...mayNhieu],
  // allMua: [...dong, ...mua, ...muaNang],
};
export default weatherType;
