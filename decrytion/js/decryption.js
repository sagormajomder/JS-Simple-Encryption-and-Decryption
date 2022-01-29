function printMsg() {
    let msg = document.querySelector('#text').value;
    let inputMsg_array = Array.from(msg);
    let outputmsg = document.querySelector('#demo');

    if (inputMsg_array.length != 0) {
        let key = inputMsg_array[inputMsg_array.length - 1];
        let decryptedMsg_array = [];
        for (let i = 0; i < inputMsg_array.length - 1; i++) {
            decryptedMsg_array[i] = inputMsg_array[i].charCodeAt(0) - key.charCodeAt(0);
        }
        outputmsg.innerHTML = "";
        for (i = 0; i < decryptedMsg_array.length; i++) {
            outputmsg.innerHTML = outputmsg.innerHTML + String.fromCharCode(decryptedMsg_array[i]);
        }
    }
    else {
        alert("Error! Message Can't be Empty");
    }   
}