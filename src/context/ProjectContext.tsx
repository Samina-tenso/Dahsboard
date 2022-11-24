import { createContext, useState, useCallback, useEffect } from 'react'
import { useAxiosFetch } from '../Hooks/useAxiosFetch'
const ProjectContext = createContext<ProjectActions | null>(null)

export const ProjectProvider = ({ children }: ProviderProps) => {
    const [projects, setProjects] = useState<Project[]>([])
    const [tasks, setTasks] = useState<Task[]>([])
    const [showAllTasks, setShowAllTasks] = useState<boolean>(false)
    const [groupedProjects, setGroupedProjects] = useState(new Map<string, Task[]>)
    const [selectedProject, setSelectedProject] = useState<Selected | { id?: '', title?: '' }>()
    const [invoiceTask, setInvoiceTasks,] = useState<InvoiceTask[]>([])
    const [invoiceName, setInvoiceName] = useState<InvoiceName | { name: '' }>()
    const [projectPrice, setProjectPrice] = useState<ProjectPrice | { totalPrice: 0; } | undefined>()
    const [hourlyRate, setHourlyRate] = useState<HourlyRate | { hRate: 0; } | undefined>()
    const [status, setStatus] = useState<StatusIndicator>({ status: "waiting" })
    const [invoices, setInvoices] = useState<Invoice[]>([])
    const [dueDate, setDueDate] = useState<DueDate>()
    const [created, setCreatedDate] = useState<CreatedDate>()
    const [newTask, setNewTaskArray] = useState<NewTask[]>([])
    useEffect(() => {
        getProject()
        getInvoices()
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
    //id är project id som ska tas bort
    const removeProject = useCallback((id: string) => setProjects(projects.filter((project) => project.id !== id)), [projects]);
    return (
        <ProjectContext.Provider value={{ newTask, setNewTaskArray, invoices, setInvoices, created, setCreatedDate, dueDate, setDueDate, status, setStatus, hourlyRate, setHourlyRate, projectPrice, setProjectPrice, invoiceName, setInvoiceName, setInvoiceTasks, invoiceTask, selectedProject, setSelectedProject, groupedProjects, setGroupedProjects, showAllTasks, setShowAllTasks, tasks, setTasks, projects, setProjects, removeProject }}>
            {children}
        </ProjectContext.Provider >
    )
}

export default ProjectContext