import useProjectsGroup from '../Hooks/useProjectsGroup'
import { useProjectContext } from "../Hooks/useProjectContext"
import { useEffect, useMemo } from 'react'
import { useGetTaskTime } from '../Hooks/TimeHooks'
import { useGetRounded } from '../Hooks/TimeHooks'

const TaskList = () => {
    const { projectPrice, setProjectPrice, hourlyRate, invoiceTask, setInvoiceTasks, selectedProject, tasks } = useProjectContext()
    let group = useProjectsGroup(tasks, 'projectId')
    useEffect(() => {
        // if (selectedProject !== undefined && group !== undefined) {
        //     group?.get(selectedProject?.id)?.length < 1 || !invoiceTask ? setInvoiceTasks(tasks) : null
        //     console.log(group?.get(selectedProject?.id)?.length, "fglg")
        // }
        setInvoiceTasks(tasks)
        console.log("re")
        console.log("jkl")
    }, [selectedProject])

    // const newTasks = useMemo(() => {
    //     return setInvoiceTasks(tasks)
    // }, [selectedProject])

    useEffect(() => {
        TaskPrice()
        console.log("chan")
        console.log(invoiceTask)
        return () => {
            hourlyRate
        }
    }, [hourlyRate])

    const handleRemove = (id: string) => {
        const includedTasks = invoiceTask.filter((task) => task.id !== id)
        setInvoiceTasks?.(includedTasks)
    }

    function TaskPrice(): void {
        let taskTimeArray: number[] = [];
        if (hourlyRate !== undefined && invoiceTask !== undefined) {
            invoiceTask?.map(task => {
                if (task.projectId === selectedProject?.id) {
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
        <div>
            <div>
                <p> {selectedProject?.title}</p>
                <ul>
                    {invoiceTask.map(t => (selectedProject?.id === t.projectId ? (<li> <p>{t.title}</p><p>{t.price}</p><button onClick={() => handleRemove(t.id)}> remove</button></li>) : null))}
                </ul>
                <p>Total:{projectPrice?.totalPrice}</p>
            </div>
        </div>
    )
}
export default TaskList