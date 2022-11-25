import TaskCard from "./tasks/TaskCard";
import ProjectCard from './projects/ProjectTable'
import InvoiceTable from "./invoice/InvoiceTable";
const Details = () => {
    return (
        <>
            <TaskCard />
            <ProjectCard />
            <InvoiceTable />
        </>
    )
}
export default Details