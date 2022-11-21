interface ProjectActions {
    tasks: Task[]
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>
    projects: Project[]
    setProjects?: React.Dispatch<React.SetStateAction<Project[]>>
    removeProject: (id: string) => void
    showAllTasks: boolean
    setShowAllTasks: React.Dispatch<React.SetStateAction<boolean>>
}

interface NewArray {
    setNewArray: React.Dispatch<React.SetStateAction<NewTask[]>>
    newTask: NewTask[]

}
interface NewTask {
    id: string,
    title: string,
    projectId: string,
    projectTitle: string,
    day: string,
    time: timeKeys
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
