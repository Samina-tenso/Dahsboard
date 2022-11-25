import Invoice from "../Invoice/Invoice"
import { useState } from 'react'
import { useProjectContext } from "../../Hooks/useProjectContext"
import Table from 'react-bootstrap/Table'
import { sub, formatISO, eachDayOfInterval } from 'date-fns'
import { useEffect } from "react"


const Earnings = () => {
    const { invoices } = useProjectContext()
    const [totalEarnings, setTotalEarnings] = useState<number>()
    useEffect(() => {
        getTotalEarnings()
    }, [invoices])
    function getTotalEarnings() {
        let newArray: number[] = []
        let today = formatISO(new Date(), { representation: 'date' })
        let priorDate = sub(new Date(today), {
            years: 1
        })
        let formatPrior = formatISO(new Date(priorDate), { representation: 'date' })
        let datesArray = eachDayOfInterval({
            start: new Date(formatPrior),
            end: new Date(today)
        })
        datesArray.map(a => {
            const arrDate: string[] = [] = [formatISO(new Date(a), { representation: 'date' })]
            arrDate.map(d => {
                invoices.map(invoice => {
                    if (invoice && invoice.totalPrice && d === invoice.created && invoice.status == "paid") {
                        let earnings: number = invoice.totalPrice
                        newArray.push(earnings)
                    }
                })
            })
        })
        console.log(newArray)
        setTotalEarnings(newArray.reduce((next, sum) => { return next + sum }, 0))
        console.log(totalEarnings)
        //invoice.created == d && invoice.status == "paid" && invoice.totalPrice)
    }
    return (
        <Table>
            <thead>
                <tr>
                    <th>Total earnings last 365 days</th>
                </tr>
            </thead>
            <tbody>
                < tr >
                    <td><h3>{totalEarnings}</h3></td>
                </tr>
            </tbody>
        </Table>
    )
}
export default Earnings