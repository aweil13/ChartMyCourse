import React from 'react';

class Splash extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmitDummy = this.handleSubmitDummy.bind(this);
    }

    handleSubmitDummy(e){
        e.preventDefault();
        const guest = this.props.dummy;
        this.props.loginDummy(guest);
      }

    render(){
        return(
            <div className='middle-background'>
                <div className='middle-container'>
                    <div className='image-links-container'>
                      <h2>DOMINATE EVERY INCH</h2>
                      <span> The finest run creating experience, backed by google maps</span>
                       <div className='links-container'>
                        <button className='guest-demo-button' type='submit' onClick={this.handleSubmitDummy}>TRY FOR FREE</button>
                        <button className='signup-button'>{this.props.signupLink}</button>
                        <div className='login-container'>
                          <span>Already a member?</span>
                          <button>{this.props.loginLink}</button>
                        </div>
                       </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Splash;