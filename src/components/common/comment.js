import React, { Component } from 'react';
import Score from "./score";

class Comment extends Component {
    render() {
        const {score, sizeScore} = this.props;
        return (
            <div className="mb-4">
                <div className="d-flex flex-rơw">
                    <img alt="" className="img-avatar mr-2" style={{borderRadius: "50%", height: "50px", width: "50px"}} src="https://sohanews.sohacdn.com/thumb_w/660/2016/7-avatar-1478435729759-0-214-355-786-crop-1478435953995.jpg" />
                    <div className="">
                        <div>
                            <b>Lê Văn Hồng Quân</b>
                        </div>
                        <span>11/09/2019</span>
                    </div>
                    <div className="ml-auto">
                        <Score select={true} sizeScore={sizeScore}>{score}</Score>
                    </div>
                </div>
                <div>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </div>
                <span className="thumbs-up">
                    <i className="fa fa-thumbs-up fa-sm"></i>
                    <span className="count">50</span>
                </span>

                <span className="thumbs-down">
                    <i className="fa fa-thumbs-down"></i>
                    <span className="count">50</span>
                </span>
            </div>
        );
    }
}

export default Comment;