import {BooksInterface} from "../../../common/interfaces/books-interface";
import store from '../../../common/store/store';
import EditModal from "./edit-modal/edit-modal";
import {useState} from "react";

export function DashboardTableSingleRow(props: BooksInterface) {
    const [showModal,setModalState] = useState(false);
    return (
        <>
        <tr className={'single-row'}>
            <td><p>{props.title}</p></td>
            <td><p>{props.author}</p></td>
            <td><p>{props.category}</p></td>
            <td><p>{props.isbn}</p></td>
            <td className={'control'}>
                <p>
                <span onClick={()=>{setModalState(true)}}>Edit</span>
                <span onClick={()=>{store.deleteBook(props.id)}} >Delete</span>
                </p>
            </td>
        </tr>
            {showModal ?
                <EditModal
                    data={{
                        title: props.title,
                        author: props.author,
                        category: props.category,
                        isbn: props.isbn,
                        id: props.id,
                    }}
                    type={'edit'}
                    close={() => {
                        setModalState(false)
                    }}/> : null
            }
        </>
    )
}
