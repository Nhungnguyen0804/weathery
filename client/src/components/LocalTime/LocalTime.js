export function getWeek(localtime) {
  const dateObj = new Date(localtime);
  const weekdays = [
    "Chủ Nhật",
    "Thứ Hai",
    "Thứ Ba",
    "Thứ Tư",
    "Thứ Năm",
    "Thứ Sáu",
    "Thứ Bảy",
  ];
  const week = weekdays[dateObj.getDay()];

  return { week };
}
