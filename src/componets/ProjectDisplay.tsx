
import { useAxiosFetch } from '../Hooks/useAxiosFetch'
import { useProjectContext } from "../Hooks/useProjectContext"
import useProjectsGroup from '../Hooks/useProjectsGroup'
//@ts-ignore problem med module.css
import styles from '../Styles/style.module.css'
const ProjectDisplay = () => {

    const { projects, setGroupedProjects, removeProject, tasks, setProjects } = useProjectContext()

    let group = useProjectsGroup(tasks, 'projectId')


    // Itterate over projects and get id of each project get tasks based on that id from map
    //p.id -if map has project id  = project.id (same value exists in both)? return those tasks


    const deleteProject = (id: string): void => {
        console.log(id)
        useAxiosFetch<Project[]>({
            method: "DELETE",
            url: `/projects/${id}`,
        }).then((resp) => {
            if (resp) {
                console.log(resp)
                setProjects?.(projects.filter((project) => project.id !== id))
            }
        })
    }


    return (
        <div >
            <ul className={styles.subContainer}> <li > Name</li><li> Tasks</li></ul>
            {projects.map(project => (
                <>
                    <li className={styles.listContainer}>
                        <button onClick={() => deleteProject(project.id)}>delete</button>
                        <p>{project.title}</p>
                        {group.get(project.id)?.map(t => (<p> {t.title}</p>))}
                    </li>
                </>
            ))
            }
        </div >
    )
}
export default ProjectDisplay