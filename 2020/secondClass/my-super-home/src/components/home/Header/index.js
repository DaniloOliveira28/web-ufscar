import Header from './Header';
import { connect } from 'react-redux';

import { withRouter } from 'react-router-dom';
import { fetchProperties } from '../../../redux/actions';

const mapDispatchToProps = {
  fetchProperties
}

export default connect(null, mapDispatchToProps)(withRouter(Header));
