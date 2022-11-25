import { useProjectContext } from '../../Hooks/useProjectContext'
import Totals from './Totals'
import TimeOnProjects from './TimeOnProjects'
import Earnings from './Earnings'
const Overview = () => {

    const { status, setStatus, showAllTasks, setShowAllTasks, setTasks, tasks } = useProjectContext()

    return (
        <div>
            <Totals />
            <TimeOnProjects />
            <Earnings />
        </div>
    )
}
export default Overview