import React, { Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './style.scss';

class Prova extends Component{
    render(){
        return(
            <div className={s.norm}>
                Look here
            </div>
        )
    }
}

export default withStyles(s)(Prova);
