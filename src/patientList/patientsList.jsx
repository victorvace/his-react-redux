import React from "react";
import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import "./patientList.css";
import api from '../services/api';

class patientsLists extends React.Component {

    constructor(props) {
        super(props);
        props.loadPatients();
    }

    render() {
        if (!this.props.auth)
            return <Redirect to="/" />;
        return (
            <div>
                <h1>Lista de pacientes</h1>
                {this.props.patients.map(item =>
                    <div key={item.uid}>
                        <Link to={"/patientDetail/" + item.uid}>{item.name}</Link>
                    </div>)}
            </div>
        );
    }
}

const PatientsLists = connect(
    state => ({
        auth: state.auth,
        patients: state.patients
    }),
    dispatch => ({
        loadPatients: () => {
            let patients = api.getListPacientes();
            dispatch({ type: 'LOAD_PATIENTS', patients: patients })
        }
    })
)(patientsLists)

export default PatientsLists;
