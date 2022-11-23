import useProjectsGroup from '../Hooks/useProjectsGroup'
import { useProjectContext } from "../Hooks/useProjectContext"


const TaskList = () => {
    const { projects, selectedProject, setSelectedProject, setGroupedProjects, removeProject, tasks, setProjects } = useProjectContext()

    let group = useProjectsGroup(tasks, 'projectId')
    console.log(group)
    console.log(selectedProject)
    return (
        <div>
            {selectedProject ? (
                <ul>
                    {group.get(selectedProject.id)?.map(t => (<p> {t.title}</p>))}
                </ul>
            ) : null}
        </div>
    )
}
export default TaskList