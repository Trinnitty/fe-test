import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import DataRow from '../src/components/row';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { getDataRequest, getDataSuccess, getDataFailure } from '../src/actions/dataAction';

const url = 'https://jsonplaceholder.typicode.com/posts';
class App extends Component {

  componentDidMount() {
    if(!this.props.data.length){
      this.getData();
    }
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
    const { data = [], isFetching, error, history } = this.props;
    return (
      <Paper >
        <Table>  
            <TableHead>
                <TableRow>
                    <TableCell>id</TableCell>
                    <TableCell>userId</TableCell>
                    <TableCell>title</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
            {
            data.map((item)=>{
              return <DataRow item={item} key={item.id} history={history}/>
            })
          }
            </TableBody>
        </Table>  
      </Paper>
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
