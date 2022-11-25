import download from '../images/download.png';

export default function Header(){
    return(
        <>
        <div><img src={download} alt='Beluga cat' className='img4' /></div>
        <div><h2 style={{ 
               color:'white',
               textShadow: '1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue'                                                                                                        
         }}>Memes Making app</h2>
        </div></>
    );
}