import { useProjectContext } from '../../Hooks/useProjectContext'
import { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Stack, Row, Col } from "react-bootstrap";
const HourlyRate = () => {
    const { hourlyRate, setHourlyRate, selectedProject, projectPrice } = useProjectContext()

    const [submitted, setsubmitted] = useState<boolean>(false)
    const handleForm = (e: React.ChangeEvent<HTMLInputElement>) => {
        setHourlyRate({
            ...hourlyRate,
            hRate: e.target.valueAsNumber
        })
    }
    useEffect(() => {
        setHourlyRate({ hRate: 0 })
        console.log(hourlyRate)
        setsubmitted(false)
    }, [selectedProject])

    useEffect(() => {
        console.log(hourlyRate)
    }, [hourlyRate])

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setHourlyRate(hourlyRate)
        setsubmitted(true)
    }
    return (
        <Container>
            <Row>
                <Col>
                    {
                        submitted ? <><p>Project hourly rate: {hourlyRate?.hRate} kr</p></> :
                            <form onSubmit={handleSubmit}>
                                < input id="name" placeholder="hourly rate kr" type="number" onChange={(e) => handleForm(e)} />
                            </form>
                    }
                </Col>
                <Col>Total project price: {projectPrice?.totalPrice} kr </Col>
            </Row>
        </Container >
    )
}
export default HourlyRate
