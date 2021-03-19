import React from 'react';

class LoginSessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.initialState;
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    componentWillUnmount(){
        this.props.clearErrors();
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    update(field){
        return e => this.setState({[field]: e.currentTarget.value});
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                        </li>
                    ))}       
            </ul>
        )
    }

    render(){
        return(
        <div className="login-form-background">
            <div className="login-form-container">
                <div className="signup-link">{this.props.navLink}</div>
                <form onSubmit={this.handleSubmit} className="login-form-box">
                    {this.renderErrors()}
                    <div className="login-form">
                      <label className="username-label">
                        <input type="text" 
                          placeholder="Username" 
                          value={this.state.username}
                          onChange={this.update('username')}
                          className="login-input"    
                        />
                      </label>
                      <label className="password-label">
                        <input type="password" 
                          placeholder="Password"
                          value={this.state.password}
                          onChange={this.update('password')}
                          className="login-input"
                        />
                      </label>
                      <div className="forgot-password">
                          <a href="">Forgot Password?</a>
                      </div>
                      <button type="submit" value={this.props.formType}>
                        <span className="button-text">Log In</span>    
                      </button>  
                    </div>
                </form>
            </div>
        </div>
        )
    }

}

export default LoginSessionForm;