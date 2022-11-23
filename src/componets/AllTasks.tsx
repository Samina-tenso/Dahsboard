import { useEffect } from "react"
import { useProjectContext } from "../Hooks/useProjectContext"
import styles from '../Styles/style.module.css'
const AllTasks = (props: TaskProps) => {
    const { tasks, setTasks } = useProjectContext()
    console.log(tasks)

    return (
        <div>
            <ul className={styles.subContainer} ><li>Task</li> <li>Project Name</li><li className={styles.time}><p>Time</p><p>hh:mm:ss</p></li></ul>
            <ul className={styles.outerContainer}>
                {
                    tasks.map(t => (
                        <li className={styles.listContainer}>
                            <button onClick={() => props.deleteTask(t.id)}> delete </button>
                            <p> {t.title}</p>
                            <button onClick={() => props.removeTime(t.id)}> remove time</button>
                            {t.time ?
                                <p><span> {t.time?.hours + ":"}</span><span>{t.time?.minutes + ":"}</span><span>{t.time?.seconds}</span></p>
                                : null}
                        </li>

                    ))
                }</ul>
        </div >
    )
}

export default AllTasks