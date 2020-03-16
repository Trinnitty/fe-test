import React, { Component } from 'react';
import { connect } from 'react-redux';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

class DataRow extends Component {
  handleClick = (item) => {
    const { history } = this.props;
    history.push({
        pathname: `/${item.userId}`,
        state: { item: item }
    });
  };

  render(){
    const { id, userId, title } = this.props.item;
    return (    
        <TableRow onClick={()=>this.handleClick(this.props.item)}>
            <TableCell>{ id }</TableCell>
            <TableCell>{ userId }</TableCell>
            <TableCell>{ title }</TableCell>
        </TableRow>
    );
  }
}

export default connect(null)(DataRow);
