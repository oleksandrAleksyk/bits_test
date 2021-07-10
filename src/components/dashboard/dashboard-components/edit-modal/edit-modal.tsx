import {useEffect, useState} from "react";
import './edit-modal.scss';
import store from "../../../../common/store/store";
export default function EditModal(props:any){
        const [formHasError, setErrorState] = useState(false);
        const [titleError,setTitleError] = useState(false);
        const [authorError,setAuthorError] = useState(false);
        const [isbnError,setISBNError] = useState(false);
        const [categoryError,setCategoryError] = useState(false);
        const [title,setTitle] = useState(props.data.title);
        const [author,setAuthor] = useState(props.data.author);
        const [category,setCategory] = useState(props.data.category);
        const [isbn,setISBN] = useState(props.data.isbn);
        const [id] = useState(props.data.id);

        useEffect(()=>{
            if(titleError || authorError || isbnError || categoryError){
                setErrorState(true);
            } else {
                setErrorState(false)
            }
        },[titleError,authorError,isbnError,categoryError])

        function ValidateTitle(value:string){
            if(value===""){
                setTitleError(true);
                setTitle(value)
            } else {
                setTitleError(false);
                setTitle(value)
            }
        }

        function ValidateAuthor(value:string){
            if(value===""){
                setAuthorError(true);
                setAuthor(value)
            } else {
                setAuthorError(false);
                setAuthor(value)
            }
        }
        function ValidateISBN(value:string){
            if(value===""){
                setISBNError(true);
                setISBN(value)
            } else {
                setISBNError(false);
                setISBN(value)
            }
        }
        function ValidateCategory(value:string){
            if(value===""){
                setCategoryError(true);
                setCategory(value)
            } else {
                setCategoryError(false);
                setCategory(value)
            }
        }
        return(
            <div className={'edit-modal'}>
                <div className={formHasError?"adder-form-error":""}>

                    <label>Book Title</label>
                    <input
                        className={titleError?"adder-input-error":""}
                        type={'text'}
                        placeholder={'ex. Alice in the Wonderland'}
                        value={title}
                        onChange={(event) => {ValidateTitle(event.target.value)}}
                    />

                    <label>Book Author</label>
                    <input
                        className={authorError?"adder-input-error":""}
                        type={'text'}
                        placeholder={'ex. Lewis Carroll'}
                        value={author}
                        onChange={(event)=>{ValidateAuthor(event.target.value)}}
                    />

                    <label>Book ISBN</label>
                    <input
                        className={isbnError?"adder-input-error":""}
                        type={'number'}
                        placeholder={'ex. 9783863524241'}
                        value={isbn}
                        onChange={(event)=>{ValidateISBN(event.target.value)}}
                    />


                    <label>Book Category</label>
                    <select
                        value={category}
                        className={categoryError?"adder-input-error":""}
                        onChange={(event)=>{ValidateCategory(event.target.value)}}
                    >
                        <option value={""}>-</option>
                        <option value={'drama'}>drama</option>
                        <option value={'fantasy'}>fantasy</option>
                    </select>
                    { formHasError?
                        <h5>Fill All Fields</h5> : null
                    }
                    <button
                        className={'adder-button'}
                        disabled={formHasError}
                        onClick={() => {
                            ValidateTitle(title);
                            ValidateAuthor(author);
                            ValidateCategory(category);
                            ValidateISBN(isbn);
                            if (!formHasError) {
                                store.editBook({
                                    title: title,
                                    author: author,
                                    category: String(category),
                                    isbn: Number(isbn),
                                    id: id,
                                })
                            }
                        }}
                    >Edit Book</button>

                    <button
                        className={'adder-button'}
                        onClick={()=>{props.close()}}
                    >
                        Close
                    </button>
                </div>
            </div>
        )
    }






