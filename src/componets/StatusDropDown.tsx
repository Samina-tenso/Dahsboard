import { useProjectContext } from "../Hooks/useProjectContext"
import { useEffect, useState } from "react"


const StatusDropDown = () => {
    const { status, setStatus, showAllTasks, setShowAllTasks, setTasks, tasks } = useProjectContext()

    const [isOpen, setIsOpen] = useState<boolean>(false)
    useEffect(() => {
    }, [])
    const handleDropDown = () => {
        if (!isOpen) {
            return setIsOpen(true)
        }
        if (isOpen) {
            return setIsOpen(false)
        }
    }
    const handleStatus = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
        const target = e.target as Element
        if (target.id == "waiting") {
            setStatus({ status: "waiting" })
        } else if (target.id == "paid") {
            setStatus({ status: "paid" })
        } else {
            setStatus({ status: "late" })
        }
    }
    return (
        <div>
            <p> Status</p>
            <div>
                <p>{status?.status}</p>
                <button onClick={handleDropDown} >ˇ</button>
                {isOpen ? (
                    <ul>

                        <li key={1} id="waiting" onClick={(e) => { handleStatus(e); handleDropDown() }}> Waiting</li>
                        <li key={2} id="paid" onClick={(e) => { handleStatus(e); handleDropDown() }}> Paid</li>
                        <li key={3} id="late" onClick={(e) => { handleStatus(e); handleDropDown() }}> Late</li>

                    </ul>
                ) : null}
            </div>
        </div>
    )
}
export default StatusDropDown

