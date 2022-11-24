interface ProjectActions {
    tasks: Task[]
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>
    projects: Project[]
    setProjects?: React.Dispatch<React.SetStateAction<Project[]>>
    removeProject: (id: string) => void
    showAllTasks: boolean
    setShowAllTasks: React.Dispatch<React.SetStateAction<boolean>>
    groupedProjects: Map<string, Task[]>
    setSelectedProject: React.Dispatch<React.SetStateAction<Selected | {
        id?: '';
        title?: '';
    } | undefined>>
    setGroupedProjects: React.Dispatch<React.SetStateAction<Map<string, Task[]>>>
    selectedProject: Selected | {
        id?: '';
        title?: '';
    } | undefined
    setInvoiceTasks: React.Dispatch<React.SetStateAction<InvoiceTask[]>>
    invoiceTask: InvoiceTask[]
    invoiceName: InvoiceName | { name: '' } | undefined
    setInvoiceName: React.Dispatch<React.SetStateAction<InvoiceName | undefined>>
    projectPrice: ProjectPrice | { totalPrice: 0; } | undefined
    setProjectPrice: React.Dispatch<React.SetStateAction<ProjectPrice | {
        totalPrice: 0;
    } | undefined>>
    hourlyRate: HourlyRate | {
        hRate: 0;
    } | undefined
    setHourlyRate: React.Dispatch<React.SetStateAction<HourlyRate | { hRate: 0; } | undefined>>
    status: StatusIndicator | undefined
    setStatus: React.Dispatch<React.SetStateAction<StatusIndicator | { status: "waiting" }>>
}
interface ProjectPrice {
    totalPrice: number
}
interface HourlyRate {
    hRate: number
}
interface InvoiceName {
    name: string
}

interface StatusIndicator {
    status: string
    date?: Date
}

interface Selected {
    id?: string,
    title?: string
}

interface NewArray {
    setNewArray: React.Dispatch<React.SetStateAction<NewTask[]>>
    newTask: NewTask[]
}


// interface TaskTime {
//     taskTime: number[]
// }


interface InvoiceTask {
    id: string,
    title: string,
    projectId: string,
    projectTitle: string,
    day: string,
    time: timeKeys
    price: number
}

interface NewTask {
    id: string,
    title: string,
    projectId: string,
    projectTitle: string,
    day: string,
    time: timeKeys
}


interface TaskProps {
    removeTime: (id: string) => void
    deleteTask: (id: string) => void
}
//single project
interface Project {
    id: string
    title: string
}
interface Task {
    id: string,
    title: string,
    projectId: string,
    projectTitle: string,
    day: string,
    time: timeKeys
    price: number

}

interface timeKeys {
    seconds: number
    minutes: number
    hours: number
}

interface ProviderProps {
    children?: React.ReactNode;
}
interface FetchError {
    errorMessage: string
}
