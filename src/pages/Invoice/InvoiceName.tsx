import { useProjectContext } from '../../Hooks/useProjectContext'
import { useState } from 'react'

const InvoiceName = () => {
    const { invoiceName, setInvoiceName } = useProjectContext()
    console.log(invoiceName)
    const [submitted, setsubmitted] = useState<boolean>(false)
    const handleForm = (e: React.ChangeEvent<HTMLInputElement>) => {
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
            {submitted ? <p>Customer Name: {invoiceName?.name}</p> :
                <form onSubmit={handleSubmit}>
                    < input id="name" placeholder="name" type="text" onChange={(e) => handleForm(e)} />
                </form>
            }
        </div>
    )
}
export default InvoiceName