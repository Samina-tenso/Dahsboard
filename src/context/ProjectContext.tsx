import { createContext, useState, useCallback, useEffect } from 'react'
import { useAxiosFetch } from '../Hooks/useAxiosFetch'

const ProjectContext = createContext<ProjectActions | null>(null)
export const ProjectProvider = ({ children }: ProviderProps) => {
    const [projects, setProjects] = useState<Project[]>([])
    const [tasks, setTasks] = useState<Task[]>([])
    const [showAllTasks, setShowAllTasks] = useState<boolean>(false)
    const [groupedProjects, setGroupedProjects] = useState(new Map<string, Task[]>)
    const [selectedProject, setSelectedProject] = useState<Selected | { id: '', title?: '' }>()
    const [invoiceTask, setInvoiceTasks,] = useState<InvoiceTask[]>([])
    const [invoiceName, setInvoiceName] = useState<InvoiceName | { name: '' }>()
    const [projectPrice, setProjectPrice] = useState<ProjectPrice | { totalPrice: 0; } | undefined>()
    const [hourlyRate, setHourlyRate] = useState<HourlyRate | { hRate: 0; } | undefined>()
    const [status, setStatus] = useState<StatusIndicator>({ status: "Waiting" })
    const [invoices, setInvoices] = useState<Invoice[]>([])
    const [dueDate, setDueDate] = useState<DueDate>()
    const [created, setCreatedDate] = useState<CreatedDate>()
    const [newTask, setNewTaskArray] = useState<NewTask[]>([])
    useEffect(() => {
        getProject()
        getInvoices()
        getTasks()
    }, [])
    function getProject() {
        useAxiosFetch<Project[]>({
            method: "GET",
            url: "/projects",
        }).then((resp) => {
            if (resp) {
                setProjects?.(resp)
                console.log(resp)
            }
        })
    }
    function getTasks() {
        useAxiosFetch<Task[]>({
            method: "GET",
            url: "/tasks",
        }).then((resp) => {
            if (resp) {
                setTasks(resp)
                console.log(resp)
            }
        })
    }
    function getInvoices() {
        useAxiosFetch<Invoice[]>({
            method: "GET",
            url: "/invoices",
        }).then((resp) => {
            if (resp) {
                setInvoices?.(resp)
                console.log(resp)
            }
        })
    }
    return (
        <ProjectContext.Provider value={{ newTask, setNewTaskArray, invoices, setInvoices, created, setCreatedDate, dueDate, setDueDate, status, setStatus, hourlyRate, setHourlyRate, projectPrice, setProjectPrice, invoiceName, setInvoiceName, setInvoiceTasks, invoiceTask, selectedProject, setSelectedProject, groupedProjects, setGroupedProjects, showAllTasks, setShowAllTasks, tasks, setTasks, projects, setProjects }}>
            {children}
        </ProjectContext.Provider >
    )
}
export default ProjectContext