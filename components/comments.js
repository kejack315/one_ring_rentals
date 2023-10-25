import React, { Component } from 'react';

class Comments extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            comment: '',
            comments: []
        };
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const newComment = {
            name: this.state.name,
            email: this.state.email,
            comment: this.state.comment,
            date: new Date().toLocaleDateString()
        };

        this.setState(prevState => ({
            comments: [newComment, ...prevState.comments], // 将新评论添加到数组的开头
            name: '',
            email: '',
            comment: ''
        }));
    }


    render() {
        return (
            <div>
                <div className="comments">
                    <ul>
                        <li>
                            <img src="images/comment-man.jpg" alt=""/>
                            <div className="comment">
                                <a href="#" className="btn btn-default-color">Reply</a>
                                <h3>John Doe<small>30 July, 2014</small></h3>
                                <p>Etiam eget felis lacus. In hendrerit, urna in fringilla interdum,
                                    nunc mauris condimentum purus, vel ullamcorper dui risus sed tellus.
                                    Nullam lacinia porttitor velit fermentum accumsan. Etiam dui lorem,
                                    lobortis pellentesque malesuada nec, lacinia pulvinar libero.</p>
                            </div>
                            <ul>
                                <li>
                                    <img src="images/comment-man.jpg" alt=""/>
                                    <div className="comment">
                                        <a href="#" className="btn btn-default-color">Reply</a>
                                        <h3>John Doe<small>30 July, 2014</small></h3>
                                        <p>In hendrerit, urna in fringilla interdum, nunc mauris
                                            condimentum purus, vel ullamcorper dui risus sed tellus.
                                            Nullam lacinia porttitor velit fermentum accumsan. Etiam dui
                                            lorem, lobortis pellentesque malesuada nec, lacinia pulvinar
                                            libero.</p>
                                    </div>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <img src="images/comment-woman.jpg" alt=""/>
                            <div className="comment">
                                <a href="#" className="btn btn-default-color">Reply</a>
                                <h3>Mary Doe<small>31 July, 2014</small></h3>
                                <p>Etiam eget felis lacus. In hendrerit, urna in fringilla interdum,
                                    nunc mauris condimentum purus, vel ullamcorper dui risus sed tellus.
                                    Nullam lacinia porttitor velit fermentum accumsan. Etiam dui lorem,
                                    lobortis pellentesque malesuada nec, lacinia pulvinar libero.
                                    Quisque pretium nunc sed nisl vehicula gravida. Lorem ipsum dolor
                                    sit amet, consectetur adipiscing elit.</p>
                            </div>
                        </li>
                        {this.state.comments.map((comment, index) => (
                            <li key={index}>
                                {/* Placeholder image. You can replace this with a user's profile image or other suitable image. */}
                                <img src="images/comment-woman.jpg" alt="Commentator" />
                                <div className="comment">
                                    <a href="#" className="btn btn-default-color">Reply</a>
                                    <h3>{comment.name}<small>{comment.date}</small></h3>
                                    <p>{comment.comment}</p>
                                </div>
                            </li>
                        ))}
                    </ul>

                    <div className="comments-form">
                        <div className="col-sm-12">
                            <h3>Leave a Reply</h3>
                            <p>Your email address will no be published. Required fields are marked*</p>
                        </div>

                    </div>
                </div>
                <form className="form-style" onSubmit={this.handleSubmit}>
                    <div className="col-sm-6">
                        <input
                            type="text"
                            name="name"
                            placeholder="Name*"
                            className="form-control"
                            value={this.state.name}
                            onChange={this.handleInputChange}
                        />
                    </div>

                    <div className="col-sm-6">
                        <input
                            type="email"
                            name="email"
                            placeholder="Email*"
                            className="form-control"
                            value={this.state.email}
                            onChange={this.handleInputChange}
                        />
                    </div>

                    <div className="col-sm-12">
                        <textarea
                            name="comment"
                            placeholder="Comment*"
                            className="form-control"
                            value={this.state.comment}
                            onChange={this.handleInputChange}
                        ></textarea>
                    </div>

                    <div className="center">
                        <button type="submit" className="btn btn-default-color btn-lg">Post Comment</button>
                    </div>
                </form>

            </div>
        );
    }
}

export default Comments;
