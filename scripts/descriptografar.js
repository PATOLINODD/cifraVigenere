function decrypt(key, text) {
  let decrypted = "";
  for (
    let ciphredLetter = "", index = 0;
    decrypted.length < text.length;
    ciphredLetter =
      (text.charCodeAt(index) - key.charCodeAt(index % key.length) + 256) % 256,
      decrypted = decrypted.concat(String.fromCharCode(ciphredLetter)),
      index++
  ) {}
  return decrypted;
}
