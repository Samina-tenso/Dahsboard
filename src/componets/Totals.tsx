import { useProjectContext } from '../Hooks/useProjectContext'
import Table from 'react-bootstrap/Table'

const Totals = () => {
    const { projects, invoices, tasks } = useProjectContext()
    return (
        <Table>
            <thead>
                <tr>
                    <th>Projects</th>
                    <th>Tasks</th>
                    <th>Invoices</th>
                </tr>
            </thead>
            <tbody>
                < tr >
                    <td>{invoices.length}</td>
                    <td>{projects.length}</td>
                    <td>{tasks.length}</td>
                </tr>
            </tbody>
        </Table>
    )
}
export default Totals