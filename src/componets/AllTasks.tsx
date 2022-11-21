import { useProjectContext } from "../Hooks/useProjectContext"

const AllTasks = () => {


    const { tasks, setTasks } = useProjectContext()
    console.log(tasks)
    return (
        <div>
            <ul><li>Task</li> <li>Project Name</li><li><p>Time</p><p>hh:mm:ss</p></li></ul>
            <ul>
                {
                    tasks.map(t => (
                        <li>
                            <p> {t.id}</p>
                            <p><span> {t.time?.hours + ":"}</span><span>{t.time?.minutes + ":"}</span><span>{t.time?.seconds}</span></p>

                        </li>

                    ))
                }</ul>
        </div>
    )
}

export default AllTasks