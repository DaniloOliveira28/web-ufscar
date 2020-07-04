import { connect } from 'react-redux';
import Signin from './Signin';
import { doAuthentication } from '../../../redux/actions'
import { withRouter } from 'react-router-dom';

const mapDispatchToProps = {
  doAuthentication
};

export default connect(null, mapDispatchToProps)(withRouter(Signin));