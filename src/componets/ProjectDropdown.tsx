import useProjectsGroup from '../Hooks/useProjectsGroup'
import { useEffect, useState } from 'react'
import { useProjectContext } from '../Hooks/useProjectContext'

const ProjectDropDown = () => {
    const { projects, selectedProject, setSelectedProject, setGroupedProjects, removeProject, tasks, setProjects } = useProjectContext()
    const [isOpen, setIsOpen] = useState<boolean>(false)
    useEffect(() => {
    }, [isOpen])
    const handleDropDown = () => {
        if (!isOpen) {
            setIsOpen(true)
        }
        if (isOpen) {
            setIsOpen(false)
            console.log(projects)
        }
    }
    const chooseProject = (id: string, title: string) => {
        console.log(id)
        setSelectedProject({ ...selectedProject, id: id, title: title })
    }
    return (
        <div>
            <div>
                {selectedProject ? selectedProject.title : <p>Choose Project</p>}
                <button onClick={handleDropDown} >ˇ</button>
            </div>
            <div>
                {isOpen ? (
                    <ul>
                        {projects.map(project => (
                            <li key={project.id} onClick={() => { chooseProject(project.id, project.title); handleDropDown() }}> {project.title}</li>
                        ))}
                    </ul>
                )
                    : null}
            </div>
        </div>
    )
}

export default ProjectDropDown
