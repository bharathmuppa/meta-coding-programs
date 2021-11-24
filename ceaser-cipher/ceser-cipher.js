function rotationalCipher(input, rotationFactor) {
  // Write your code here
  if (!input || rotationFactor < 0 || rotationFactor > 1000000) {
    return "";
  }

  let capitalLetters = [...Array(26).keys()].map((n) => n + 65);
  let smallLetters = [...Array(26).keys()].map((n) => n + 97);
  let numerics = [...Array(10).keys()].map((n) => n + 48);

  return input
    .split("")
    .map((char) => {
      let asciiCode = char.charCodeAt();

      if (asciiCode >= 97 && asciiCode <= 122) {
        let newAsciiCode = smallLetters.indexOf(asciiCode) + rotationFactor;
        return String.fromCharCode(smallLetters[Math.round(newAsciiCode % 26)]);
      } else if (asciiCode >= 65 && asciiCode <= 90) {
        let newAsciiCode = capitalLetters.indexOf(asciiCode) + rotationFactor;
        return String.fromCharCode(
          capitalLetters[Math.round(newAsciiCode % 26)]
        );
      } else if (asciiCode >= 48 && asciiCode <= 57) {
        let newAsciiCode = numerics.indexOf(asciiCode) + rotationFactor;
        return String.fromCharCode(numerics[Math.round(newAsciiCode % 10)]);
      } else {
        return char;
      }
    })
    .join("");
}

console.log(rotationalCipher("bB_1c", 10));
console.log(rotationalCipher("bB_1c", 100));
console.log(rotationalCipher("bB_1c", 9));
console.log(rotationalCipher("bB_1cbB_1cbB_1cbB_1cbB_1c", 900));
