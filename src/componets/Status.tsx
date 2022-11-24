import { useProjectContext } from "../Hooks/useProjectContext"
import { useEffect, useState } from "react"


const Status = () => {
    const { status, setStatus, showAllTasks, setShowAllTasks, setTasks, tasks } = useProjectContext()

    const [isOpen, setIsOpen] = useState<boolean>(false)
    useEffect(() => {
    }, [isOpen])
    const handleDropDown = () => {
        if (!isOpen) {
            setIsOpen(true)
        }
        if (isOpen) {
            setIsOpen(false)
        }
    }
    const handleStatus = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
        const target = e.target as Element
        target.id == "waiting" ? setStatus({ status: "waiting" }) : setStatus({ status: "paid" })
        console.log(target.id)
    }
    return (
        <div>
            <p> Status</p>
            <div>
                <p>{status?.status}</p>
                <button onClick={handleDropDown} >ˇ</button>
                {isOpen ? (
                    <ul>

                        <li key={1} id="waiting" onClick={(e) => { handleStatus(e); handleDropDown() }}> waiting</li>
                        <li key={2} id="paid" onClick={(e) => { handleStatus(e); handleDropDown() }}> paid</li>

                    </ul>
                ) : null}
            </div>
        </div>
    )
}
export default Status

