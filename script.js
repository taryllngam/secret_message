const textArea = document.querySelector('#textArea')
const encode = document.querySelector('#encode')
const normal = document.querySelector('#normal')
const encodeMessageList = document.querySelector('#encodeMessageList')
const encodeMessageListchunks = document.querySelector('#encodeMessageListchunks')

const normalize = () => {
    const text = textArea.value
    const normalizedText = text.replace(/[^a-zA-Z]/g, "").toLowerCase();
    return console.log(normalizedText)
    determinelength(normalizedText)
}

const  determinelength = text => {
    let splitlenght = Math.sqrt(text.length);
    return console.log([Math.floor(splitlenght), Math.floor(splitlenght) + 1])
}

const chunks = (text, [rows, columns]) => {
    const chunks = []
    for (let i = 0; i <= text.length; i += columns){
        const val = text.slice(i, i + columns);
        chunks.push(val)
    }
}
encode.addEventListener('click', normalize)