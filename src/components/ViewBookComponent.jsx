import React, { Component } from 'react'
import BookService from '../services/BookService'

class ViewBookComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            book: {}
        }
    }

    componentDidMount(){
        BookService.getBookById(this.state.id).then( res => {
            this.setState({Book: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Book Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Title: &blsp;</label>
                            <div> {this.state.book.title} </div>
                        </div>

                        <div className = "row">
                            <label> Genre: &blsp;</label>
                            <div> {this.state.book.genre} </div>
                        </div>

                        <div className = "row">
                            <label> Isbn: &blsp;</label>
                            <div> {this.state.book.isbn} </div>
                        </div>

                        <div className = "row">
                            <label> Price: &blsp;</label>
                            <div> {this.state.book.price} </div>
                        </div>

                        <div className = "row">
                            <label> Author: &blsp;</label>
                            <div> {this.state.book.author} </div>
                        </div>

                        <div className = "row">
                            <label> Publisher: &blsp;</label>
                            <div> {this.state.book.publisher} </div>
                        </div>

                        <div className = "row">
                            <label> Publication: &blsp;</label>
                            <div> {this.state.book.publication} </div>
                        </div>

                        <div className = "row">
                            <label> Description: &blsp;</label>
                            <div> {this.state.book.description} </div>
                        </div>

                        <div className = "row">
                            <label> Buy: &blsp;</label>
                            <div> {this.state.book.buy} </div>
                        </div>

                        <div className = "row">
                            <label> Img Path: &blsp;</label>
                            <div> {this.state.book.imgspath} </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ViewBookComponent