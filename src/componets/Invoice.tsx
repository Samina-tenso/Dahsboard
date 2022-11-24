import ProjectDropDown from "./ProjectDropdown";
import TaskList from "./TaskList";
import InvoiceName from "./InvoiceName";
import HourlyRate from "./HourlyRate";
import StatusDropDown from "./StatusDropDown";
import { useProjectContext } from '../Hooks/useProjectContext'
import { useEffect, useState } from 'react'
import { formatISO, addDays } from "date-fns";
import { useAxiosFetch } from "../Hooks/useAxiosFetch";
import { AxiosError } from "axios";

const Invoice = () => {

    // const [invoice, setInvoice] = useState<Invoice | {}>()
    const [showDate, setShowDate] = useState<string>()
    const [showDueDate, setShowDueDate] = useState<string>()
    const { setInvoices, created, setCreatedDate, setDueDate, dueDate, status, hourlyRate, projectPrice, invoiceName, selectedProject } = useProjectContext()

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
        e.preventDefault()
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
            } else { console.log(AxiosError) }
        })
    }

    return (
        <div>
            <p>{status?.status}</p>  <p>Date:</p>   <p>{showDate}</p><p>Due in 30 Days:</p><p>{showDueDate}</p>
            <StatusDropDown />
            <ProjectDropDown />
            <InvoiceName />
            <TaskList />
            <HourlyRate />
            <button type="submit" onClick={(e) => CreateInvoice(e)}> Create Invoice</button>
        </div>
    )
}

export default Invoice