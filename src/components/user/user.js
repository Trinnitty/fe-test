import React, { Component } from 'react';
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button';
import Loading from '../loading';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { getDataUserRequest, getDataUserSuccess, getDataUserFailure, setClickUser } from '../../actions/dataUserAction';
import withHocs from './userHoc';

const urlUser = 'https://jsonplaceholder.typicode.com/users';

class User extends Component {
    constructor(props){
      super(props);
      this.state = {
        number: parseInt(props.match.params.number, 10),
      }
    }
  
    componentDidMount() {
        this.getDataUser();
    }
  
    getDataUser=() =>{
      const { dispatch } = this.props;
      const { number } = this.state;
      dispatch(getDataUserRequest());
      fetch(`${urlUser}/${number}`)
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
    const { data, error, classes, isFetching, location: { state: { item }} } = this.props;
    console.log(classes, 'classes');
    return (
      <>
        <Button className={ classes.button } variant="contained" color="primary" onClick={ ()=>this.props.history.push(`/`)}>
            Go Back
        </Button>
        {
          !isFetching && item && 
  
        <Paper className={classes.root}>
            <Table > 
            <TableHead>
                { item?.id && 
                    <TableRow>
                        <TableCell>id</TableCell>
                        <TableCell>{item?.id}</TableCell>
                    </TableRow>
                }
                { item?.userId && 
                    <TableRow>
                        <TableCell>userId</TableCell>
                        <TableCell>{item?.userId}</TableCell>
                    </TableRow>
                }
                { item?.title && 
                    <TableRow>
                        <TableCell>title</TableCell>
                        <TableCell>{item?.title}</TableCell>
                    </TableRow>
                }
                { item?.body && 
                    <TableRow>
                        <TableCell>body</TableCell>
                        <TableCell>{item?.body}</TableCell>
                    </TableRow>
                }
                { data?.name && 
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>{data?.name}</TableCell>
                    </TableRow>
                }
                { data?.userName && 
                    <TableRow>
                        <TableCell>UserName</TableCell>
                        <TableCell>{data?.userName}</TableCell>
                    </TableRow>
                }
                { data?.email && 
                    <TableRow>
                        <TableCell>email</TableCell>
                        <TableCell>{data?.email}</TableCell>
                    </TableRow>
                }
                { data?.phone && 
                    <TableRow>
                        <TableCell>phone</TableCell>
                        <TableCell>{data?.phone}</TableCell>
                    </TableRow>
                }
                { data?.website && 
                    <TableRow>
                        <TableCell>website</TableCell>
                        <TableCell>{data?.website}</TableCell>
                    </TableRow>
                }
                { data?.company?.name && 
                    <TableRow>
                        <TableCell>Company</TableCell>
                        <TableCell>{data?.company?.name}</TableCell>
                    </TableRow>
                }
                { data?.address?.street && 
                    <TableRow>
                        <TableCell>Street</TableCell>
                        <TableCell>{data?.address?.street}</TableCell>
                    </TableRow>
                }
                { data?.address?.suite && 
                    <TableRow>
                        <TableCell>suite</TableCell>
                        <TableCell>{data?.address?.suite}</TableCell>
                    </TableRow>
                }
                { data?.address?.city && 
                    <TableRow>
                        <TableCell>city</TableCell>
                        <TableCell>{data?.address?.city}</TableCell>
                    </TableRow>
                }          
                </TableHead>
            </Table>  
        </Paper>
      }
      { isFetching && <Loading />}
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

export default connect(mapStateToProps, null)(withHocs(User));
