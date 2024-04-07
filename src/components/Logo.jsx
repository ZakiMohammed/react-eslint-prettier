import PropTypes from 'prop-types';
import reactSvg from '/logo.svg';

const Logo = ({ height, classNames }) => {
  return (
    <>
      <img
        src={reactSvg}
        alt="Logo"
        style={{ height: height || '30px' }}
        className={classNames || 'me-2'}
      />
    </>
  );
};

export default Logo;

Logo.propTypes = {
  height: PropTypes.string,
  classNames: PropTypes.string,
};
