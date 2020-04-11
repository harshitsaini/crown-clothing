import React from 'react';

import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';

import './sign-in.styles.scss';


class SignIn extends React.Component {
  constructor(){
    super();

    this.state = {
      email: '',
      password: ''
    };

  }

  handleSubmit = event => {
    event.preventDefault();

    this.setState({email: '', password: ''});
  }

  handleChange = event => {
    const { name , value } = event.target;

    this.setState({ [name]: value });
  }

  render(){
    return (
      <div className="sign-in">
        <h1 className='title'>I already have an account</h1>
        <span>Sign in with your email and password.</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
             label='Email'
             handleChange={this.handleChange}
             name="email"
             type="email"
             value={this.state.email}
             required />
          <FormInput
            label="Password"
            handleChange={this.handleChange}
            name="password"
            type="password"
            value={this.state.password}
            required />

          <CustomButton name="submit" type="submit" value="Submit Form">
            Sign In
          </CustomButton>

        </form>

      </div>
    );
  }
}

export default SignIn;