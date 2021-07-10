import './Navbar.scss';
export function Navbar (){
    return (
        <div className={'navbar'}>
            <h1 onClick={()=>{window.location.reload()}}>BookList</h1>
        </div>
    )
}

