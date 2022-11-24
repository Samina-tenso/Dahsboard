import React, { useEffect } from 'react'
import ProjectDisplay from './ProjectDisplay'
import { useAxiosFetch } from '../Hooks/useAxiosFetch'
import { useProjectContext } from '../Hooks/useProjectContext'

const ProjectList = () => {
    const { tasks, setTasks, projects, removeProject, setProjects, } = useProjectContext()

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
    useEffect(() => {
        // getProject()
        getTasks()
        // export const getData = async<T>(url:string): Promise<T>=>{
        //     const response = await fetch(url)
        //     return await response.json()
        // }
    }, [])
    return (
        <div>
            <ProjectDisplay />

        </div>
    )
}
export default ProjectList