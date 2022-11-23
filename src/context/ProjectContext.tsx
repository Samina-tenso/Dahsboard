import { createContext, useState, useCallback, useEffect } from 'react'
import { useAxiosFetch } from '../Hooks/useAxiosFetch'

const ProjectContext = createContext<ProjectActions | null>(null)

export const ProjectProvider = ({ children }: ProviderProps) => {
    const [projects, setProjects] = useState<Project[]>([])
    const [tasks, setTasks] = useState<Task[]>([])
    const [showAllTasks, setShowAllTasks] = useState<boolean>(false)
    const [groupedProjects, setGroupedProjects] = useState(new Map<string, Task[]>)
    const [selectedProject, setSelectedProject] = useState<Selected | { id: '', title: '' }>()

    useEffect(() => {
        getProject()

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

    //id är project id som ska tas bort
    const removeProject = useCallback((id: string) => setProjects(projects.filter((project) => project.id !== id)), [projects]);
    return (
        <ProjectContext.Provider value={{ selectedProject, setSelectedProject, groupedProjects, setGroupedProjects, showAllTasks, setShowAllTasks, tasks, setTasks, projects, setProjects, removeProject }}>
            {children}
        </ProjectContext.Provider >
    )
}

export default ProjectContext