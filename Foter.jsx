const App = () =>{
    const number= [1,23,4,5,6,7,8];
    return(
        <main>
            {numbers.map((number) =>(
                <ul key={Math.random()}>
                   <li>{number}</li>
                </ul>
            ))}
        </main>
    );
};


// <div key={user.id}></div>