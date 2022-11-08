import download from '../images/download.png';

export default function Header(){
    return(
        <>
        <div><img src={download} alt='Beluga cat' style={{ width: '70%' }} /></div><div><h2 style={{ color: 'whitesmoke' }}>Memes Making app</h2>
        </div></>
    );
}