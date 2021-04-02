import React, { Component } from 'react'
import BookService from '../services/BookService';

class CreateBookComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            title: '',
            genre: '',
            isbn: '',
            price: '',
            author: '',
            publisher: '',
            publication: '',
            description: '',
            buy: '',
            imgspath: ''
        }
        this.changeTitleHandler = this.changeTitleHandler.bind(this);
        this.changeGenreHandler = this.changeGenreHandler.bind(this);
        this.changeIsbnHandler = this.changeIsbnHandler.bind(this);
        this.changePriceHandler = this.changePriceHandler.bind(this);
        this.changeAuthorHandler = this.changeAuthorHandler.bind(this);
        this.changePublisherHandler = this.changePublisherHandler.bind(this);
        this.changePublicationHandler = this.changePublicationHandler.bind(this);
        this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
        this.changeBuyHandler = this.changeBuyHandler.bind(this);
        this.changeImgspathHandler = this.changeImgspathHandler.bind(this);

        this.saveOrUpdateBook = this.saveOrUpdateBook.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            BookService.getBookById(this.state.id).then( (res) =>{
                let book = res.data;
                this.setState({
                    title: book.title,
                    genre: book.genre,
                    isbn: book.isbn,
                    price: book.price,
                    author: book.author,
                    publisher: book.publisher,
                    publication: book.publication,
                    description: book.description,
                    buy: book.buy,
                    imgspath: book.imgspath 
                });
            });
        }        
    }
    saveOrUpdateBook = (e) => {
        e.preventDefault();
        let book = {
            title: this.state.title, 
            genre: this.state.genre,
            isbn: this.state.isbn,
            price: this.state.price,
            author: this.state.author,
            publisher: this.state.publisher,
            publication: this.state.publication,
            description: this.state.description,
            buy: this.state.buy,
            imgspath: this.state.imgspath
        };
        // console.log('book => ' + JSON.stringify(book));

    
        if(this.state.id === '_add'){
            BookService.createBook(book).then(res =>{
                this.props.history.push('/books');
            });
        }else{
            BookService.updateBook(book, this.state.id).then( res => {
                this.props.history.push('/books');
            });
        }
    }
    
    changeTitleHandler= (event) => {
        this.setState({title: event.target.value});
    }
    changeGenreHandler= (event) => {
        this.setState({genre: event.target.value});
    }
    changeIsbnHandler= (event) => {
        this.setState({isbn: event.target.value});
    }
    changePriceHandler= (event) => {
        this.setState({price: event.target.value});
    }
    changeAuthorHandler= (event) => {
        this.setState({author: event.target.value});
    }
    changePublisherHandler= (event) => {
        this.setState({publisher: event.target.value});
    }
    changePublicationHandler= (event) => {
        this.setState({publication: event.target.value});
    }
    changeDescriptionHandler= (event) => {
        this.setState({description: event.target.value});
    }
    changeBuyHandler= (event) => {
        this.setState({buy: event.target.value});
    }
    changeImgspathHandler= (event) => {
        this.setState({imgspath: event.target.value});
    }


    cancel(){
        this.props.history.push('/');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Book</h3>
        }else{
            return <h3 className="text-center">Update Book</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Title: </label>
                                            <input placeholder="Title" name="title" className="form-control" 
                                                value={this.state.title} onChange={this.changeTitleHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Genre: </label>
                                            <input placeholder="Genre" name="genre" className="form-control" 
                                                value={this.state.genre} onChange={this.changeGenreHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Isbn: </label>
                                            <input placeholder="Isbn" name="isbn" className="form-control" 
                                                value={this.state.isbn} onChange={this.changeIsbnHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Price: </label>
                                            <input placeholder="Price" name="price" className="form-control" 
                                                value={this.state.price} onChange={this.changePriceHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Author: </label>
                                            <input placeholder="Author" name="author" className="form-control" 
                                                value={this.state.author} onChange={this.changeAuthorHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Publisher: </label>
                                            <input placeholder="Publisher" name="publisher" className="form-control" 
                                                value={this.state.publisher} onChange={this.changePublisherHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Publication: </label>
                                            <input placeholder="Publication" name="publication" className="form-control" 
                                                value={this.state.publication} onChange={this.changePublicationHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Description: </label>
                                            <input placeholder="Description" name="description" className="form-control" 
                                                value={this.state.description} onChange={this.changeDescriptionHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Buy: </label>
                                            <input placeholder="Buy" name="buy" className="form-control" 
                                                value={this.state.buy} onChange={this.changeBuyHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Img Path: </label>
                                            <input placeholder="Img Path" name="imgspath" className="form-control" 
                                                value={this.state.imgspath} onChange={this.changeImgspathHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveOrUpdateEmployee}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default CreateBookComponent