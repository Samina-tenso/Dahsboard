import { useProjectContext } from '../Hooks/useProjectContext'
import { useState } from 'react'

const InvoiceName = () => {
    const { tasks, setTasks, projects, invoiceName, setInvoiceName, removeProject, setProjects, } = useProjectContext()
    console.log(invoiceName)
    const [submitted, setsubmitted] = useState<boolean>(false)
    const handleForm = (e) => {
        setInvoiceName({
            ...InvoiceName,
            name: e.target.value
        })
    }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setsubmitted(true)
    }
    return (
        <div>
            {submitted ? <p>{invoiceName?.name}</p> :
                <form onSubmit={handleSubmit}>
                    < input id="name" placeholder="name" type="text" onChange={handleForm} />
                </form>
            }
        </div>
    )
}
export default InvoiceName