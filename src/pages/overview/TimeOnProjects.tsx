import { useProjectContext } from '../../Hooks/useProjectContext'
import Table from 'react-bootstrap/Table'
import { useGetTaskTime } from '../../Hooks/TimeHooks'
import { useEffect } from 'react'
import { useRoundedProject } from '../../Hooks/TimeHooks'
import { useState } from 'react'
import { formatISO, sub, eachDayOfInterval } from 'date-fns'

const TimeOnProjects = () => {
    const [totalProjectHours, setTotalProjectHours] = useState<number>()
    const { projects, tasks, setNewTaskArray, newTask } = useProjectContext()
    useEffect(() => {
        getProjectTaskTime()
        console.log(tasks)
    }, [tasks])
    useEffect(() => {
        getProjectHours()
        console.log(tasks)
    }, [newTask])

    function getProjectTaskTime(): void {
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

    function getProjectHours() {
        let projectHours: number[] = []
        if (projects) {
            newTask?.map(task => {
                console.log("p")
                let time: number = useGetTaskTime?.sum(task.time.hours, task.time.minutes, task.time.seconds)
                const roundedTime: number = useRoundedProject?.sum(time)
                projectHours.push(roundedTime)
                console.log(projectHours)
            })
            setTotalProjectHours(projectHours.reduce((next, hours) => { return next + hours }, 0))
            console.log(totalProjectHours)
        }
    }

    return (
        <Table>
            <thead>
                <tr>
                    <th>Hours spent on projects last 30 days</th>

                </tr>
            </thead>
            <tbody>
                < tr >
                    <td><h3>{totalProjectHours}</h3></td>
                </tr>
            </tbody>
        </Table>
    )
}
export default TimeOnProjects