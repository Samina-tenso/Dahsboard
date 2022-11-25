import { useEffect } from "react"
import Table from 'react-bootstrap/Table'

import { useProjectContext } from "../../../Hooks/useProjectContext"
const AllTasks = (props: TaskProps) => {
    const { tasks } = useProjectContext()
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
                    tasks.map(t => (
                        <tr key={t.id}>
                            <td><button onClick={() => props.deleteTask(t.id)}> delete </button></td>
                            <td>{t.title}</td>
                            <td>{t.projectTitle}</td>
                            {t.time ? <>
                                <td><button onClick={() => props.removeTime(t.id)}> remove time</button></td>
                                <td><p><span>{t.time?.hours + ":"}</span><span>{t.time?.minutes + ":"}</span><span>{t.time?.seconds}</span></p></td></>
                                : null
                            }
                        </tr>
                    ))}
            </tbody >
        </Table >
    )
}
export default AllTasks