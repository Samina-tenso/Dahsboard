import ProjectDropDown from "../details/projects/ProjectDropdown";
import InvoiceTaskList from "./InvoiceTaskList";
import InvoiceName from "./InvoiceName";
import HourlyRate from "./InvoiceHourlyRate";
import StatusDropDown from "./StatusDropDown";
import { useProjectContext } from '../../Hooks/useProjectContext'
import { useEffect, useState } from 'react'
import { formatISO, addDays } from "date-fns";
import { useAxiosFetch } from "../../Hooks/useAxiosFetch";
import { AxiosError } from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from "react-bootstrap";

const Invoice = () => {
    const [showDate, setShowDate] = useState<string>()
    const [showDueDate, setShowDueDate] = useState<string>()
    const [createdInvoice, setCreatedInvoice] = useState<boolean>(false)
    const { setInvoices, created, setCreatedDate, setDueDate, status, hourlyRate, projectPrice, invoiceName, selectedProject } = useProjectContext()

    useEffect(() => {
        getCurrentDate()
        getDueDate()
    }, [showDate])

    function getCurrentDate(): void {
        const currentDate = new Date()
        setCreatedDate({ date: new Date() })
        let show: string = formatISO(new Date(currentDate), { representation: 'date' })
        setShowDate(show)
    }

    function getDueDate(): void {
        if (created?.date) {
            let due = addDays(new Date(created?.date), 30)
            setDueDate({ date: due })
            setShowDueDate(formatISO(new Date(due), { representation: 'date' }))
        }
    }
    const CreateInvoice = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const newInvoice: Invoice = {
            status: status?.status,
            name: invoiceName?.name,
            projectName: selectedProject?.title,
            totalPrice: projectPrice?.totalPrice,
            hourlyRate: hourlyRate?.hRate,
            created: showDate,
            dueDate: showDueDate
        }

        useAxiosFetch<Invoice[]>({
            method: "POST",
            url: "/invoices",
            data: newInvoice
        }).then((resp) => {
            if (resp) {
                setInvoices(resp)
                console.log(resp)
                setCreatedInvoice(true)
            } else { console.log(AxiosError) }
        })
    }

    return (
        <Container>
            <Row>
                <Col>  <p>Status: {status?.status}</p> <p>Due in 30 Days:</p><p>{showDueDate}</p></Col><Col> <p>Date: {showDate}</p></Col>
            </Row>
            <StatusDropDown />
            <InvoiceName />
            <ProjectDropDown />
            <InvoiceTaskList />
            <HourlyRate />
            {createdInvoice ? <p> Invoice created!</p> :
                <button type="submit" onClick={(e) => CreateInvoice(e)}> Create Invoice</button>}
        </Container >
    )
}
export default Invoice