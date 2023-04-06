
import React, { useState } from 'react';

function Home() {
  const [name, setName] = useState();
  const [id, setId] = useState(0);
  const [items, setItems] = useState([]);
  const [status, setStatus] = useState();
  const [date, setDate] = useState();

  const addItem = (e) => {

    // set id for each item
    setId(items.length + 1);

    // item object with it attributes 
    const item = { id: id, name: name, status: status, date: date};

    // add item to items array
    setItems(oldItems => [...oldItems, item]);
    setName('');
  };


  // delete item by id
  const deleteItem = (id) => {
    // remove item from items array
    setItems(oldItems => items.filter((item => item.id !== id)));
    setId(id);
  };

  // edit item 
  const editItem = (id, newName, newDate, newStatus) => {

    // const itemToEdit = items.filter((item) => item.id === id);

    const newItem = {  id: id,name: newName, date: newDate, status: newStatus};

    // remove old item
    deleteItem(id);

    // append the new item to items array
    setItems((oldItems) => [...oldItems, newItem]);
    setId(id+1);
    setName('');
  };


  return (
    <div>
      <h1>Todo List </h1>
      <div>
      <label>Add Task</label>
      <input type="text" name="taskName" id="textInput" value={name} placeholder='Task Name ...' onChange={e => setName(e.target.value)} />
      </div>
      <div>
      <label>Time</label>
      <input type="date" name="" id="time" onChange={e => setDate(e.target.value)} />
      </div>
      <div>
      <label>Status</label>
      <select name="" id="stutus" onChange={e => setStatus(e.target.value)}>
        <option value="Not Started">Not Started</option>
        <option value="In progress">In progress</option>
        <option value="Finished">Finished</option>
      </select>
      </div>

      <button onClick={addItem}>submit</button>

      <ul>
        {items.map((item) =>
          <div>
            <li>{[<span>{item.name}</span>, <span>{item.date}</span>, <span>{item.status}</span>]}</li>
            <button onClick={() => editItem(item.id, name, date, status)}>Edit</button>
            <button onClick={() => deleteItem(item.id)}>Delete</button>
          </div>
        )}
      </ul>

    </div>
  );

};

export default Home;