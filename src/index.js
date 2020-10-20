module.exports = function check(str, bracketsConfig) {
    let splittedStr = str.split('');
    for (let i = 0; i < splittedStr.length ; i++) {
      for (let j = 0; j < bracketsConfig.length; j++) {
        if ((splittedStr[i] === bracketsConfig[j][0]) && (splittedStr[i+1]=== bracketsConfig[j][1])) {
          splittedStr.splice(i, 2);
          i=-1;
        }
      }
    }
    return !splittedStr.length;
}
