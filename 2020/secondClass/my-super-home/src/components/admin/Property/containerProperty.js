import { Property } from './Property';
import { connect } from 'react-redux';
import { saveProperty } from '../../../redux/actions';

const mapStateToProps = state => {
  return {
    info: state.info
  }
};

const mapDispatchToProps = {
  saveProperty
}

export default connect(mapStateToProps, mapDispatchToProps)(Property);
