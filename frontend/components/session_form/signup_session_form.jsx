import React from 'react';

class SignupSessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.initialState;
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    update(field){
        return e => this.setState({[field]: e.currentTarget.value});
    }

    renderErrors() {
      debugger
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
        <div className="form-background">
            <div className="signup-form-container">
            <div className="login-link">{this.props.navLink}</div>
                <form onSubmit={this.handleSubmit} className="signup-form-box">
                    {this.renderErrors()}
                    <div className="signup-form">
                      <label className="username-label">
                        <input type="text" 
                          placeholder="Username" 
                          value={this.state.username}
                          onChange={this.update('username')}
                          className="signup-input"    
                        />
                        </label>
                      <label className="email-label">
                        <input type="text" 
                          placeholder="Email" 
                          value={this.state.email}
                          onChange={this.update('email')}
                          className="signup-input"    
                        />
                      </label>
                      <label className="first-name-label">
                        <input type="text" 
                          placeholder="First name" 
                          value={this.state.first_name}
                          onChange={this.update('first_name')}
                          className="signup-input"    
                        />
                      </label>
                      <label className="last-name-label">
                        <input type="text" 
                          placeholder="Last name" 
                          value={this.state.last_name}
                          onChange={this.update('last_name')}
                          className="signup-input"    
                        />
                      </label>
                      <label className="password-label">
                        <input type="password" 
                          placeholder="Password"
                          value={this.state.password}
                          onChange={this.update('password')}
                          className="signup-input"
                        />
                      </label>
                      <label className="birthdate-label">
                        <span>Date of Birth:</span>
                        <input type="date"
                          value={this.state.birthdate}
                          onChange={this.update('birthdate')}
                          className="signup-input"
                        />
                      </label>
                      <label className="height-label">
                        <input type="number"
                          placeholder="Height(cm)"
                          value={this.state.height}
                          onChange={this.update('height')}
                          className="signup-input"
                        />
                      </label>
                      <label className="weight-label">
                        <input type="number"
                          placeholder="Weight(kg)"
                          value={this.state.weight}
                          onChange={this.update('weight')}
                          className="signup-input"
                        />
                      </label>
                    <div className="gender-container">
                       <label className="male-button">
                        <input type="radio"
                          value="M"
                          onChange={this.update('gender')}  
                        />
                         <span>Male</span>   
                       </label>
                      
                       <label className="female-button">
                        <input type="radio"
                          value="F"
                          onChange={this.update('gender')}  
                        />
                        <span>Female</span>  
                       </label>
                      </div>
                      <p className="terms-privacy">
                        <span>
                          By signing up with ChartMyCourse, you agree
                          to our <a href="/">Privacy Policy</a> &amp; <a href="/">Terms of Use.</a>   
                        </span>
                      </p>
                      <button className="button-signup" type="submit" value={this.props.formType}>
                        <span className="button-text">Sign Up</span>    
                      </button>  
                    </div>
                </form>
            </div>
        </div>
        )
    }

}


export default SignupSessionForm;