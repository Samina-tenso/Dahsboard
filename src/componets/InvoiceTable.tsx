import { useProjectContext } from '../Hooks/useProjectContext'
import React, { useEffect } from 'react';
import Table from 'react-bootstrap/Table'
import Invoice from './Invoice';

const InvoiceTable = () => {
    const { status, setStatus, invoices, showAllTasks, setShowAllTasks, setTasks, tasks } = useProjectContext()

    return (
        <Table striped bordered hover>
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
                {invoices.map(i => (
                    < tr >
                        <td>{i.name}</td>
                        <td>{i.status}</td>
                        <td>{i.totalPrice}</td>
                        <td>{i.created}</td>
                        <td>{i.dueDate}</td>
                    </tr>

                ))}
            </tbody>
        </Table>
    )
}
export default InvoiceTable