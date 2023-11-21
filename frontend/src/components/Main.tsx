import React, { useContext, useEffect, useState } from 'react';
import PatientCard from './PatienteCard/PatientCard';
import { PatientContext } from '../context/PatientContext';
import { Pagination, TextField } from '@mui/material';

export default function Main() {
  const patientContext = useContext(PatientContext);
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const rowLimit = 5;

  useEffect(() => {
    patientContext?.getAll();
  }, [patientContext?.wasPatientDeleted]);

  const getFilteredPatients = () => {
    const filteredPatients = patientContext?.patients
      .filter(patient =>
        patient.fullName.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .sort((a, b) => a.fullName.localeCompare(b.fullName));

    return filteredPatients || [];
  };

  const getPaginatedPatients = () => {
    const startIndex = (page - 1) * rowLimit;
    const endIndex = startIndex + rowLimit;
    return getFilteredPatients().slice(startIndex, endIndex);
  };

  const handlePageChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    setPage(1); // Reset page when the search term changes
  };

  return (
    <div className='main-main-div'>
        <TextField
          className='search-element'
          label="Pesquisa por nome"
          variant="outlined"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      <div className='patient-list-div'>
        {getPaginatedPatients().map((patient) => (
          <PatientCard key={patient.id} patient={patient} />
        ))}
      </div>
      <div className='pagination-div'>
        {getFilteredPatients().length > rowLimit && (
          <Pagination
            count={Math.ceil(getFilteredPatients().length / rowLimit)}
            className='pagination-element'
            size='large'
            color='primary'
            page={page}
            onChange={handlePageChange}
          />
        )}
      </div>
    </div>

  );
}
