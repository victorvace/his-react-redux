import React from "react";
import { connect } from 'react-redux';
import { Redirect, Link } from "react-router-dom";
import './histories.css';
import api from '../services/api';

class histories extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            records: api.getListHistoriales(this.props.auth.uid)
        }
    }

    render() {
        if (!this.props.auth)
            return <Redirect to="/" />;
        return (
            <div>
                <h1>Lista de historiales</h1>
                {this.state.records.map(item =>
                    <div key={item.userId}>
                        <Link to={"/historyDetail/" + item.userId}>{api.getFullNameByID(item.userId)}</Link>
                        <hr />
                    </div>)}
            </div>
        );
    }

}
const mapStatetoProps = state => {
    return {
        auth: state.auth
    }
}

const mapDispatchToProps = dispatch => ({})

const Histories = connect(
    mapStatetoProps,
    mapDispatchToProps
)(histories)

export default Histories;
