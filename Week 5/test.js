const item = [
    ["phone", "blue", "pixel"],
    ["computer", "silver", "lenovo"],
    ["phone", "gold", "iphone"],
  ],
  ruleKey = "type",
  ruleValue = "phone";

const countMatches = (item, ruleKey, ruleValue) => {
  for (let i = 0; i < item.length; i++) {
    for (let j = 0; j < item[i].length; j++) {
      if (item[i][j].includes(ruleValue)) {
        return item[i];
      }
    }
  }
};

console.log(countMatches(item, ruleKey, ruleValue));
