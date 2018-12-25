import React, {Component} from 'react'
import {Form, Input, Button} from 'antd'
import './adminLogin.css';

const FormItem = Form.Item;

class User extends Component{

    state = {
        userName: "",
        pwd: ""
    };

    handleSubmit = (e) => {
        this.props.history.push('/user/');
    };

    onTextChange = (e, key) => {
        this.setState({[key]: e.target.value});
    };

    render(){
        const { getFieldDecorator } = this.props.form;

        return(
            <div className="main">
                <div className="login-form">
                    <div className='title'>
                        Login
                    </div>
                    <FormItem label="UserName">

                        {getFieldDecorator('userName', {
                            rules: [{ required: true, message: 'Please input your username!' }],
                        })(
                            <Input placeholder="Username"
                                   value={this.state.userName}
                                   onChange={(e)=>this.onTextChange(e,'userName')}
                                   className="input" />
                        )}
                    </FormItem>

                    <FormItem label="Password">
                        <Input type="password"
                               placeholder="Password"
                               value={this.state.pwd}
                               onChange={(e)=>this.onTextChange(e,'pwd')}
                               className="input" />
                    </FormItem>

                    <Button type="primary"
                            block ghost
                            onClick={this.handleSubmit}>Submit</Button>

                </div>
            </div>
        )
    }
}

const WrappedNormalLoginForm = Form.create()(User);

export default WrappedNormalLoginForm;