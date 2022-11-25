import { Outlet } from "react-router-dom";
//import Creatingmeme from "./creatingmem";
import Header from "../components/header";
import Sidebar from "../components/sidebar";


export default function Main(){
    return(
        <>
        <div className="main-page">
            <div className="header"><Header /></div>
            <div className="flex-container">
                <div style={{
                            // flexBasis:'18%',
                             backgroundImage:'linear-gradient(to right ,purple,skyblue)',
                             alignContent: 'space-between'
                            }}
                            className='sidebar1'><Sidebar  /></div>
                <div  style={{
                   // flexBasis:'72%'
                    }} className='content'><Outlet /></div>
            </div>
        </div>
        </>
    )
}