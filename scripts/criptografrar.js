function encrypt(key, text) {
  let encrypted = "";
  for (
    let ciphredLetter = "", index = 0;
    encrypted.length < text.length;
    ciphredLetter =
      (text.charCodeAt(index) + key.charCodeAt(index % key.length)) % 256,
      encrypted = encrypted.concat(String.fromCharCode(ciphredLetter)),
      index++
  ) {}
  return encrypted;
}
