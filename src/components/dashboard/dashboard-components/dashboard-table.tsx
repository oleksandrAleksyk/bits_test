import './dashboard-table.scss';
import {BooksInterface} from "../../../common/interfaces/books-interface";
import {DashboardTableSingleRow} from "./dashboard-table-single-row";
import store from "../../../common/store/store";
import {useEffect, useState} from "react";


export function DashboardTable(){
    const {books} = store;
    const {needUpdate} = store;
    const [load,setLoadState] = useState(store.needUpdate);
    setInterval(()=>{
        setLoadState(store.needUpdate);
    },500)
    useEffect(()=>{
        if(load===true || needUpdate===true){
            setTimeout(()=>{
                store.changeUpdateState(false);
                setLoadState(store.needUpdate);
            },1000)
        }
    },[needUpdate,load])
    return(
        <div className={'table-wrapper'}>
            {!load?
                <table className={'table'}>
                    <thead>
                    <tr>
                        <th><p>Title</p></th>
                        <th><p>Author</p></th>
                        <th><p>Category</p></th>
                        <th><p>ISBN</p></th>
                        <th><p>Control</p></th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        books.map((item: BooksInterface) => (
                            <DashboardTableSingleRow
                                key={item.id}
                                id={item.id}
                                title={item.title}
                                category={item.category}
                                author={item.author}
                                isbn={item.isbn}
                            />
                        ))
                    }
                    </tbody>

                </table> :
                <div className={'loader rotate-center'}></div>
            }

        {/*<table className={'table'}>*/}
        {/*    <tr>*/}
        {/*        <th><p>Title</p></th>*/}
        {/*        <th><p>Author</p></th>*/}
        {/*        <th><p>Category</p></th>*/}
        {/*        <th><p>ISBN</p></th>*/}
        {/*    </tr>*/}
        {/*    {books.map((item:BooksInterface)=>(*/}
        {/*        <tr key={item.id}>*/}
        {/*            <td><p>{item.title}</p></td>*/}
        {/*            <td><p>{item.author}</p></td>*/}
        {/*            <td><p>{item.category}</p></td>*/}
        {/*            <td><p>{item.isbn}</p></td>*/}
        {/*        </tr>*/}

        {/*
        {/*    ))}*/}



        {/*</table>*/}
        </div>
    )
}


