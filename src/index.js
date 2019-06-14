  //llamado botones
let codificar = document.getElementById ("btn-encrypt");
let decodificar = document.getElementById ("btn-decrypt");

//evento botones
codificar .addEventListener ("click", () => {
    let m = document.getElementById ("plaintext").value;
    let offset = parseInt (document.getElementById ("shift-l") .value);
    let codificanda = window.cipher.encode (offset,m);
    document.getElementById ("ciphertext").innerHTML = codificanda;
    document.getElementById ("plainttext").value = "";

});

decodificar .addEventListener ("click", () => {
    let m = document.getElementById ("ciphertext").value;
    let offset = parseInt (document.getElementById ("shift-r") .value);
    let decodificanda = window.cipher.decode (offset,m);
    document.getElementById ("ciphertext").innerHTML = decodificanda;
    
});   




