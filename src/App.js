import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import DataRow from '../src/components/row';
import Loading from '../src/components/loading';
import { getDataRequest, getDataSuccess, getDataFailure } from '../src/actions/dataAction';

const url = 'https://jsonplaceholder.typicode.com/posts';
class App extends Component {

  componentDidMount() {
      this.getData();
  }

  getData=() =>{
    const { dispatch } = this.props;
    dispatch(getDataRequest());
    fetch(url)
    .then(response => {
      return response.json();
    })
    .then(data => {
      dispatch(getDataSuccess(data));
    })
    .catch(error => {
      dispatch(getDataFailure());
    });
  }

  render(){
    const { data, isFetching, error } = this.props;
    return (
      <div className="App">
        {
          !isFetching ?
          <div className="table">
          {
            data && data.length && data.map((item)=>{
              return <DataRow item={item} key={item.id}/>
            })
          }
          </div>
        : <Loading /> }
        {
          error && <div>{ error }</div>
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.data.data,
    isFetching: state.data.isFetching,
    error: state.data.errorMessage
  }
}

export default connect(mapStateToProps)(App);
