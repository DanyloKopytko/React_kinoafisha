import React, {Component} from "react";

import './Header.css';

import {pinballLogo, lupa} from '../../assets/imgs';

import {BurgerMenu, userInfo, Toggle} from '../index';

export default class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchQuery: '',
            isDarkTheme: true
        };

        this.onToggleClick = this.onToggleClick.bind(this)
    }

    onInputHandle = (event) => {
        this.setState({searchQuery: event.target.value});
    };

    onToggleClick() {
        const {isDarkTheme} = this.state;
        const {setDarkTheme} = this.props;

        this.setState({
            isDarkTheme: !isDarkTheme
        });

        setDarkTheme(isDarkTheme)
    }

    render() {
        const {isDarkTheme} = this.state;
        const {darkTheme} = this.props;

        return (
            <header className={darkTheme ? 'headerDarkTheme' : ``}>
                <div>
                    <a href="/"><img src={pinballLogo} alt="Pinball logo"/></a>
                    <div>
                        <BurgerMenu/>
                        <input type="text" onChange={this.onInputHandle}/>
                    </div>
                    <Toggle
                        checked={isDarkTheme}
                        handleToggle={this.onToggleClick}
                    />
                    {userInfo()}
                </div>
                <div className={'responsiveHeader'}>
                    <BurgerMenu/>
                    <a href="/"><img src={pinballLogo} alt="Pinball logo"/></a>
                    <button><img src={lupa} alt="lupa"/></button>
                </div>
            </header>
        );
    }
}
