import React, { Component } from 'react';
import { connect } from 'react-redux'
import Loading from '../components/loading';
import { Link } from 'react-router-dom';
import { getDataUserRequest, getDataUserSuccess, getDataUserFailure } from '../actions/dataUserAction';

const url = 'https://jsonplaceholder.typicode.com/users';

class User extends Component {
  constructor(props){
    super(props);
    this.state = {
      number: parseInt(props.match.params.number, 10),
    }
  }

  componentDidMount() {
    this.getData();
  }

  getData=() =>{
    const { dispatch } = this.props;
    const { number } = this.state;
    dispatch(getDataUserRequest());
    fetch(`${url}/${number}`)
    .then(response => {
      return response.json();
    })
    .then(data => {
      dispatch(getDataUserSuccess(data));
    })
    .catch(error => {
      dispatch(getDataUserFailure(error));
    });
  }

  render(){
    const { data, isFetching, error, clickUser } = this.props;
    return (
      <>
        <button><Link className="link" to={`/`}>Go Back</Link></button>
        {
          clickUser && 
          <div className="User">
            { clickUser?.id && 
            <div className="row">
              <div>id: {clickUser?.id}</div>
            </div>
            }
            { clickUser?.userId && 
            <div className="row">
              <div>userId: {clickUser?.userId}</div>
            </div>
            }
            { clickUser?.title && 
            <div className="row">
              <div>title: {clickUser?.title}</div>
            </div>
            }
            { clickUser?.body && 
            <div className="row">
              <div>body: {clickUser?.body}</div>
            </div>
            }
        </div>
        }
        {
          data && 
          <div className="User">
            { data?.name && 
            <div className="row">
              <div>Name: {data?.name}</div>
            </div>
            }
            { data?.userName && 
            <div className="row">
              <div>UserName: {data?.userName}</div>
            </div>
            }
            { data?.email && 
            <div className="row">
              <div>email: {data?.email}</div>
            </div>
            }
            { data?.phone && 
            <div className="row">
              <div>phone: {data?.phone}</div>
            </div>
            }
            { data?.website && 
            <div className="row">
              <div>website: {data?.website}</div>
            </div>
            }
            { data?.company?.name && 
            <div className="row">
              <div>Company: {data?.company?.name}</div>
            </div>
            }
            { data?.address?.street && 
            <div className="row">
              <div>Street: {data?.address?.street}</div>
            </div>
            }
            { data?.address?.suite && 
            <div className="row">
              <div>suite: {data?.address?.suite}</div>
            </div>
            }
            { data?.address?.city && 
            <div className="row">
              <div>city: {data?.address?.city}</div>
            </div>
            }
        </div>
        }
        
        { isFetching && <Loading /> }
        {
          error && <div>{ error }</div>
        } 
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.user.dataUsers,
    isFetching: state.user.isFetching,
    error: state.user.errorMessage,
    clickUser: state.user.clickUser
  }
}

export default connect(mapStateToProps, null)(User);
