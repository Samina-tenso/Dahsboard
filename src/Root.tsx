import { Outlet, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav } from "react-bootstrap";
export default function Root() {
    return (

        <div >
            <Outlet />

            <Nav className="justify-content-center"
                activeKey="/details"
            >
                <Nav.Item>
                    <Nav.Link href='/details'>Details</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href='/overview'>Overivew</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href='invoice'>Invoice</Nav.Link>
                </Nav.Item>

            </Nav>
        </div>
    );
}