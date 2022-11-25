import useProjectsGroup from '../../Hooks/useProjectsGroup'
import { useProjectContext } from "../../Hooks/useProjectContext"
import { useEffect, useMemo } from 'react'
import Table from 'react-bootstrap/Table'
import { useGetTaskTime } from '../../Hooks/TimeHooks'
import { useGetRounded } from '../../Hooks/TimeHooks'

const InvoiceTaskList = () => {
    const { projectPrice, setProjectPrice, hourlyRate, invoiceTask, setInvoiceTasks, selectedProject, tasks } = useProjectContext()

    useEffect(() => {
        setInvoiceTasks(tasks)
    }, [tasks, selectedProject])

    useEffect(() => {
        TaskPrice()
        return () => {
            hourlyRate
        }
    }, [hourlyRate])

    const handleRemove = (id: string) => {
        const includedTasks = invoiceTask?.filter((task) => task.id !== id)
        setInvoiceTasks?.(includedTasks)
    }
    function TaskPrice(): void {
        let taskTimeArray: number[] = [];
        if (hourlyRate !== undefined && invoiceTask !== undefined) {
            invoiceTask?.map(task => {
                if (task.projectId === selectedProject?.id && task.time) {
                    const time: number = useGetTaskTime?.sum(task.time.hours, task.time.minutes, task.time.seconds)
                    const price: number = useGetRounded?.sum(time, hourlyRate?.hRate)
                    task.price = price
                    taskTimeArray.push(price)
                }
            })
        }
        setProjectPrice({ totalPrice: taskTimeArray.reduce((next, price) => { return next + price }, 0) })
    }
    return (
        <Table>
            <tbody>
                <tr>
                    <td>Selected Project: {selectedProject?.title}</td>
                    <td>Included Tasks: </td>
                </tr>
                < thead>
                    <tr>
                        <th>Task</th>
                        <th>Price</th>
                    </tr>
                </thead>
                {invoiceTask?.map(t => (selectedProject?.id === t.projectId ? (<tr><td><button onClick={() => handleRemove(t.id)}> remove</button></td><td><p>{t.title}</p></td><td><p>{t.price} kr</p></td></tr>) : null))}
            </tbody>
        </Table>

    )
}
export default InvoiceTaskList