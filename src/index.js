//evento para cifrar boton de encriptado
('.btn-encrypt').click - >
shift = ('.shift-l').val() % 26
text = ('plaintext').val()
cipher = text.caesarShift shift('ciphertext').val cipher
return

//evento para boton desencriptado
('.btn-decrypt').click 
shift = ('.shift-r').val() % 26
text = ('ciphertext').val()
plaintext = text.caesarShift - shift('plaintext').val plaintext
return

('.shift-r').change - >
shift = ('.shift-r').val() % 26
text = ('ciphertext').val()
plaintext = text.caesarShift - shift
('plaintext').val plaintext
return

