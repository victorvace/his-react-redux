import React from "react";
import { connect } from 'react-redux'
import { Redirect } from "react-router-dom";
import "./patientDetail.css";
import api from '../services/api';

class PatientDetail extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user: api.getUser(this.props.match.params.uid)
        }
    }

    render() {
        if (!this.props.auth)
            return <Redirect to="/" />;
        return (
            <div>
                <h1>Ficha de paciente</h1>
                <h3>Nombre: {this.state.user.name} </h3>
                <h3>Apellidos: {this.state.user.surname}</h3>
                <h3>Dni: {this.state.user.dni}</h3>
                <h3>eMail: {this.state.user.email}</h3>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}
const mapDispatchToProps = {}
export default connect(mapStateToProps, mapDispatchToProps)(PatientDetail)
