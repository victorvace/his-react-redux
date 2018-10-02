import React from "react";
import { connect } from 'react-redux'
import { Redirect } from "react-router-dom";
import "./createUser.css";
import api from '../services/api';


class CreateUser extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            role: '',
            name: '',
            surname: '',
            dni: '',
            email: '',
            password: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
        event.preventDefault();
    }

    handleSubmit(event) {
        api.addNewUser(this.state);
        alert('Añadido')
        event.preventDefault();
    }

    render() {
        if (!this.props.auth)
            return <Redirect to="/" />;
        return (
            <form onSubmit={this.handleSubmit}>
                <h1>Creación de usuario</h1>
                <label>Nombre:
                    <input name="name" type="text"
                        value={this.state.name}
                        onChange={this.handleChange} />
                </label><br />
                <label>Apellido:
                    <input name="surname" type="text"
                        value={this.state.surname}
                        onChange={this.handleChange} />
                </label><br />
                <label>DNI:
                    <input name="dni" type="text"
                        value={this.state.dni}
                        onChange={this.handleChange} />
                </label><br />
                <label>eMail:
                    <input name="email" type="text"
                        value={this.state.email}
                        onChange={this.handleChange} />
                </label><br />
                <label>Password:
                    <input name="password" type="text"
                        value={this.state.password}
                        onChange={this.handleChange} />
                </label><br />
                <label>
                    <select name="role" value={this.state.role} onChange={this.handleChange}>
                        <option value="technical">Técnico</option>
                        <option value="doctor">Doctor</option>
                        <option value="patient">Paciente</option>
                    </select>
                </label><br />
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(CreateUser)
