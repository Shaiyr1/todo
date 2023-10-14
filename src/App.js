import './App.css';
import TodoAdd from './Components/TodoAdd/TodoAdd';
import TodoHeader from './Components/TodoHeader/TodoHeader';
import TodoList from './Components/TodoList/TodoList';
import React,{useEffect, useState, useRef} from 'react'
import * as THREE from 'three'
import NET from 'vanta/dist/vanta.clouds.min'

function App() {
  const [todoName, setTodoName] = useState("");
  const [todoArr, setTodoArr] = useState([]);
  const [status, setStatus] = useState("all");
  const [vantaEffect, setVantaEffect] = useState(0);
  const myRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(NET({
        el: myRef.current,
        THREE: THREE,
        maxDistance: 22.00,
        points: 20.00,
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect]);


  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(todoArr));
    localStorage.setItem('todoName', JSON.stringify(todoName))
  }, [todoArr, todoName]);


  useEffect(() => {
    setTodoArr(JSON.parse(localStorage.getItem('array')))
  }, []);

  useEffect(()=>{
    localStorage.setItem('array', JSON.stringify(todoArr))
  }, [todoArr])


  return (
      <>
        <div ref={myRef} className="vanta">

        </div>
        <div className="content">
          <TodoHeader />
          <TodoAdd todoName={todoName} setTodoName={setTodoName} todoArr={todoArr} setTodoArr={setTodoArr} status={status} setStatus={setStatus} />
          <TodoList todoArr={todoArr} setTodoArr={setTodoArr} todoName={todoName} setTodoName={setTodoName} status={status} setStatus={setStatus} />
        </div>
      </>
  );
}

export default App;
