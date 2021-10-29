import { connect } from 'react-redux';
import AdminHeader from './AdminHeader';
import { doLogout } from '../../../redux/actions'

const mapStateToProps = state => {
  return {
    info: state.info
  }
};

const mapDispatchToProps = {
  doLogout
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminHeader);
