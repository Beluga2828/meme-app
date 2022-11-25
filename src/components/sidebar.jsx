import { Link } from "react-router-dom";

export default function Sidebar(){
    return( 
        <nav>
        <div className="sidebar2">
        <div><Link to='creatememe'  //relative='path'
         style={{textDecoration:'none',color: 'whitesmoke'}}>Create Meme</Link></div>
       <div> <Link to='uploadmeme' //relative="path" 
        style={{textDecoration:'none',color: 'whitesmoke'}}>Upload pic</Link></div>
        </div>
        </nav>
    
    )
}