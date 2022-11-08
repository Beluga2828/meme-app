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
                <div style={{flex: '18%',
                             backgroundColor:'purple',
                             alignContent: 'space-between'
                            }}
                            className='sidebar1'><Sidebar  /></div>
                <div style={{flex: '82%'}} className='content'><Outlet /></div>
            </div>
        </div>
        </>
    )
}