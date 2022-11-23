import { Outlet, Link } from "react-router-dom";
export default function Root() {
    return (
        <>
            <div >
                <Outlet />
                <nav>
                    <ul >
                        <li>
                            <Link to={`/details`}>details</Link>
                        </li>
                        <li>
                            <Link to={`/overview`}>overview</Link>
                        </li>
                        <li>
                            <Link to={`/invoice`}>invoice</Link>
                        </li>
                    </ul>
                </nav>

                {/* other elements */}

            </div>

        </>
    );
}