import { useProjectContext } from "../Hooks/useProjectContext"
import { format, sub, formatISO } from 'date-fns'
import { eachDayOfInterval } from "date-fns/esm"
import { useEffect, useState } from "react"
import styles from '../Styles/style.module.css'

const ActiveTasks = (props: TaskProps) => {
    const { tasks, setTasks, newTask, setNewTaskArray } = useProjectContext()


    //  let newTaskArray: NewTask[] = []
    useEffect(() => {

        getActiveTasks()
        console.log("hh")
        console.log(newTask)


    }, [tasks])


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
        <div>
            <ul className={styles.subContainer}><li>Task</li> <li>Project Name</li><li><p>Time</p><p>hh:mm:ss</p></li></ul>
            <ul className={styles.outerContainer}>
                {
                    newTask.map(n => (
                        <>
                            {n.time ?
                                <li key={n.id} className={styles.listContainer}>
                                    <button onClick={() => props.deleteTask(n.id)}> delete </button>
                                    <p> {n.projectTitle}</p>
                                    <span><p>{n.title}</p> </span>
                                    <button onClick={() => props.removeTime(n.id)}> remove time</button>
                                    <span><span> {n.time.hours + ":"}</span><span>{n.time.minutes + ":"}</span><span>{n.time.seconds}</span></span>


                                </li>
                                : null}
                        </>
                    ))
                }</ul>
        </div>
    )
}

export default ActiveTasks