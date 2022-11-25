import { format, sub, formatISO } from 'date-fns'
import { eachDayOfInterval } from "date-fns/esm"
import { useProjectContext } from "./useProjectContext"



export function useGetActiveTasks(): void {
    const { tasks, setTasks, newTask, setNewTaskArray } = useProjectContext()
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
    return setNewTaskArray(newArray)
    console.log(newTask)
}
