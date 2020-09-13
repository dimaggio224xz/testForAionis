const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



function createId() {
    return '' +  Math.random().toString(36).slice(2) + Math.random().toString(36).slice(2);
}

function getAll() {
    return ( JSON.parse(fs.readFileSync('./database.json', 'utf-8')) ).notes;
}

function getAllNotes() {
    const notes = getAll().filter(i=> i.completed === false);
    return notes.length === 0 ? 'EMPTY' : notes;
}

function getAllCompletedNotes() {
    const notes = getAll().filter(i=> i.completed === true)
    return notes.length === 0 ? 'EMPTY' : notes;
}

function getNoteById(_id) {
    _id = ''+_id;
    const arr = getAll()
    if (arr.length === 0) {
        return null;
    }
    const resault = arr.filter((item)=> item && item._id && item._id === _id);
    return resault.length === 0 ? null : resault[0];
}

function deleteNote(_id) {
    _id = ''+_id;
    const arr = getAll();

    if (arr.length === 0) {
        return null;
    }

    let resultArr =[];
    for (let item of arr) {
        if(item._id && item._id !== _id) {
            resultArr.push(item);
        }
    }
    if (resultArr.length !== 0 && arr.length > resultArr.length) {
        fs.writeFileSync('./database.json', JSON.stringify({notes: resultArr}, null, 4));
        return true;
    }
    return null;
}

function createNote(title, text, date) {
    const obj ={
        title,
        text,
        date,
        _id: createId(),
        completed: false
    }
    const arr = getAll()
    arr.unshift(obj);
    
    fs.writeFileSync('./database.json', JSON.stringify({notes: arr}, null, 4));
    return true;
}

function updateNote(_id, title, text){
    _id = ''+_id;
    const arr = getAll()
    let resultArr = [];

    for(let item of arr) {
        if(item._id === _id) {
            resultArr.push({
                _id,
                title,
                text,
                date: item.date,
                completed: item.completed
            })
        }
        else {
            resultArr.push(item);
        }
    }

    fs.writeFileSync('./database.json', JSON.stringify({notes: resultArr}, null, 4));
    return true;
}

function completedOrNot(_id, status) {
    _id = ''+_id;
    const arr = getAll();
    let resultArr = [];

    for(let item of arr) {
        if(item._id === _id) {
            resultArr.push({
                _id,
                title: item.title,
                text: item.text,
                date: item.date,
                completed: status
            })
        }
        else {
            resultArr.push(item);
        }
    }

    fs.writeFileSync('./database.json', JSON.stringify({notes: resultArr}, null, 4));
    return true;
}












app.get('/get-all', function (req, res) {
    res.end(JSON.stringify(getAllNotes()))
});


app.get('/get-all-completed', function (req, res) {
    res.end(JSON.stringify(getAllCompletedNotes()))
});


app.get('/get/:id', function (req, res) {
    if(req.params.id) {
        const note = getNoteById(req.params.id);
        if(note) {
            res.end(JSON.stringify({...note}))
        } else {
            res.end(JSON.stringify({msg: 'ERROR'}))
        }
    } 
    else {
        res.end(JSON.stringify({msg: 'ERROR'}))
    }
});


app.post('/create-note', function (req, res) {
    const {title, text, date} = req.body;


    if (!title || !text || !date) {
        res.end(JSON.stringify({msg: 'ERROR'}));
        return;
    }

    const answer = createNote(title, text, date);

    if (answer) {
        res.end(JSON.stringify({msg: 'SAVE'}))
    } else {
        res.end(JSON.stringify({msg: 'ERROR'}))
    }
});

app.post('/update-note', function (req, res) {
    const {_id, title, text} = req.body;

    if (!_id || !title || !text) {
        res.end(JSON.stringify({msg: 'ERROR'}));
        return;
    }

    const answer = updateNote(_id, title, text);

    if (answer) {
        res.end(JSON.stringify({msg: 'SAVE'}))
    } else {
        res.end(JSON.stringify({msg: 'ERROR'}))
    }

});


app.put('/completed/:id', function (req, res) {
    if(req.params.id) {
        let answer = completedOrNot(req.params.id, true)

        if (answer) {
            res.end(JSON.stringify({msg: 'SAVE'}))
        } else {
            res.end(JSON.stringify({msg: 'ERROR'}))
        }
    } 
    else {
        res.end(JSON.stringify({msg: 'ERROR'}))
    }
});


app.put('/un-completed/:id', function (req, res) {
    if(req.params.id) {
        let answer = completedOrNot(req.params.id, false)

        if (answer) {
            res.end(JSON.stringify({msg: 'SAVE'}))
        } else {
            res.end(JSON.stringify({msg: 'ERROR'}))
        }
    } 
    else {
        res.end(JSON.stringify({msg: 'ERROR'}))
    }
});


app.delete('/delete/:id', function (req, res) {
    if(req.params.id) {
        const answer = deleteNote(req.params.id);
        if (answer) {
            res.end(JSON.stringify({msg: 'DELETED'}))
        }
        else {
            res.end(JSON.stringify({msg: 'ERROR'}))
        }
    } 
    else {
        res.end(JSON.stringify({msg: 'ERROR'}))
    }
});



app.listen(5000, function () {
    console.log('Example app listening on port 5000!');
});
