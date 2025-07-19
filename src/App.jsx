import { useState } from 'react'
import NavBar from './components/NavBar'

function App() {
  const [todos, setTodos] = useState([])
  const [todo,setTodo] = useState('')
  const [finishedTodos,setFinishedTodos] = useState([])
  const [showFinished,setShowFinised] = useState(false)

  const handleAdd = () => {
    if (todo.length >= 3){
      let newTodos = [...todos]
      newTodos.push({
      todo:todo,
      isCompleted:false
    })
    setTodos(newTodos)
    }
  }

  const handleChange = (e) => {
    setTodo(e.target.value)
  }

  const handleEdit = (e) => {
    let name = e.target.name
    document.querySelector('.addbtn').style.display = 'none'
    document.querySelector('.updatebtn').style.display = 'block'
    document.querySelector('input').value = name
    document.querySelector('.updatebtn').addEventListener('click',() => {
      let index = todos.findIndex(e => {
        return e.todo == name
      })
      let newTodos = [...todos]
      console.log(index)
      newTodos[index].todo = document.querySelector('input').value
      document.querySelector('.addbtn').style.display = 'block'
      document.querySelector('.updatebtn').style.display = 'none'
      setTodos(newTodos)
    })
  }

  const handleCompleted = (e) => {
    let name = e.target.name
    let index = todos.findIndex(e => {
      return e.todo == name
    })
    let newTodos = [...todos]
    let finished = [...finishedTodos]
    newTodos[index].isCompleted = true
    finished.push(newTodos[index])
    newTodos.splice(index,1)
    setTodos(newTodos)
    setFinishedTodos(finished)
  }

  const handleDelete = (e) => {
    let name = e.target.name
    let index = todos.findIndex(e => {
      return e.todo == name
    })
    if (showFinished){
       let newTodos = [...finishedTodos]
      newTodos.splice(index,1)
      setFinishedTodos(newTodos)
    }
    else{
      let newTodos = [...todos]
      newTodos.splice(index,1)
      setTodos(newTodos)
    }
  }

  const toggleFinished = () => {
    setShowFinised(!showFinished)
  }

  return (
    <>
      <NavBar/>
      <div className="container md:w-140 md:h-100 w-screen h-screen bg-green-950 md:mx-auto m-0 my-15 text-white md:p-6 p-1 flex flex-col gap-4 md:rounded-xl items-center md:items-start">
        <div className="heading">
          <h1 className='text-bold text-3xl'>Create your Todo-List</h1>
        </div>
        <div className="input relative md:w-[440px] w-[350px]">
          <input onChange={handleChange} className='border-2 border-white md:w-[440px] w-[350px] h-10 px-2 pr-18 rounded-lg text-white text-xl outline-0' type="text" placeholder='What are your tasks today?'/>
          <div className="btn absolute z-10 right-0 top-0 border-2 border-white rounded-lg h-10 w-15 flex justify-center items-center cursor-pointer hover:bg-green-700">
            <button onClick={handleAdd} className='addbtn cursor-pointer'>Add</button>
            <button className='updatebtn cursor-pointer hidden'>Update</button>
          </div>
        </div>
        <div className="checkbox">
          <input onChange={toggleFinished} checked={showFinished} type="checkbox"/> Show Finished 
        </div>
        <div className="todos flex flex-col gap-2 w-full h-[204px] overflow-y-auto">
          {showFinished?finishedTodos.map(todo => {
            return ( <div key={todo.todo} className="todo flex w-full justify-between items-center px-2 h-10 border-2 border-amber-600 rounded-xl">
            <div className="task w-60">
              <h3 className='truncate'>{todo.todo}</h3>
            </div>
            <div className="buttons flex gap-4">
              <button name={todo.todo} onClick={handleDelete} className='border-0 outline-0 text-red-500 cursor-pointer hover:text-red-400'>Delete</button>
            </div>
          </div>)
          }):todos.map(todo => {
            return ( <div key={todo.todo} className="todo flex w-full justify-between items-center px-2 h-10 border-2 border-amber-600 rounded-xl">
            <div className="task w-60">
              <h3 className='truncate'>{todo.todo}</h3>
            </div>
            <div className="buttons flex gap-4">
              <button name={todo.todo} onClick={handleEdit} className='border-0 outline-0 text-cyan-700 cursor-pointer hover:text-cyan-400'>Edit</button>
              <button name={todo.todo} onClick={handleCompleted} className='border-0 outline-0 text-orange-600 cursor-pointer hover:text-orange-400'>Completed</button>
              <button name={todo.todo} onClick={handleDelete} className='border-0 outline-0 text-red-500 cursor-pointer hover:text-red-400'>Delete</button>
            </div>
          </div>)
          })}
        </div>
      </div>
    </>
  )
}

export default App
