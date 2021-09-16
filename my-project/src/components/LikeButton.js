import React from "react";

class LikeButton extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            likes: 0
        }
        //this.increaseLikes = this.increaseLikes.bind(this)
    }
    increaseLikes() {
        this.setState({
            // eslint-disable-next-line
            likes: ++this.state.likes
        })
    }
    render() {
        return(
            <div className="likes-button-component">
                <button
                    type="button"
                    className="btn btn-outline-primary btn-lg"
                    onClick={() => { this.increaseLikes() }}
                >
                    👍{this.state.likes}
                </button>
            </div>
        )
    }
}

export default LikeButton