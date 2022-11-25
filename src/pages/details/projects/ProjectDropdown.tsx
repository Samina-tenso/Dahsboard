import { useEffect, useState } from 'react'
import { useProjectContext } from '../../../Hooks/useProjectContext'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from "react-bootstrap";

const ProjectDropDown = () => {
    const { projects, selectedProject, setSelectedProject } = useProjectContext()
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
        <Container>
            <Row >

                <Col>{selectedProject ? selectedProject.title : <p>Choose Project</p>}</Col>
                <Col>   <button onClick={handleDropDown} >ˇ</button> </Col>
                {isOpen ? (

                    <Col>
                        {projects.map(project => (
                            <li key={project.id} onClick={() => { chooseProject(project.id, project.title); handleDropDown() }}> {project.title}</li>
                        ))}
                    </Col>
                )
                    : null}
            </Row>
        </Container>
    )
}
export default ProjectDropDown
