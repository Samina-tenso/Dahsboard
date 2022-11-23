import useProjectsGroup from '../Hooks/useProjectsGroup'
import { useProjectContext } from "../Hooks/useProjectContext"
import { useEffect } from 'react'


const TaskList = () => {
    const { invoiceTask, setInvoiceTasks, projects, selectedProject, setSelectedProject, setGroupedProjects, removeProject, tasks, setProjects } = useProjectContext()
    let group = useProjectsGroup(tasks, 'projectId')

    useEffect(() => {
        if (selectedProject !== undefined && group !== undefined) {
            group?.get(selectedProject?.id)?.length < 1 || !invoiceTask ? setInvoiceTasks(tasks) : null
            console.log(group?.get(selectedProject?.id)?.length, "fglg")
        }
        console.log("jkl")
    }, [invoiceTask])

    const handleRemove = (id: string) => {
        const includedTasks = invoiceTask.filter((task) => task.id !== id)
        setInvoiceTasks?.(includedTasks)
    }
    return (
        <div>
            {selectedProject ? (
                <div>
                    <p> {selectedProject.title}</p>
                    <ul>
                        {invoiceTask.map(t => (selectedProject.id === t.projectId ? (<li> <p>{t.title}</p><button onClick={() => handleRemove(t.id)}> remove</button></li>) : null))}
                    </ul>
                </div>
            ) : null}
        </div>
    )
}
export default TaskList