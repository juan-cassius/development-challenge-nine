const patient = {
  id: 1,
  fullName: 'Juan Cassius',
  birthDate: '1990-01-01',
  email: 'cassjuan@hotmail.com',
  address: {
    id: 1,
    street: 'Rua Janete Angela Carneiro Jacomel',
    number: 50,
    district: 'Olarias',
    city: 'Ponta Grossa',
    state: 'Paraná',
    country: 'Brasil',
    patientId: 1,
  },
};

const patients = [
  patient,
];

const patientWithoutIds = {
  fullName: 'Juan Cassius',
  birthDate: '1990-01-01',
  email: 'cassjuan@hotmail.com',
  address: {
    street: 'Rua Janete Angela Carneiro Jacomel',
    number: 50,
    district: 'Olarias',
    city: 'Ponta Grossa',
    state: 'Paraná',
    country: 'Argentina',
  },
};

const patientWihtoutIdsButTheSameData = {
  fullName: 'Juan Cassius',
  birthDate: '1990-01-01',
  email: 'cassjuan@hotmail.com',
  address: {
    street: 'Rua Janete Angela Carneiro Jacomel',
    number: 50,
    district: 'Olarias',
    city: 'Ponta Grossa',
    state: 'Paraná',
    country: 'Brasil',
  },
};

export {
  patient,
  patients,
  patientWithoutIds,
  patientWihtoutIdsButTheSameData,
};
