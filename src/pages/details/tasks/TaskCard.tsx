import { useContext, useEffect } from "react"
import ProjectContext from "../../../context/ProjectContext"
import { useProjectContext } from "../../../Hooks/useProjectContext"
import AllTasks from "./AllTasksTable"
import ActiveTasks from "./ActiveTasksTable"
import { useAxiosFetch } from "../../../Hooks/useAxiosFetch"
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToggleButton, ToggleButtonGroup } from "react-bootstrap";

const TaskCard = () => {
    const { showAllTasks, setShowAllTasks, setTasks, tasks } = useProjectContext()
    useEffect(() => {
    }, [showAllTasks])
    function removeTime(id: string): void {
        useAxiosFetch<Task[]>({
            method: "PATCH",
            url: `/tasks/${id}`,
            data: { time: null }
        }).then((resp) => {
            if (resp) {
                const filterTask = ([resp, tasks.filter((task) => (task.id !== id))])
                const flattened = filterTask.flatMap(tas => tas)
                setTasks(flattened)
            }
        })
    }
    const deleteTask = (id: string): void => {
        useAxiosFetch<Task[]>({
            method: "DELETE",
            url: `/tasks/${id}`,
        }).then((resp) => {
            if (resp) {
                console.log(resp)
                setTasks?.(tasks.filter((task) => task.id !== id))
            }
        })
    }

    return (
        <div>
            <ToggleButtonGroup type="radio" name="options" defaultValue={1} >
                <ToggleButton id="toggle-radio-1" value={1} onClick={() => setShowAllTasks(false)}>All tasks</ToggleButton>
                <ToggleButton id="toggle-radio-2" value={2} onClick={() => setShowAllTasks(true)} > Active Tasks</ToggleButton>
            </ToggleButtonGroup>
            {!showAllTasks ? <AllTasks deleteTask={deleteTask} removeTime={removeTime} /> : <ActiveTasks deleteTask={deleteTask} removeTime={removeTime} />}
        </div >
    )
}
export default TaskCard