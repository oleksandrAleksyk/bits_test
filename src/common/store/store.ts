import {action, makeAutoObservable, observable} from "mobx";
import {BooksInterface} from "../interfaces/books-interface";
class Store{
    constructor() {
        makeAutoObservable(this,{
            books: observable,
            needUpdate: observable,
            getBooks: action,
            addBook: action,
            editBook:action,
            changeUpdateState: action,
        })
        this.getBooks();
    }
    books = [];
    needUpdate=true;
    changeUpdateState(value:boolean){
        console.log("changed")
        this.needUpdate = value;
    }
    getBooks(){
        fetch("http://localhost:3006/books")
            .then((res)=>{return res.json()})
            .then((res)=>{this.books=res})
        this.changeUpdateState(true);
    }
    addBook(data:BooksInterface){
        const state = Object.values(data).some((item)=>{return item===""});
        console.log(state);
        if(!state) {
            fetch("http://localhost:3006/books", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    title: data.title,
                    author: data.author,
                    category: data.category,
                    isbn: data.isbn,
                })
            })
                .then((res) => {
                    if (res.status === 201 || res.status === 204) {
                        alert("Successfully added");
                        window.location.replace('/books');
                        this.getBooks();
                    }
                })
        } else {
            console.log("some data is empty")
        }
    }

    deleteBook(id: number | undefined) {
        const confirmState: any = window.confirm("Are u sure?");
        if (confirmState) {
            fetch("http://localhost:3006/books/" + id, {
                method: "DELETE"
            })
                .then((res) => {
                    if (res.status === 200 || res.status === 204) {
                        this.getBooks();
                        this.changeUpdateState(true);

                    }
                })
        }
    }


    editBook(data:BooksInterface){
            fetch("http://localhost:3006/books/"+data.id, {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    title: data.title,
                    author: data.author,
                    category: data.category,
                    isbn: data.isbn,
                })
            })
                .then((res) => {
                    if (res.status===200) {
                        this.getBooks();
                        alert("Successfully edited");
                    }
                })

    }
}
export default new Store();
