import React from 'react';
import PropTypes from "prop-types";


class TodoItem extends React.Component {


    prototype = {
        todo: PropTypes.object.isRequired
    };

    getStyle = () => {
             return {
                 background: '#f4f4f4',
                 padding: '10px',
                 borderBottom: '1px #cc dotted',
                 textDecoration: this.props.todo.completes? 'line-through':'none'
             }
    };


    render() {
        const {id, title} = this.props.todo;

        return (


            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={ this.props.markComplete}/>{' '}
                    {this.props.todo.title}
                </p>
            </div>
        )
    }


}


export default TodoItem;
