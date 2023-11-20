import { NewEntity } from "../interfaces";
import PatientModel from "../models/PatientModel";
import AddressModel from "../models/AddressModel";
import { IPatient, IPatientWithAddress } from "../interfaces/patients/IPatient";
import { IPatientModel } from "../interfaces/patients/IPatientModel";
import { ServiceMessage, ServiceResponse } from "../interfaces/ServiceResponse";
import { IAddressModel } from "../interfaces/addresses/IAddressModel";
// import sequelize from "../database/models";  -- Aqui farei o tratamento da transaction dos updates futuramente

export default class PatientService {
    constructor(
        private patientModel: IPatientModel = new PatientModel(),
        private addressModel: IAddressModel = new AddressModel()
    ) { }

    public async createPatient(patient: NewEntity<IPatient>): Promise<ServiceResponse<IPatient[]>> {
        const newPatient = await this.patientModel.create(patient);
        return {
            status: 'SUCCESSFUL',
            data: [newPatient]
        };
    }

    public async getAllPatients(): Promise<ServiceResponse<IPatientWithAddress[]>> {
        const allPatients = await this.patientModel.findAll();

        return {
            status: 'SUCCESSFUL',
            data: allPatients
        };
    }

    public async getPatientById(id: number): Promise<ServiceResponse<IPatient[]>> {
        const patient = await this.patientModel.findById(id);
        if (!patient) return { status: 'NOT_FOUND', data: { message: `Patient ${id} not found` } };
        return { status: 'SUCCESSFUL', data: [patient] };
    }

    public async updatePatient(id: number, patient: IPatientWithAddress): Promise<ServiceResponse<ServiceMessage>> {
        const patientFound = await this.patientModel.findById(id);

        if (!patientFound) return { status: 'NOT_FOUND', data: { message: `Patient ${id} not found` } };

        // const t = await sequelize.transaction(); -- Aqui farei o tratamento da transaction dos updates futuramente
        // try { 
        const updatePatient = await this.patientModel.update(id, patient);
        const updateAddress = await this.addressModel.update(id, patient.address);

        if (!updatePatient && !updateAddress) {
            return {
                status: 'CONFLICT',
                data: { message: `There are no updates to perform in this patientor his address` }
            };
        }
        //     await t.commit();  -- Aqui farei o tratamento da transaction dos updates futuramente
        // } catch (error) {  -- Aqui farei o tratamento da transaction dos updates futuramente
        //     await t.rollback()
        // }
        return { status: 'SUCCESSFUL', data: { message: 'Patient updated' } };

    }

    public async deletePatient(id: number): Promise<ServiceResponse<ServiceMessage>> {
        const patientFound = await this.patientModel.findById(id);
        if (!patientFound) return { status: 'NOT_FOUND', data: { message: `Patient ${id} not found` } };

        await this.patientModel.delete(id);
        return { status: 'SUCCESSFUL', data: { message: 'Patient deleted' } };
    }
}