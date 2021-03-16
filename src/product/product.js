import React, {Component, Fragment} from 'react';
import { Link, withRouter } from 'react-router-dom';
import {connect} from 'react-redux';

class product extends Component {
    
    viewProduct(proName) {
        if(window.confirm(`Are you sure you want to view the details`)) {
            this.props.history.push(`/about/${proName}`);
        }
    }
    render() {
        return (
            <Fragment>
            {
                this.props.models!== undefined && this.props.models.map((item, index) => 
                <tr key={index}><td>{index + 1}</td>
                <td><Link className="nav-link" to={item} onClick={() => this.viewProduct(item.productname)}>{item.productname}</Link></td>
                <td>{item.quantity}</td><td>{item.price}</td></tr>
              )
            }            
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        models:state.model
    };
};

export default withRouter(connect(mapStateToProps)(product));
