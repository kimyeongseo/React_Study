import React, { Component } from 'react';
import AddBar from './addBar';
import Habit from './habit';

class Habits extends Component {
    handleIncrement = habit => {
        this.props.onIncrement(habit);
    };

    handleDecrement = habit => {
        this.props.onDecrement(habit);
    };

    handleDelete = habit => {
        this.props.onDelete(habit);
    };

    handleAdd = name => {
        this.props.onAdd(name);
    };

    render() {
        return (
            <>
                <AddBar onAdd={this.handleAdd} />
                <ul>
                    {this.props.habit.map(habit => (
                        <Habit
                            key={habit.id}
                            habit={habit}
                            onIncrement={this.handleIncrement}
                            onDecrement={this.handleDecrement}
                            onDelete={this.handleDelete} />
                    ))}
                </ul>
                <button
                    className='habit-reset'
                    onClick={this.props.onReset}>
                    All Reset</button>
            </>
        );
    }
}

export default Habits;
