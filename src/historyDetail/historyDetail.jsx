import React from 'react';
import { connect } from 'react-redux'
import { Redirect } from "react-router-dom";
import "./historyDetail.css";
import api from '../services/api';

class HistoryDetail extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            record: api.getHistorial(this.props.match.params.uid)
        }
    }

    render() {
        if (!this.props.auth)
            return <Redirect to="/" />;
        return (
            <div>
                <h1>Historial del paciente</h1>
                <h2>{api.getFullNameByID(this.state.record.userId)}</h2>
                {this.state.record.log.map((log, i) => <p key={i}>{log}</p>)}

            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}
const mapDispatchToProps = ()=>({})
export default connect(mapStateToProps, mapDispatchToProps)(HistoryDetail)
