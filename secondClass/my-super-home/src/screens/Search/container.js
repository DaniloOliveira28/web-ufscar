import { Search } from './Search';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    properties: state.properties
  }
};

export default connect(mapStateToProps)(Search);
