import { useEffect, useState } from "react";
const tasks = [
    {id: '1', title: 'my first task!'},
    {id: '2', title: 'my second task!'},
    {id: '3', title: 'my third task!'},
    {id: '4', title: 'my fourth task!'},
    {id: '5', title: 'my fifth task!'},
]

export default function FindindData() {


    const [tasks, setTasks] = useState([])

    useEffect(()=>{
        async function findDatas() {
           const result = await fetch('https://jsonplaceholder.typicode.com/todos')

           const finalResult = await result.json()

           return finalResult
        }

        findDatas().then(res => setTasks(res))
    }, [])

    return(
        <div>
            <h1>Buscando dados</h1>

            <ol>
            {tasks.map((task)=>{
                if (!task.completed) {
                    return(
                        <li key={task.id}>{task.title}</li>
                    )
                }
            })}
            </ol>
        </div>
    )
}