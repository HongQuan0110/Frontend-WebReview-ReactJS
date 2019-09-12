import React, { Component } from 'react';
import classNames from "classnames";

class Score extends Component {
    constructor(props){
        super(props);
    }

    render() {
        const {children, sizeScore, select} = this.props;
        let background;
        if(!select){
            background = "bg-Unselect-Score"
        }
        else if(children > 6){
            background = "bg-Hight-Score";
        }
        else if (children > 3) {
            background = "bg-Medium-Score";
        }
        else{
            background = "bg-Low-Score";
        }

        return (
            <div className={classNames(
                'score', 
                sizeScore, 
                background
            )}>{children}</div>
        );
    }
}

export default Score;