// Encrypted text
const encryptor = (text) => {
    const regex = /^[a-z ,.;!?]+$/
    let encryptedText = "";
    if (regex.test(text)) {
        for (let i = 0; i < text.length; i++) {
            switch (text[i]) {
                case "a":
                    encryptedText += "ai"
                    break;
                case "e":
                    encryptedText += "enter"
                    break;
                case "i":
                    encryptedText += "imes"
                    break;
                case "o":
                    encryptedText += "ober"
                    break;
                case "u":
                    encryptedText += "ufat"
                    break;
                default:
                    encryptedText += text[i]            }
        }

    } else {
        alert("Insira apenas letras minúsculas e sem acento!")

    }
    return encryptedText;
}

// Descrypted text
const descryptor = (text) => {
    const regex = /^[a-z ,.;!?]+$/
    let descryptedText = "";
    if (regex.test(text)) {
        for (let i = 0; i < text.length; i++) {
            switch (text[i]) {
                case "a":
                    descryptedText += "a"
                    i += 1
                    break;
                case "e":
                    descryptedText += "e"
                    i += 4
                    break;
                case "i":
                    descryptedText += "i"
                    i += 3
                    break;
                case "o":
                    descryptedText += "o"
                    i += 3
                    break;
                case "u":
                    descryptedText += "u"
                    i += 3
                    break;
                default:
                    descryptedText += text[i]
            }
        }

    } else {
        alert("Insira apenas letras minúsculas e sem acento!")

    }
    return descryptedText;
}

// Sends the text to be encrypted and calls the displayText() function
const encryptText = () => {
    let text = document.getElementById("text-input").value
    text = encryptor(text)
    displayText(text)
    showOrHide()
}

// Sends the text to be decrypted and calls the displayText() function
const descryptText = () => {
    let textEncrypted = document.getElementById("text-input").value
    textEncrypted = descryptor(textEncrypted)
    displayText(textEncrypted)
    showOrHide()
    
}

// Display the encrypted/decrypted text in the textarea
const displayText = (text) => {
    const showText = document.getElementById("text-encrypted-or-descrypted")
    showText.value = text
}

// Show or hide the textarea
const showOrHide = () => {
    const textEncryptedOrDescrypted = document.getElementById("text-encrypted-or-descrypted").value;
    const nothing = document.querySelector("#nothing-here");
    const copyAndButton = document.querySelector(".text-and-copy");
    if (textEncryptedOrDescrypted.trim() === "") {
        nothing.style.display = "flex";
        copyAndButton.style.display = "none";
    } else {
        nothing.style.display = "none";
        copyAndButton.style.display = "flex";
    }
};


// Copy the text in the textarea
const copy = () => {
    const textArea = document.getElementById("text-encrypted-or-descrypted");
    const textToCopy = textArea.value;

    navigator.clipboard.writeText(textToCopy)
        .then(() => {
            console.log("Texto copiado!");
        })
        .catch(err => {
            console.error("Erro ao copiar texto: ", err);
        });
};
