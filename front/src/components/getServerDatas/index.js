export default 
{
    getAllNotes: async () =>{
        const res = await fetch("/get-all");
        if (!res.ok) throw new Error(`COULD_NOT_GET_DATA`);
        else return await res.json();
    },

    getAllCompletedNotes: async () =>{
        const res = await fetch("/get-all-completed");
        if (!res.ok) throw new Error(`COULD_NOT_GET_DATA`);
        else return await res.json();
    },

    getNoteById: async (_id) =>{
        const res = await fetch("/get/" + _id);
        if (!res.ok) throw new Error(`COULD_NOT_GET_DATA`);
        else return await res.json();
    },

    createNote: async (title, text, date) => {
        const res = await fetch("/users/new", {
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({title, text, date})
        })
        if (!res.ok) throw new Error(`COULD_NOT_GET_DATA`);
        else return await res.json();
    },

    updateNote: async (_id, title, text) => {
        const res = await fetch("/users/new", {
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({_id, title, text})
        })
        if (!res.ok) throw new Error(`COULD_NOT_GET_DATA`);
        else return await res.json();
    },

    completeNote: async (_id) => {
        const res = await fetch("/completed/" + _id, { method: "PUT" })
        if (!res.ok) throw new Error(`COULD_NOT_GET_DATA`);
        else return await res.json();
    },

    unCompleteNote: async (_id) => {
        const res = await fetch("/un-completed/" + _id, { method: "PUT" })
        if (!res.ok) throw new Error(`COULD_NOT_GET_DATA`);
        else return await res.json();
    },

    deleteNote: async (_id) => {
        const res = await fetch("/delete/" + _id, { method: "DELETE" })
        if (!res.ok) throw new Error(`COULD_NOT_GET_DATA`);
        else return await res.json();
    },
}
