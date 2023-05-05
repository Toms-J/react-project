import React, { Component } from 'react'

class Profile extends React.Component {

    constructor(props) {
        super(props);
        console.log('constructor')
    }

    static getDerivedStateFromProps() {
        console.log('getDerivedStateFromProps');
    }

    shouldComponentUpdate() {
        if (this.props.count > 100) {
            return true;
        }
        return false;
    }

    render() {
        console.log('render');
        return <h1>Profile - {this.props.username}</h1>
    }

    componentDidMount() {
        console.log('componentDidMount');
    }
}

export default Profile;