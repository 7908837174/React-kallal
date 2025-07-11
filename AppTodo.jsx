import {useState} from "react";

const ShoppingList = () =>{
    const [items, setItem] = useState([]);
    const[name, setName] = useState("");
    const[quantity , setQuntity] = useState("");

    const handleSubmit =(e) =>{
        e.preventDefault();
        if( !name || !quantity) return;

        const newItem ={
            name, 
            quantity:parseInt(quantity),
        } ;
        setItem((prevItems) => [ ...prevItems, newItem]);
        setName("");
        setQuntity("");
    };
}