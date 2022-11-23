import ProjectDropDown from "./ProjectDropdown";
import TaskList from "./TaskList";
import InvoiceName from "./InvoiceName";
import HourlyRate from "./ProjectHours";
const Invoice = () => {

    return (
        <div>
            <ProjectDropDown />
            <InvoiceName />
            <TaskList />
            <HourlyRate />
        </div>
    )
}

export default Invoice