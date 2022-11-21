import { useContext, useEffect } from "react"
import ProjectContext from "../context/ProjectContext"
import { useProjectContext } from "../Hooks/useProjectContext"
import AllTasks from "./AllTasks"
import ActiveTasks from "./ActiveTasks"

const TaskCard = () => {
    const { showAllTasks, setShowAllTasks } = useProjectContext()
    console.log(showAllTasks)
    useEffect(() => {

    }, [showAllTasks])
    return (
        <div>
            <button onClick={() => setShowAllTasks(false)}>All tasks</button>
            <button onClick={() => setShowAllTasks(true)} > Active Tasks</button>
            {!showAllTasks ? <AllTasks /> : <ActiveTasks />}
        </div >
    )
}
export default TaskCard