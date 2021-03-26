import React from 'react';
import Footer from '../footer/footer';

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
                      <span> The finest run route creating experience, backed by google maps.</span>
                       <div className='links-container'>
                        <button className='guest-demo-button' type='submit' onClick={this.handleSubmitDummy}>TRY FOR FREE</button>
                        {this.props.signupLink}
                        <div className='login-container'>
                          <span>Already a member?</span>
                          {this.props.loginLink}
                        </div>
                       </div>
                    </div>
                    <div className='second-image-container'>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }

}

export default Splash;