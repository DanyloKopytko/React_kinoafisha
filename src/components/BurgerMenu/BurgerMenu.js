import React, {Component} from "react";

import './BurgerMenu.css';

import { HamburgerSpin  } from 'react-animated-burgers';

export default class BurgerMenu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isActive: false
        };
    }

    toggleButton = () => {
        this.setState({
            isActive: !this.state.isActive
        })
    };

    render() {
        return (
            <HamburgerSpin  isActive={this.state.isActive} toggleButton={this.toggleButton} buttonColor="#FFBC67" barColor="white" />
        );
    }
}
