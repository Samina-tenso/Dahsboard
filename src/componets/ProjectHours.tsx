import { useProjectContext } from '../Hooks/useProjectContext'
import { useState } from 'react'
const HourlyRate = () => {
    const { hourlyRate, setHourlyRate } = useProjectContext()

    const [submitted, setsubmitted] = useState<boolean>(false)
    const handleForm = (e: React.ChangeEvent<HTMLInputElement>) => {
        setHourlyRate({
            ...hourlyRate,
            hRate: e.target.valueAsNumber
        })
    }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setsubmitted(true)
        console.log(hourlyRate?.hRate)
    }

    return (
        <div>
            {
                submitted ? <p>{hourlyRate?.hRate}</p> :
                    <form onSubmit={handleSubmit}>
                        < input id="name" placeholder="hourly rate" type="number" onChange={(e) => handleForm(e)} />
                    </form>
            }
        </div >
    )
}
export default HourlyRate
