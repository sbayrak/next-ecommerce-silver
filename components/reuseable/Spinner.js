const colors = {
  bg: '#f1e8e6',
  primary: '#f55951',
  secondary: '#111127',
};

const Spinner = ({ color }) => {
  return (
    <div className='d-flex justify-content-center'>
      <div className='spinner-border ' style={{ color: color }} role='status'>
        <span className='visually-hidden'>Loading...</span>
      </div>
    </div>
  );
};

Spinner.defaultProps = {
  color: '#f1e8e6',
};
export default Spinner;
