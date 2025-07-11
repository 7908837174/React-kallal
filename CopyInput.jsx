import { useState } from "react"

const coopyInput = () =>{
    const [inputValue , setInputValue] = useState(" ")
    const [copide , setCopide] = useState(false);

    const handleCopy = () =>{
        navigator.clipboard.writeText(inputValue).then(() =>{
          setCopide(true);
          setTimeout(() => setCopide(false), 2000);
        });
    };

    return <dib>
        <input type="text" value={inputValue} onChange={e=> setInputValue(e.target.value)} />
        <button onClick={handleCopy}>Copy</button>
    </dib>
}