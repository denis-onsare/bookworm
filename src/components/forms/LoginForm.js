import React from 'react';
import {Button, Form} from 'semantic-ui-react';
import validator from 'validator';
import PropTypes from 'prop-types';
import InlineError from './InlineError';

class LoginForm extends React.Component {
    constructor () {
        super();
        this.state = {
            data: {
                email: '',
                password: ''
            },
            loading: false,
            errors: {}
        };

    }
    
    onChange = (e) => {
        this.setState({
            data: {...this.state.data, [e.target.name]: e.target.value}
        });
    }
    
    onSubmit = () => {
        const errors = this.validate(this.state.data);
        this.setState({errors});
        if (Object.keys(errors).length === 0) {
            this.props.submit(this.state.data);
        }
    }
 
    validate = data => {
        const errors = {}
        if (!validator.isEmail(data.email)) errors.email = 'Email is required';
        if (!data.password) errors.password = 'Password is required';
        return errors;
    }
    render() {
        const {data, errors} = this.state;
        return (
            <Form onSubmit={this.onSubmit}>
                <Form.Field error={!!errors.email}>
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email" 
                        name="email" 
                        id="email" 
                        value={data.email} 
                        onChange={this.onChange}
                        placeholder="example@example.com"
                    />
                    {errors.email && <InlineError text={errors.email}/>}
                </Form.Field>
                <Form.Field error={!!errors.password}>
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password" 
                        name="password" 
                        id="password" 
                        value={data.password} 
                        onChange={this.onChange}
                        placeholder="secure password"
                    />
                    {errors.password && <InlineError text={errors.password}/>}
                </Form.Field>
                <Button primary>Login</Button>
            </Form>
        );
    }
}

LoginForm.propTypes = {
    submit: PropTypes.func.isRequired
}
export default LoginForm;