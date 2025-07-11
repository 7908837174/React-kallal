import { useState } from "react"

const SopingList = () =>{
    const [name, setName] = useState("")
    const [quantity , setQuntity] = useState("")

    return <div>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Item Name" value={name} onChange={e =>setName(e.target.value)} />
        </form>
    </div>
}

