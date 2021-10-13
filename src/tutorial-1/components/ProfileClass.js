import React, { Component } from 'react';

export default class ProfileClass extends Component {
    render() {
        const {name, registerAt} = this.props;
        return (
            <>
                <p>Привет, <b>{name}</b></p>
                <p>Дата регистрации: {registerAt.toLocaleDateString()}</p>
            </>
        )
    }
}

