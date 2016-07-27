import React from 'react';

class Comments extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderComponent = this.renderComponent.bind(this);
    }

    renderComponent(comment, i) {
        const { removeComment, params } = this.props;
        return (
            <div className="comment" key={i}>
                <p>
                    <strong>{comment.user}</strong>
                    {comment.text}
                    <button className="remove-comment"
                            onClick={removeComment.bind(null, params.postId, i)}>&times;</button>
                </p>
            </div>
        );
    }

    handleSubmit(e) {
        e.preventDefault();
        const { postId } = this.props.params;
        const author = this.refs.author.value;
        const comment = this.refs.comment.value;
        this.props.addComment(postId, author, comment);
        this.refs.comment.value = '';
        this.refs.comment.focus();
    }

    render() {
        const { postComments } = this.props;
        return (
            <div className="comment">
                {postComments.map(this.renderComponent)}
                <form className="comment-form" ref="commentForm" onSubmit={this.handleSubmit}>
                    <input type="text" ref="author" placeholder="author" />
                    <input type="text" ref="comment" placeholder="comment" />
                    <input type="submit" hidden />
                </form>
            </div>
        );
    }
}

export default Comments;
