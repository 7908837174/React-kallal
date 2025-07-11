import { useState , useEffect } from "react";

const  useFetch = (url) =>{
    const[data , setData] = useState(null);
    useEffect(() =>{
        fetch(url)
        .then((res) => res.json())
        .then((data) => setData(data));
    }, []);
    return [data];
};

const App = () =>{
    const [data] = useFetch("https://app.outlier.ai/projects");
    return (
        <div>
            {data && data.map((item) =>{
                return <p key={item.id} > {item.title}</p>
            })}
        </div>
    )
}

export default useFetch;