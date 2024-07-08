export function encrypt(input, key = 42) {
  let encrypted = "";

  for (let i = 0; i < input.length; i++) {
    const charCode = input.charCodeAt(i);
    const xorResult = charCode ^ key;
    encrypted += String.fromCharCode((xorResult % 94) + 33);
  }

  return encrypted;
}
