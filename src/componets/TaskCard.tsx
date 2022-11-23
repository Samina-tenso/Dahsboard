import { useContext, useEffect } from "react"
import ProjectContext from "../context/ProjectContext"
import { useProjectContext } from "../Hooks/useProjectContext"
import AllTasks from "./AllTasks"
import ActiveTasks from "./ActiveTasks"
import { useAxiosFetch } from "../Hooks/useAxiosFetch"

const TaskCard = () => {
    const { showAllTasks, setShowAllTasks, setTasks, tasks } = useProjectContext()
    useEffect(() => {
    }, [showAllTasks])


    const removeTime = (id: string): void => {
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
        console.log(id)
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
            <button onClick={() => setShowAllTasks(false)}>All tasks</button>
            <button onClick={() => setShowAllTasks(true)} > Active Tasks</button>
            {!showAllTasks ? <AllTasks deleteTask={deleteTask} removeTime={removeTime} /> : <ActiveTasks deleteTask={deleteTask} removeTime={removeTime} />}
        </div >
    )
}
export default TaskCard