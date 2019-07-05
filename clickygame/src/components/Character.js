import React, { Component } from "react";

class Character extends Component {
    handleClick = (event) => {
        event.preventDefault();
        this.setState({ clicked: true });
        console.log("The clicked state is : " + this.state.clicked);
    }

    constructor(props) {
        super(props);

        this.state = {
            id: props.id,
            name: props.name,
            image: props.image,
            clicked: props.clicked
        };
    }

    render() {
        return (
            <div className="card">
            <div className="img-container">
                <button className="btn btn-primary" onClick={this.handleClick}>
                    <img alt={this.state.name} src={this.state.image} />
                </button>
            </div>
        </div>
        );
    }
}

export default Character;