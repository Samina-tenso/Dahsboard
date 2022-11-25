import { useProjectContext } from '../../Hooks/useProjectContext'
import Table from 'react-bootstrap/Table'
import { useGetTaskTime } from '../../Hooks/TimeHooks'
import { useEffect } from 'react'
import { useRoundedProject } from '../../Hooks/TimeHooks'
import { useState } from 'react'

const TimeOnProjects = () => {
    const [totalProjectHours, setTotalProjectHours] = useState<number>()
    const { projects, newTask } = useProjectContext()
    useEffect(() => {
        TotalProjectHours()

    }, [totalProjectHours])
    function TotalProjectHours(): void {
        let projectHours: number[] = []

        if (projects) {
            newTask?.map(task => {
                let time: number = useGetTaskTime?.sum(task.time.hours, task.time.minutes, task.time.seconds)
                const roundedTime: number = useRoundedProject?.sum(time)
                projectHours.push(roundedTime)
                console.log(projectHours) //  projectHours.push(n.time)
            })
            setTotalProjectHours(projectHours.reduce((next, hours) => { return next + hours }, 0))
            console.log(totalProjectHours)
        }
    }

    return (
        <Table>
            <thead>
                <tr>
                    <th>Time on projects last 30 days</th>

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