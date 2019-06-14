window.cipher = {
   //función cifrado
  encode: (offset,m) => {
   let result = ""; 

     for (let i = 0; i < m.length; i++) {
      let letter = m.charCodeAt (i);
      if (letter >= 65 && letter <= 90) {
      result += String.fromCharCode(((letter -65 + offset) % 26) + 65);
      } else if (letter >= 97 && letter <= 122){  
      result += String.fromCharCode(((letter - 97 + offset) %26) +97);

      } else{ result += String.fromCharCode ( letter);

      }

     //fórmula de conversión mayúsculas
     
     

     //fórmula minúsculas
     
     
    }
    return result;
  },

  decode: (offset,m) => {
    let result = ""; 
 
      for (let i = 0; i < m.length; i++) {
      let letter = m.charCodeAt (i);
       if (letter >= 65 && letter <= 90) {
       result += String.fromCharCode(((letter + 65 - offset) % 26) + 65);
       } else if (letter >= 97 && letter <= 122){  
       result += String.fromCharCode(((letter - 122 - offset) %26) +122);
 
       } else{ result += String.fromCharCode ( letter);
       }
       }

       return result;

      }

};
