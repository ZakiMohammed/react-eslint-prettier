import PropTypes from 'prop-types';

const Title = ({ title, icon }) => {
  return (
    <>
      <div className="border-bottom pb-2 mb-4">
        <h4>
          <span className="text-primary">{icon}</span>
          <span className="ms-2">{title}</span>
        </h4>
      </div>
    </>
  );
};

export default Title;

Title.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.element,
};
