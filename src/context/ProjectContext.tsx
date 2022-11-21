import { createContext, useState, useCallback } from 'react'

const ProjectContext = createContext<ProjectActions | null>(null)

export const ProjectProvider = ({ children }: ProviderProps) => {
    const [projects, setProjects] = useState<Project[]>([])
    const [tasks, setTasks] = useState<Task[]>([])

    const [showAllTasks, setShowAllTasks] = useState<boolean>(false)



    //id är project id som ska tas bort
    const removeProject = useCallback((id: string) => setProjects(projects.filter((project) => project.id !== id)), [projects]);
    return (
        <ProjectContext.Provider value={{ showAllTasks, setShowAllTasks, tasks, setTasks, projects, setProjects, removeProject }}>
            {children}
        </ProjectContext.Provider >
    )
}

export default ProjectContext