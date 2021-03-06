import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component {
   
    getStyle(){
            return {
                background: '#f4f4f4',
                padding: '10px',
                borderBottom: '1px #ccc dotted',
                textDecoration: this.props.todo.completed? 'line-through' : 'none'
            }
    }

    btnStyle(){
        return {
            background: '#ff0000',
            color: '%fff',
            border: 'none',
            padding: '5px 9px',
            borderRadius: '50%',
            cursor:'pointer',
            float: 'right'  
        }
    }

      
    render() {
        const { id, title } = this.props.todo
        return (
            <div style ={this.getStyle()}> 
                <p>
                    <input type ="checkBox" onChange={this.props.markComplete.bind(this, id)}/>{' '}
                    {title}
                    <button style={this.btnStyle()} onClick={this.props.delTodo.bind(this, id)}>X</button>
                </p>
            </div>
        )
    } 
}

// PropTypes
TodoItem.propTypes= {
    todo: PropTypes.array.isRequired 
}


export default TodoItem
