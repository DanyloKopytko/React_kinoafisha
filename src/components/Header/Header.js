import React, {Component} from "react";

import './Header.css';

import {pinballLogo, userAvatar} from '../../assets/imgs';

import {BurgerMenu} from '../index';

export default class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchQuery: ''
        }
    }

    onInputHandle = (event) => {
        this.setState({searchQuery: event.target.value});
    };

    render() {
        return (
            <header>
                <a href="/"><img src={pinballLogo} alt="Pinball logo"/></a>
                <div>
                    <BurgerMenu/>
                    <input type="text" onChange={this.onInputHandle}/>
                </div>
                <div>
                    <img src={userAvatar} alt="userAvatar"/>
                    <p>Welcome John</p>
                </div>
            </header>
        );
    }
}
