window.cipher = {
  //formula encriptado cesar  
  String: caesarShift = (shift) - >
  result = ''
i = 0
while i < length
c = charCodeAt i
if c >= 65 and c <= 90
result += charsUP[(c - 65 + shift) % 26]
else if c >= 97 and c <= 122
result += charsDN[(c - 97 + shift) % 26]
else
  result += charAt i;
i++
result

// ... 

