import { useProjectContext } from "../../../Hooks/useProjectContext"
import { format, sub, formatISO } from 'date-fns'
import { eachDayOfInterval } from "date-fns/esm"
import { useEffect, useState } from "react"
import Table from 'react-bootstrap/Table'

const ActiveTasks = (props: TaskProps) => {
    const { tasks, newTask, setNewTaskArray } = useProjectContext()
    useEffect(() => {
        getActiveTasks()
    }, [tasks])
    useEffect(() => {
    }, [newTask])
    function getActiveTasks(): void {
        let newArray: Task[] = []
        let today = formatISO(new Date(), { representation: 'date' })
        let priorDate = sub(new Date(today), {
            days: 30
        })
        let formatPrior = formatISO(new Date(priorDate), { representation: 'date' })
        let datesArray = eachDayOfInterval({
            start: new Date(formatPrior),
            end: new Date(today)
        })
        datesArray.map(a => {
            tasks.forEach(t => {
                const arrDate: string[] = [] = [formatISO(new Date(a), { representation: 'date' })]
                arrDate.map(d => {
                    if (t.day === d && t.time) {
                        console.log(t)
                        newArray.push(t)
                    }
                })
            })
        })
        setNewTaskArray(newArray)
        console.log(newTask)
    }
    return (
        <Table responsive>
            <thead>
                <tr>
                    <th></th>
                    <th>Task</th>
                    <th>Project Name</th>
                    <th>Time</th>
                </tr>
            </thead>
            <tbody>
                {
                    newTask.map(n => (
                        <tr>
                            <td><button onClick={() => props.deleteTask(n.id)}> delete </button></td>
                            <td>{n.title}</td>
                            <td>{n.projectTitle}</td>
                            {n.time ? <>
                                <td><button onClick={() => props.removeTime(n.id)}> remove time</button></td>
                                <td><p><span>{n.time?.hours + ":"}</span><span>{n.time?.minutes + ":"}</span><span>{n.time?.seconds}</span></p></td></>
                                : null
                            }
                        </tr>
                    ))}
            </tbody >
        </Table >
    )
}

export default ActiveTasks