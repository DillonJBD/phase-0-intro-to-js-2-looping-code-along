
function writeCards(names, event){
    
    let messages = [];
    for(let i = 0; i < names.length ; i++){
        let message = `Thank you, ${names[i]}, for the wonderful surprise gift!`;
        messages.push(message);
        

    }
    return messages;
    
}

function countDown(countdownNum){
    while(countdownNum >= 0){
        console.log(countdownNum);
        countdownNum--;
        
    }
}
