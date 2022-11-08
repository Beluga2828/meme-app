import { useState } from "react"
import { useEffect } from "react";

export default function Creatingmeme(){
    const [form,setForm]=useState({
        firstName:'',
        middleName:'',
        lastName:'',
        randomImg:'https://i.imgflip.com/40b1gx.jpg'
    });
    const [img,setImg]=useState([]);
    useEffect(()=>{
        fetch('https://api.imgflip.com/get_memes')
        .then(res=>res.json())
        .then(data=>setImg(data.data.memes))
},[]);
    
    function handleClick(){
        let randomNumber=Math.floor(Math.random() * img.length);
        let url=img[randomNumber]['url'];
        setForm((prevState)=>({
            ...prevState,
            randomImg: url
        }))
    }
    
    return(
        <>
        <div style={{display: 'flex',flexDirection:'column'}} className='memeclass' >
            <div>
            <form>
                <label>First field:
                    <input type='text' name="firstName" onChange={(e) => setForm({ ...form, firstName: e.target.value })} value={form.firstName} placeholder='first field' />
                </label>
                <label>Middle field:
                    <input type='text' name="middleName" onChange={(e) => setForm({ ...form, middleName: e.target.value })} value={form.middleName} placeholder='middle field'></input>
                </label>
                <label>Last Field:
                    <input type='text' name="lastName" onChange={(e) => setForm({ ...form, lastName: e.target.value })} value={form.lastName} placeholder='last field' />
                </label>
                
            </form>
            </div>
            <div style={{
                position: 'relative',
                fontFamily:'monospace'
            }}>
                <p style={{
                position: 'absolute',
                left:'10%',
                color:'whitesmoke',
                fontSize:'50px'
                 }}>
                {form.firstName}</p>
                <p style={{
                position: 'absolute',
                top:'30%',
                left:'10%',
                color:'whitesmoke',
                fontSize:'50px'
            }}
                >{form.middleName}</p>
                <p style={{
                position: 'absolute',
                bottom:'10%',
                left:'10%',
                color:'whitesmoke',
                fontSize:'50px',
            }}>{form.lastName}</p>
                <img src={form.randomImg} width={500} height={450} />
                <button onClick={handleClick} style={{backgroundColor: "red",marginBottom:'50px',color: 'whitesmoke',padding:'10px',border:'none',borderRadius:'5px'}}>click to get AN IMAGE</button>
            </div>
        </div>
        </>
    )
}