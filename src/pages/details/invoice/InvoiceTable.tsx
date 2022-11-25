import { useProjectContext } from '../../../Hooks/useProjectContext'
import Table from 'react-bootstrap/Table'

const InvoiceTable = () => {
    const { invoices } = useProjectContext()
    return (
        <div>
            <h3>Invoices</h3>
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>Customer</th>
                        <th>Status</th>
                        <th>Sum</th>
                        <th>Created</th>
                        <th>Due On</th>
                    </tr>
                </thead>
                <tbody>
                    {invoices?.map(i => (
                        < tr key={i.id} >
                            <td>{i.name}</td>
                            <td>{i.status}</td>
                            <td>{i.totalPrice}</td>
                            <td>{i.created}</td>
                            <td>{i.dueDate}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}
export default InvoiceTable