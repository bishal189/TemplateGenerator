import PropTypes from 'prop-types';
import './Dialog.css';
const RenameDialog = ({ isOpen }) => {
    return (
        <div className={isOpen ? 'popup show' : 'popup'}>
            <div className="styles_modal-container__3KhOy styles_variant-third__1cTaX styles_base-modal-box__2SgYU">
                <div data-testid="close" className="styles_base-modal-box-close__teKRI"></div>
                <div className="styles_confirmation-content__up389">Rename</div>
                <input
                    type="text"
                    className="styles_input__2YSc7"
                    maxLength="60"
                    defaultValue="Lease/Rental Agreement"
                    onChange={(e) => console.log(e.target.value)} // Add your onChange handler here
                />
                <div className="styles_confirmation-actions__3q-qM">
                    <button type="button" className="button_button__172m_ button_ghost__21mru button_medium__Od8Ko styles_button__3Lban styles_cancel__1w8Jo">Cancel</button>
                    <button type="button" className="button_button__172m_ button_secondary__264eO button_medium__Od8Ko styles_button__3Lban styles_confirm__1uI0l">Save</button>
                </div>
            </div>
        </div>
    );
};

// Prop type validation
RenameDialog.propTypes = {
    isOpen: PropTypes.bool.isRequired, // isOpen prop is required and must be a boolean
};

export default RenameDialog;
