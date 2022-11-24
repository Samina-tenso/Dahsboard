import { useProjectContext } from '../Hooks/useProjectContext'
import Totals from './Totals'
import TimeOnProjects from './TimeOnProjects'
const Overview = () => {

    const { status, setStatus, showAllTasks, setShowAllTasks, setTasks, tasks } = useProjectContext()

    return (
        <div>
            <Totals />
            <TimeOnProjects />
        </div>
    )
}
export default Overview