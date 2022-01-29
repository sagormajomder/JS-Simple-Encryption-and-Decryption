function printMsg() {
     let msg = document.querySelector('#text').value;
    let inputMsg_array = Array.from(msg);
    let outputmsg = document.querySelector('#demo');
    if (inputMsg_array.length != 0) { 
        // create ascii value for respective input msg
        let ascii_array = [];
        for(let i = 0; i < inputMsg_array.length; i++)    
        {    
            ascii_array[i] = inputMsg_array[i].charCodeAt(0);    
        } 
        // create small letters char array
        let atz_ascii_array = [];
        for(let i = 0,key = 97; i < 26; i++, key++)    
        {    
            atz_ascii_array[i] = String.fromCharCode(key);    
        }  
        // Create and give random index number for a to z character
         let index = randomIndexNumber(0, atz_ascii_array.length - 1);    
        let ascii_Index = atz_ascii_array[index].charCodeAt(0); 
        // create encrypted key
        let encryptMsg_array = [];
         for(let i = 0; i < inputMsg_array.length; i++)    
         {    
             encryptMsg_array[i] = parseInt(ascii_array[i]) + parseInt(ascii_Index);    
        } 

         encryptMsg_array[ascii_array.length] = ascii_Index;  


        outputmsg.innerHTML = "";
         for(let i = 0; i < encryptMsg_array.length; i++)    
        {    
             outputmsg.innerHTML = outputmsg.innerHTML + String.fromCharCode(encryptMsg_array[i]);       
        }
}
     else {
        alert("Error! Message Can't be Empty");
     }
}

function randomIndexNumber(min, max)    
{    
    return Math.floor(Math.random() * (max - min + 1) + min);    
}

