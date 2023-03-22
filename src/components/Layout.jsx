import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { useContext } from "react";
import { nameContext } from "./ContextExampleParent";
export default function Layout() {
    const parentName = useContext(nameContext);

    return (
        <>
            <Navbar />
            <div className="container">
                <Outlet />
            </div>
            {parentName}
        </>
    );

}