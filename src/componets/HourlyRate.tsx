import { useProjectContext } from '../Hooks/useProjectContext'
import { useEffect, useState } from 'react'
const HourlyRate = () => {
    const { hourlyRate, setHourlyRate, selectedProject } = useProjectContext()

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
        <div>
            {
                submitted ? <span><p>Project hourly rate</p><p>{hourlyRate?.hRate} </p><p>kr</p></span> :
                    <form onSubmit={handleSubmit}>
                        < input id="name" placeholder="hourly rate" type="number" onChange={(e) => handleForm(e)} />
                        <p>kr</p>
                    </form>
            }
        </div >
    )
}
export default HourlyRate
