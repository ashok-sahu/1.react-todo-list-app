import React, { Component } from 'react'
import TodoItems from './TodoItems'

export default class TodoList extends Component {
    render() {

        const{items,clearList,handleDelete,handleEdit}=this.props;

        const cssStyle = {
            color:'green',
            backgroundColor:'yellow',
            fontFamily:"'Satisfy', cursive",
            border:'2px solid pink',
            opacity:1.0,
            transition:'translate'
          }
        return (
            <ul className='list-group my-5'>
                <h3 className='text-center text-capitalize' style={cssStyle}>todo list</h3>
                {
                    items.map( item => {
                        return (
                            < TodoItems key={item.id} title={item.title} handleEdit={()=>handleEdit(item.id)} handleDelete={()=>handleDelete(item.id)}/>
                        )
                    })
                }
                <button type='button' className='btn btn-danger text-capitalize btn-block my-5' onClick={clearList}>clear list</button>
            </ul>
           
        )
    }
}
