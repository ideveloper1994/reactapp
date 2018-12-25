import React, {Component} from 'react'
import { Table } from 'antd';
import { Route, Switch} from 'react-router-dom';
import './user.css'

const columns = [
    {
        title: 'Index',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: 'Title',
        dataIndex: 'title',
        key: 'title',
    },
    {
        title: 'Description',
        dataIndex: 'body',
        key: 'body',
    }
];

const Comp1 = () => {
    return(
        <div>
            Comp 1
        </div>
    )
};

const Comp2 = () => {
    return(
        <div>
            Comp 2
        </div>
    )
};

class user extends Component{

    state = {
        userList:[]
    };

    componentDidMount(){
        this.makeAPICall();
    }

    makeAPICall = () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    userList: responseJson,
                });
            })
            .catch((error) => {
                alert(error);
            });
    };

    renderItem = (obj) => {
        return(
            <div>
                {obj.email}
            </div>
        )
    };

    onButtonPress = () => {

    };

    render(){
        return(
            <div className="main">
                <div style={{flex:1}}>
                    <Table columns={columns}
                           dataSource={this.state.userList} />
                    {
                        this.state.userList.map((obj, i)=>{
                            return this.renderItem(obj)
                        })
                    }
                </div>
                <div style={{background:'#fff',flex:1, borderWidth:1, borderColor:'#bdbdbd'}}>

                    <Switch>
                        <Route path="/user/cmp1" exact component={Comp1}/>
                        <Route path="/user/cmp2" component={Comp2} />
                    </Switch>

                </div>
            </div>
        )
    }
}

export default user;