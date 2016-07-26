import React from 'react';

class Comments extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.renderComponent = this.renderComponent.bind(this);
    // }

    renderComponent(comment, i) {
        return (
            <div className="comment" key={i}>
                <p>
                    <strong>{comment.user}</strong>
                    {comment.text}
                    <button className="remove-comment">&times;</button>
                </p>
            </div>
        );
    }

    render() {
        const { postComments } = this.props;
        return (
            <div className="comment">
                {postComments.map(this.renderComponent)}
                <form className="comment-form" ref="commentForm">
                    <input type="text" ref="author" placeholder="author" />
                    <input type="text" ref="comment" placeholder="comment" />
                    <input type="submit" hidden />
                </form>
            </div>
        );
    }
}

export default Comments;
