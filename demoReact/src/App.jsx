// noinspection JSAnnotator

import {useEffect, useState} from "react";
import checkIcon from "./assets/filecheck.svg";
import "./App.css" ;
import Task from "./assets/Task.jsx";
import task from "./assets/Task.jsx";

function App() {
    const [tasks, setTasks] = useState([]);
    const [taskName, setTaskName] = useState("");
    const [onDownload, setOnDownload] = useState(true);
    const [onUpdate, setOnUpdate] = useState(false);
    const [maxId, setMaxId] = useState(-1);
    const handleDelete = (task) => {
        fetch('http://192.168.1.65:8080/task/remove', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(task)
        }).then(res => {
            console.log(res)
            setOnDownload(true);
        });

    }

    useEffect(() => {
        if(onDownload) {
            fetch('http://192.168.1.65:8080/task/getTasks')
                .then(res => res.json())
                .then(data => setTasks(data));
            setOnDownload(false);
        }
    }, [onDownload]);

    useEffect(() => {
        if(onUpdate) {
            const taskForUpload = {
                id: maxId + 1,
                name: taskName,
                checked: false
            }
            fetch('http://192.168.1.65:8080/task/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(taskForUpload)
            }).then(r => {
                console.log(r)
                setOnDownload(true);
                setTaskName('');
            })
            console.log('Updated');
            setOnUpdate(false);
        }
    }, [onUpdate, maxId, taskName])
  return (
      <>
          <header className={"w-[100%] h-[5rem] bg-blue-800 flex justify-between p-2 mb-5"}>
              <img src={checkIcon} className={"fill-amber-900 h-[3.3rem] mt-[0.4rem]"} alt="logo"/>
              <h1 className={"h-[4rem] pt-2.5 align-middle font-sans text-4xl font-bold tracking-[0.5rem] text-white"}> TODO </h1>
              <img src={checkIcon} className={"fill-amber-900 h-[3.3rem] mt-[0.4rem]"} alt="logo"/>
          </header>
          <nav className={'w-full h-[5rem] bg-blue-900 rounded-xl flex items-center justify-between px-3'}>
              <div className={'h-[60%] w-[73%]  flex items-center justify-evenly bg-gray-900 rounded-3xl'}>
                    <input name='namer' className={'bg-gray-900 outline-0 text-white w-[95%] font-bold p-1'} onChange={(e) => {
                        setTaskName(e.target.value);
                    }}
                    value={taskName}/>
              </div>
              <button className={'h-[60%] w-[25%] bg-blue-600 px-4 rounded-xl text-white text-[1rem] font-bold'} onClick={() => {
                  tasks.forEach(value => {
                      console.log('Valor: ' + value.id)
                      if(maxId < value.id) {
                          setMaxId(value.id)
                      }
                  })
                  setOnUpdate(true);
              }}> Publicar tarea</button>
          </nav>
          {
              tasks.map(taskProp=> (
              <Task id={taskProp.id} text={taskProp.name} checked={taskProp.checked} deleteHandler={handleDelete}/>
              ))
          }
      </>
  )
}

export default App
