const msg = 'CuiDaDo MenSAGEM SECreta';
const aplyingCaesarCipher = encodeMsg(msg);
const removingCipher = dencodeMsg(aplyingCaesarCipher);

console.log(`mensagem modificada: ${aplyingCaesarCipher}`);

console.log(`mensagem Original: ${removingCipher}`);

function encodeMsg(password){
    const arrayOfEncrypt = [];
    for(let i =0; i<password.length; i++){
        if(password.charCodeAt(i) ===32){
            arrayOfEncrypt.push(36)
        }
        else if(password.charCodeAt(i) < 97) {
            let a = ((password.charCodeAt(i) -65 +2) %26 ) +65;
            arrayOfEncrypt.push(a);
        }
        else if(password.charCodeAt(i) > 96 && password.charCodeAt(i) <= 122){
            let a = ((password.charCodeAt(i) -97 +2) %26 ) +97;
            arrayOfEncrypt.push(a);
        }
    }    
    let str = new TextDecoder().decode(Uint8Array.from(arrayOfEncrypt));
    return str;
}

function dencodeMsg(newPassword){
    const arrayOfEncrypt = [];
    for(let i =0; i <newPassword.length; i++){
        if(newPassword.charCodeAt(i) ===36){
            arrayOfEncrypt.push(32)
        }

        else if(newPassword.charCodeAt(i) < 97){
            let a = ((newPassword.charCodeAt(i) -65 -2) %26) +65;
            arrayOfEncrypt.push(a);
        }
        else if(newPassword.charCodeAt(i) > 96 && newPassword.charCodeAt(i) <= 122){
            let a = ((newPassword.charCodeAt(i) -97 -2) %26) +97;
            arrayOfEncrypt.push(a);
        }        
    }    
    let str = new TextDecoder().decode(Uint8Array.from(arrayOfEncrypt));
    return str;
}
