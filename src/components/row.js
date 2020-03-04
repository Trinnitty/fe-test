import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setClickUser } from '../actions/dataUserAction';

class DataRow extends Component {
  handleClick = (item) => {
    const { dispatch } = this.props;
    dispatch(setClickUser(item));
  };

  render(){
    const { id, userId, title } = this.props.item;
    return (
      <Link className="link" to={`/${userId}`} onClick={() => this.handleClick(this.props.item) }>
        <div key={id} className="row" >
          <div className="cell-1">{id}</div>
          <div className="cell-2">{userId}</div>
          <div className="cell-3">{title}</div>
        </div>
      </Link>
    );
  }
}

export default connect(null)(DataRow);
