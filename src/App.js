import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoList from './components/TodoList';
import TodoInputs from './components/TodoInputs';
import uuid from 'uuid';

export default class App extends React.Component {

  


  state={
    items:[],
    item:'',
    id:uuid(),
    editItem:false
  }
  handleChange = (e) => {
    this.setState({
      item:e.target.value
      });
  };
  handleSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      id:this.state.id,
      title:this.state.item
    }
    console.log(newItem)
    const updateItems=[...this.state.items,newItem];

    this.setState({
      items:updateItems,
      item:"",
      id:uuid(),
      editItem:false
    });
  }
   clearlist = () => {
     this.setState({
       items:[]
     })
  }
  handleDelete = (id) => {
    const filteredItems=this.state.items.filter(item => item.id !== id)
    this.setState({
      items:filteredItems
    });
  };
  handleEdit = (id) => {
    console.log(id)
    const filteredItems=this.state.items.filter(item => item.id !== id)
    const selectedItems=this.state.items.find(item=>item.id===id)
    console.log(selectedItems)
    console.log(filteredItems)
    this.setState({
      items:filteredItems,
      item:selectedItems.title,
      editItem:true,
      id:id
    });
  }

  render(){
    const cssStyle = {
      color:'red',
      backgroundColor:'yellow',
      fontFamily:"'Acme', cursive",
      border:'2px solid pink',
      opacity:1.0
    }
  return (
    <div className='container'>
      <div className='row jumbotron jumbotron-fluid'>
        <div className='col-10 mx-auto col-md-8 mt-4'>
          <h3 className='text-capitalize text-center' style={cssStyle}>
            todo input
          </h3>
        <TodoInputs item={this.state.item} handleChange={this.handleChange} handleSubmit={this.handleSubmit} editItem={this.state.editItem}/>
        <TodoList items={this.state.items} clearList={this.clearlist} handleDelete={this.handleDelete} handleEdit={this.handleEdit}/>
        </div>
      </div>
    </div> 
  );
  }
}


