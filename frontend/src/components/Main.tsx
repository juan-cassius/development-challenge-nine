import React from 'react';
import {  TextField } from '@mui/material';

export default function Main() {
    return (
    <div className='main-main-div'>
        <TextField
          className='search-element'
          label="Pesquisa por nome"
          variant="outlined"
          style={ {backgroundColor: '#fff'} }
        />
      <div className='patient-list-div'>
        {}
      </div>
      <div className='pagination-div'>
        {}
      </div>
    </div>

  );
}
