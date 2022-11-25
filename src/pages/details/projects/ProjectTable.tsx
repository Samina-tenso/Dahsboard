import { useAxiosFetch } from '../../../Hooks/useAxiosFetch'
import { useProjectContext } from '../../../Hooks/useProjectContext'
import useProjectsGroup from '../../../Hooks/useProjectsGroup'
import Table from 'react-bootstrap/Table'

const ProjectList = () => {
    const { tasks, projects, setProjects } = useProjectContext()
    let group = useProjectsGroup(tasks, 'projectId')
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
        <div>
            <h3> Projects</h3>
            <Table responsive>
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Tasks</th>
                    </tr>
                </thead>
                <tbody>
                    {projects.map(project => (
                        <tr key={project.id}>
                            <td><button onClick={() => deleteProject(project.id)}>delete</button></td>
                            <td>  <p>{project.title}</p></td>
                            <td> {group.get(project.id)?.map(t => (<p> {t.title}</p>))}</td>
                        </tr>
                    ))
                    }
                </tbody >
            </Table >
        </div>
    )
}
export default ProjectList