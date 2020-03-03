import React from 'react';
import DataRow from '../components/row';

export default function Table({ data }) {
  return (
    <>
      {
        data && data.length && data.map((item)=>{
        return <DataRow item={ item }/>
        })
      }
    </>
  );
}