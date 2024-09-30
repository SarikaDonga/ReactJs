import React, { useState } from 'react'

const TodoList1 = () => {

  const [lists, setLists] = useState(["one", "two", "three"])

  const [newList, setNewList] = useState('')
  const [editList, setEditList] = useState(null)

  function addTask() {
    setLists([...lists, newList])
    setNewList('')
  }

  function editTask(index) {

    setEditList(index)
    setNewList(lists[index])

  }

  const deleteTask = (index) => {
    const update = lists.filter((list, i) => i !== index)
    setLists(update)
  }


  const SaveEdit = () => {
    const edited = lists.map((list, i) =>
      i === editList ? newList : list
    )

    setLists(edited)
    setEditList(null)
    setNewList('')
  }
  return (
    <div>

      <input type="text" placeholder='Enter Task' onChange={(e) => setNewList(e.target.value)} value={newList} />

      {
        editList == null ?
          (<button onClick={addTask}>add</button>
          ) : (<button onClick={SaveEdit}>update</button>
          )

      }

      <ul>
        {
          lists.map((list, index) => (

            <>
              <li key={index}>{list}</li>

              <button onClick={() => editTask(index)}>Edit</button>
              <button onClick={() => deleteTask(index)}>Delete</button>

            </>

          ))
        }
      </ul>


    </div>
  )
}

export default TodoList1