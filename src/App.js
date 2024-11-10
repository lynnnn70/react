import React, {useState} from "react";
import "./App.css"
//直接把函數宣告寫在js
const App = () => {
  const [inputTodo, setInputTodo] = useState("")
  const [todoList, setTodoList] = useState([])
  const [updateId, setUpdateId] = useState(0)

  const handleSubmit = (e) => {
    e.preventDefault();

    if(updateId) {
      const updateTodo = todoList.find((i) => i.id === updateId);
      const updatedTodoList = todoList.map((t) => t.id === updateTodo.id ? (t = { id: t.id, inputTodo }) : {id: t.id, inputTodo: t.inputTodo});
      setTodoList(updatedTodoList);
      setInputTodo("");
      setUpdateId(0);  // 這裡將 updateId 重置為 0，恢復到 "Add" 狀態
      return
    }

    if(inputTodo !== "") {
      //新增的項目放在列表最前面
      // setTodoList([{id:`${inputTodo}-${Date.now()}`, inputTodo}, ... todoList])
      //新增的項目放在列表最後面
      setTodoList([...todoList, {id: `${inputTodo}-${Date.now()}`, inputTodo}])
      setInputTodo("");
    }
  };
  
  const handleDelete = (id) => {
    const deleteTodo = todoList.filter((to) => to.id !== id);
    setTodoList([...deleteTodo]);
  };
  const handleUpdate = (id) => {
    const updateTodo = todoList.find((i) => i.id === id);
    setInputTodo(updateTodo.inputTodo);
    setUpdateId(id);
  };


  return (
    <div className='App'>
      <div className="container">
        <h1>TO-DO LIST</h1>
        <form className="todoForm" onSubmit={handleSubmit}>
          <input type="text" value={inputTodo}  
            onChange={(e) => setInputTodo(e.target.value)}></input>
          <button type="submit">{updateId ? "Update" : "Add"}</button>
        </form>
{/* value 將輸入框的值與 inputTodo綁定*/}
{/* t 代表整個對象為輸入框內的inputTodo值 */}
        <ul className="allTodoList">
          {todoList.map((t, index) => (
             <li className="singleTodoTask">
             <span className="todoIndex">{index + 1}</span>
             <span className="todoText" key={t.id}>{t.inputTodo}</span>
             <button onClick={() => handleUpdate(t.id)}>Update</button>
             <button onClick={() => handleDelete(t.id)}>Delete</button>  
           </li> 
          ))}
        </ul>
      </div>
    </div>
  )
}


export default App