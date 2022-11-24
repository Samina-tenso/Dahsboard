import ProjectDropDown from "./ProjectDropdown";
import TaskList from "./TaskList";
import InvoiceName from "./InvoiceName";
import HourlyRate from "./HourlyRate";
import Status from "./Status";
const Invoice = () => {
    // on created get current date, set statusIndication.date to current date
    return (
        <div>
            <Status />
            <ProjectDropDown />
            <InvoiceName />
            <TaskList />
            <HourlyRate />
        </div>
    )
}

export default Invoice