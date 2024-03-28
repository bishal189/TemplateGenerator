import PropTypes from 'prop-types';

const Premium = ({ handleClick, clickedDiv }) => {
    return (
        <div className={`premium_trial ${clickedDiv === 0 ? 'clicked' : ''}`} onClick={() => handleClick(0)}>
            <div className={`inner_premium_trial ${clickedDiv === 0 ? 'background' : ''}`}>
                <div className={`${clickedDiv === 0 ? 'background' : ''}`}>
                    <div className={`premium_heading ${clickedDiv === 0 ? 'background' : ''}`}>
                        Premium Trial
                    </div>
                    <div className={`premium_price ${clickedDiv === 0 ? 'background' : ''}`}>
                        $0 for 7 days
                    </div>
                    <div className={`premium_feature ${clickedDiv === 0 ? 'background' : ''}`}>
                        <p className={`${clickedDiv === 0 ? 'background' : ''}`}><strong className={`${clickedDiv === 0 ? 'background' : ''}`}>Full access to 140+ legal forms:</strong></p>
                        <ul className={`${clickedDiv === 0 ? 'background' : ''}`}><li >Lease, sub-lease agreements</li><li>Eviction notices, various addendums</li><li>Tax and business forms</li></ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

Premium.propTypes = {
    handleClick: PropTypes.func.isRequired,
    clickedDiv: PropTypes.number.isRequired
};

export default Premium;
