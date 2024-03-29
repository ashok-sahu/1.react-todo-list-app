import React, { Component } from 'react'

export default class TodoItems extends Component {

    render() {
        const {title,handleDelete,handleEdit} = this.props;
        return (
            <li className='list-group-item text-capitalize d-flex justify-content-between my-2'>
                <h6>{title}</h6>
                <div className='todo-icon'>
                    <span className='mx-2 text-success btn ' onClick={handleEdit}><i className='material-icons greeen'>create</i></span>
                    <span className='mx-2 text-danger btn ' onClick={handleDelete}><i className='material-icons red '>delete</i></span>
                </div>
            </li>
        )
    }
}
