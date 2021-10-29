import { connect } from 'react-redux';
import Signin from './Signin';
import { doAuthentication } from '../../actions'

const mapDispatchToProps = {
  doAuthentication
};

export default connect(null, mapDispatchToProps)(Signin);
