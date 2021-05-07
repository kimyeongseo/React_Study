import React, { Component } from 'react';

class AddBar extends Component {
    formRef = React.createRef();
    inputRef = React.createRef();

    onSubmit = (event) => {
        event.preventDefault();
        const name = this.inputRef.current.value;
        name && this.props.onAdd(name);
        //this.inputRef.current.value = '';
        this.formRef.current.reset();
    };

    render() {
        return (
            <form
                ref={this.formRef}
                onSubmit={this.onSubmit}>
                <input
                    ref={this.inputRef}
                    className='addBar'
                    type='text'
                    placeholder='habbit' />
                <button className='addBnt'>Add</button>
            </form>
        );
    }
}

export default AddBar;