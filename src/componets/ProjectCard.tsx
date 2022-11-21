import React, { useEffect } from 'react'
import ProjectDisplay from './ProjectDisplay'
import { useAxiosFetch } from '../Hooks/useAxiosFetch'
import { useProjectContext } from '../Hooks/useProjectContext'

const ProjectList = () => {
    const { tasks, setTasks, projects, removeProject, setProjects, } = useProjectContext()
    useEffect(() => {
        //abstract till hook as well?
        async function getProject() {
            useAxiosFetch<Project[]>({
                method: "GET",
                url: "/projects",
            }).then((resp) => {
                if (resp) {
                    setProjects?.(resp)
                    console.log(resp)
                }
            })
        } getProject()
        // export const getData = async<T>(url:string): Promise<T>=>{
        //     const response = await fetch(url)
        //     return await response.json()
        // }
        useAxiosFetch<Task[]>({
            method: "GET",
            url: "/tasks",
        }).then((resp) => {
            if (resp) {
                setTasks(resp)
                console.log(resp)
            }
        })
    }, [])


    console.log(tasks)
    console.log(projects)
    return (
        <div>
            <ProjectDisplay />
            <p> hello</p>
        </div>
    )
}
export default ProjectList