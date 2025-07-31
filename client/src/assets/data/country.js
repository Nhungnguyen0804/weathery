export const cityDisplay = {
  Hanoi: "Hà Nội",
};

// dịch , format hiển thị
export const countryDisplay = {
  Vietnam: "Việt Nam",
};
export const listCountryArray = [
  "Việt Nam",
  "Hàn Quốc",
  "Nhật Bản",
  "Thái Lan",
  "Nga",
  "Pháp",
  "Ý",
];
// từ khóa tìm kiem
export const countrySearchKeywords = {
  Vietnam: ["vietnam", "việt nam", "việt", "vn", "viet"],

  Thailand: ["thailand", "thái lan", "thái", "thai"],
  Korea: ["hàn", "hàn quốc", "korea"],
  russia: ["russia", "nga"],
  japan: ["japan", "nhật", "nhật bản"],
  france: ["france", "pháp"],
  italy: ["italy", "ý"],
};

// tim keyword từ chuỗi input của user
export function findCountryKeyFromSearch(input) {
  const normalized = input.trim().toLowerCase();
  for (const [key, keywords] of Object.entries(countrySearchKeywords)) {
    if (keywords.some((keyword) => normalized.includes(keyword))) {
      return key;
    }
  }
  return undefined; // duyet hết k thấy thì undefined
}
