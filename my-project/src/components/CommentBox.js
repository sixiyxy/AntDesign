import React from "react";

class CommentBox extends React.Component {
    constructor(props) {
        super(props)
        //受控组件方法
        // this.state = {
        //     value: ''
        // }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(event) {
        this.setState({
            value: event.target.value
        })
    }
    handleSubmit(event) {
        event.preventDefault()
        //alert(this.state.value)
        //alert(this.textInput.value)
        this.props.onAddComment(this.textInput.value)
        this.textInput.value = '';
        
    }
    render() {
        return (
            <form className="p-5" onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label>留言内容</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="请输入内容"
                        ref={(textInput) => {this.textInput = textInput}}
                        //onChange={this.handleChange}
                        //value={this.state.value}
                    />
                </div>
                <button type="submit" className="btn btn-primary" onClick={this.props.handleSubmit}>留言</button>
                <p>已有{this.props.commentsLength}条评论</p>
            </form>
        );
    }
}

export default CommentBox;