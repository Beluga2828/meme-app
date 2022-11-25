import { useState } from "react"
import { useEffect } from "react"
import { saveAs } from "file-saver";

export default function Creatingmeme(){
    const [form,setForm]=useState({
        firstName:'',
        middleName:'',
        lastName:'',
        randomImg:"https://i.imgflip.com/1bij.jpg"
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
    function handleChange(e){
        setForm((prevState)=>({
                ...prevState,
                randomImg: URL.createObjectURL(e.target.files[0])
            }))
        
    }
    return(
        <>
        <div  className='memeclass' >
            <div style={{
                position: 'relative',
                fontFamily:'monospace'
            }} className='image-class'>
                <p style={{
                position: 'absolute',
                left:'5%',
                color:'white'
                 }}>
                {form.firstName}</p>
                <p style={{
                position: 'absolute',
                top:'30%',
                left:'5%',
                color:'white'
            }}
                >{form.middleName}</p>
                <p style={{
                position: 'absolute',
                bottom:'10%',
                left:'5%',
                color:'white',
            }}>{form.lastName}</p>
                <img src={form.randomImg} width={575} height={510} className='imgClass' alt='' />
                </div>
            <div className="form3">
            <form>
                <label>First field:
                    <input type='text'  name="firstName" onChange={(e) => setForm({ ...form, firstName: e.target.value })} value={form.firstName} placeholder='first field' multiple/>
                </label><br/>
                <label>Middle field:
                    <input type='text' name="middleName" onChange={(e) => setForm({ ...form, middleName: e.target.value })} value={form.middleName} placeholder='middle field'></input>
                </label><br/>
                <label>Last Field:
                    <input type='text' name="lastName" onChange={(e) => setForm({ ...form, lastName: e.target.value })} value={form.lastName} placeholder='last field' />
                </label><br/>
            </form>
            <button type="button" onClick={()=>{saveAs(`${form.randomImg}`,'image.jpg')}} className="button4" style={{}}>Download</button>
                <input type='file' multiple accept='image/*'onChange={handleChange}  />
                <button className='button4' onClick={handleClick} style={{
                                                      margin:'10px',
                                                      padding:'10px'}}>Click to get an Image</button>
            </div>
        </div>
        </>
    )
}