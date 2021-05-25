import React from 'react';

class CommentToolbar extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            author_id: this.props.author_id,
            course_id: this.props.course_id,
            body: '',
            username: this.props.username
        }

        this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.createComment(this.state);
    }

    update(field){
        return e => this.setState({[field]: e.currentTarget.value})
    }

    render(){
        return (
            <div className='create-comment-container'>
                <form onSubmit={this.handleSubmit} className='comment-toolbar-form'>
                    <div className='fas fa-comment-medical'/>
                    <input type="text" 
                        value={this.state.body}
                        onChange={this.update('body')}
                        className='comment-body-input'
                    />
                    <button className='add-comment-button'>Add Comment</button>
                </form>
            </div>
        )
    }

}

export default CommentToolbar;