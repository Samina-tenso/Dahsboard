import { useProjectContext } from '../../Hooks/useProjectContext'
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

                    <td><h3>{projects.length}</h3></td>
                    <td><h3>{tasks.length}</h3></td>
                    <td><h3>{invoices.length}</h3></td>
                </tr>
            </tbody>
        </Table>
    )
}
export default Totals