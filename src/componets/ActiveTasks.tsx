import { useProjectContext } from "../Hooks/useProjectContext"
import { format, sub, formatISO } from 'date-fns'
import { eachDayOfInterval } from "date-fns/esm"
import { useEffect, useState } from "react"
const ActiveTasks = () => {
    const { tasks, setTasks } = useProjectContext()
    const [newTask, setNewArray] = useState<NewTask[]>([])

    //  let newTaskArray: NewTask[] = []
    useEffect(() => {

        getActiveTasks()
        console.log(newTask)
    }, [])

    function getActiveTasks() {
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
                let arrDate = formatISO(new Date(a), { representation: 'date' })
                if (t.day === arrDate && t.time) {
                    console.log(t.day)
                    setNewArray([t])
                }
            })
        })

        console.log(newTask)
        // return newTaskArray
    }

    return (
        <div>
            <ul><li>Task</li> <li>Project Name</li><li><p>Time</p><p>hh:mm:ss</p></li></ul>
            <ul>
                {
                    newTask.map(n => (
                        <>

                            <li key={n.id}>
                                <span><p>{n.title}</p> </span>

                                <span><span> {n.time.hours + ":"}</span><span>{n.time.minutes + ":"}</span><span>{n.time.seconds}</span></span>

                            </li>
                        </>
                    ))
                }</ul>
        </div>
    )
}

export default ActiveTasks