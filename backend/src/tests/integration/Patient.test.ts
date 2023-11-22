/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable import/no-extraneous-dependencies */
import * as sinon from 'sinon';
import * as chai from 'chai';

// @ts-ignore
import chaiHttp = require('chai-http');

import App from '../../App';
import SequelizeAddress from '../../database/models/SequelizeAddress';
import SequelizePatient from '../../database/models/SequelizePatient';
import {
  patient, patientWihtoutIdsButTheSameData, patientWithoutIds, patients,
} from '../mocks/Patient.mocks';
import Validations from '../../middlewares/Validation';

chai.use(chaiHttp);

const { app } = new App();

const { expect } = chai;

describe('Patient Integration Test', () => {
  it('should create a new patient', async () => {
    sinon.stub(Validations, 'validatePatient').returns();
    sinon.stub(SequelizePatient, 'create').resolves(patient as any);

    const { id, ...sendData } = patient;

    const { status, body } = await chai.request(app).post('/patient').send(sendData);

    expect(status).to.be.equal(201);
    expect(body).to.be.deep.equal(patients);
  });

  it('should\'nt create a new patient with missing required fields', async () => {
    const { status, body } = await chai.request(app).post('/patient').send({});

    expect(status).to.be.equal(400);
    expect(body).to.be.deep.equal({ message: 'Missing required field: fullName' });
  });

  it('shoul return a list of all patients', async () => {
    sinon.stub(SequelizePatient, 'findAll').resolves(patients as any);

    const { status, body } = await chai.request(app).get('/patient');

    expect(status).to.be.equal(200);
    expect(body).to.be.deep.equal(patients);
  });

  it('should return a patient by id', async () => {
    sinon.stub(SequelizePatient, 'findOne').resolves(patient as any);

    const { status, body } = await chai.request(app).get('/patient/1');

    expect(status).to.be.equal(200);
    expect(body).to.be.deep.equal(patients);
  });

  it('should\'nt return a patient by id if it does not exist', async () => {
    sinon.stub(SequelizePatient, 'findOne').resolves(null);

    const { status, body } = await chai.request(app).get('/patient/1');

    expect(status).to.be.equal(404);
    expect(body).to.be.deep.equal({ message: 'Patient not found' });
  });

  it('should update a patient', async () => {
    sinon.stub(SequelizePatient, 'update').resolves([1] as any);
    sinon.stub(SequelizePatient, 'findByPk').resolves(patients as any);
    sinon.stub(Validations, 'validatePatient').returns();

    const { status, body } = await chai.request(app).put('/patient/1').send(patientWithoutIds);

    expect(status).to.equal(200);
    expect(body.message).to.equal('Patient updated');
  });

  it('should\'nt update a patient if it does not exist', async () => {
    sinon.stub(SequelizePatient, 'findByPk').resolves(null);

    const { status, body } = await chai.request(app).put('/patient/1').send(patientWithoutIds);

    expect(status).to.equal(404);
    expect(body.message).to.equal('Patient not found');
  });

  it('should return conflict when there is nothing to update', async () => {
    sinon.stub(SequelizePatient, 'findByPk').resolves(patient as any);
    sinon.stub(SequelizePatient, 'update').resolves([0] as any);
    sinon.stub(SequelizeAddress, 'update').resolves([0] as any);

    const { status, body } = await chai.request(app).put('/patient/1').send(patientWihtoutIdsButTheSameData);

    expect(status).to.equal(409);
    expect(body.message).to.equal('There are no updates to perform in this patient or his address');
  });

  it('should delete a patient', async () => {
    sinon.stub(SequelizePatient, 'destroy').resolves();
    sinon.stub(SequelizePatient, 'findByPk').resolves(patient as any);

    const { status, body } = await chai.request(app).delete('/patient/1');

    expect(status).to.equal(200);
    expect(body.message).to.equal('Patient deleted');
  });

  it('should\'nt delete a patient if it does not exist', async () => {
    sinon.stub(SequelizePatient, 'findByPk').resolves(null);

    const { status, body } = await chai.request(app).delete('/patient/1');

    expect(status).to.equal(404);
    expect(body.message).to.equal('Patient 1 not found');
  });

  afterEach(sinon.restore);
});
