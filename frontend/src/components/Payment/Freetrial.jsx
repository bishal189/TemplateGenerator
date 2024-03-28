
import PropTypes from 'prop-types';


const Freetrial = ({ handleClick, clickedDiv }) => {
  return (
    <div className={`free_trial ${clickedDiv === 1 ? 'clicked' : ''}`} onClick={() => handleClick(1)}>
      <div className={`inner_premium_trial ${clickedDiv === 1 ? 'background' : ''}`}>
        <div className={`${clickedDiv === 1 ? 'background' : ''}`}>
          <div className={`premium_heading ${clickedDiv === 1 ? 'background' : ''}`}>
            Premium Trial
          </div>
          <div className={`premium_price ${clickedDiv === 1 ? 'background' : ''}`}>
            $0 for 7 days
          </div>
          <div className={`premium_feature ${clickedDiv === 1 ? 'background' : ''}`}>
            <p className={`${clickedDiv === 1 ? 'background' : ''}`}><strong className={`${clickedDiv === 1 ? 'background' : ''}`}>Full access to 140+ legal forms:</strong></p>
            <ul className={`${clickedDiv === 1 ? 'background' : ''}`}><li >Lease, sub-lease agreements</li><li>Eviction notices, various addendums</li><li>Tax and business forms</li></ul>
          </div>
        </div>
      </div>
    </div>
  );
}

Freetrial.propTypes = {
  handleClick: PropTypes.func.isRequired,
  clickedDiv: PropTypes.number.isRequired
};

export default Freetrial;
