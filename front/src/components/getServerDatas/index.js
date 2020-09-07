export default 
{
    getAllNotes: async () =>{
        const res = await fetch("/get-all");
        if (!res.ok) throw new Error(`COULD_NOT_GET_DATA`);
        else return await res.json();
    }
}


// let makeCheckIn = async (nick, email, password) => {
//     const res = await fetch("/users/new", {
//         headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//         },
//         method: "POST",
//         body: JSON.stringify({nick, email, password})
//     })
    
//     if (!res.ok) throw new Error(`COULD_NOT_GET_DATA`);
//     else return await res.json();
// }