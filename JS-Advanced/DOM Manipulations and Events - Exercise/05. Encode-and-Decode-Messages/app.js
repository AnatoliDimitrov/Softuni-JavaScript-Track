function encodeAndDecodeMessages() {
    let messageElement = document.querySelector('#main textarea');
    let encodeAndSendBtnElement = document.querySelector('#main button');
    let receivedMessageElement = document.querySelector('#main div:nth-child(2) textarea');
    let decodeAndSendBtnElement = document.querySelector('#main div:nth-child(2) button');
    
    encodeAndSendBtnElement.addEventListener('click', function () {
        
        let encoded = encode(messageElement.value);
        receivedMessageElement.value = encoded;
        messageElement.value = '';
    })

    decodeAndSendBtnElement.addEventListener('click', function () {
        
        let decoded = decode(receivedMessageElement.value);
        receivedMessageElement.value = decoded;
    })

    function encode(message) {
        let result = '';

        for (let i = 0; i < message.length; i++) {
            let element = message.charCodeAt(i);
            result += String.fromCharCode(element + 1);
        }

        return result;
    }

    function decode(message) {
        let result = '';

        for (let i = 0; i < message.length; i++) {
            let element = message.charCodeAt(i);
            result += String.fromCharCode(element - 1);
        }

        return result;
    }
}