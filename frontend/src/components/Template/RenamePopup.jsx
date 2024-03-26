import React from 'react'

const RenamePopup = ({model,removeRenameClick,title,placeholder,rename,duplicate,trash,save_btn}) => {
  return (
    <>
    {(model&&rename) && (
        <div className='popup-container'>
            <div className='internalpopup-container'>
                <button className='close-btn' onClick={removeRenameClick}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.41421 6L11.7071 1.70711C12.0976 1.31658 12.0976 0.683417 11.7071 0.292893C11.3166 -0.0976308 10.6834 -0.0976308 10.2929 0.292893L6 4.58579L1.70711 0.292893C1.31658 -0.0976308 0.683417 -0.0976308 0.292893 0.292893C-0.0976308 0.683417 -0.0976308 1.31658 0.292893 1.70711L4.58579 6L0.292893 10.2929C-0.0976308 10.6834 -0.0976308 11.3166 0.292893 11.7071C0.488408 11.9026 0.744227 12 1 12C1.25577 12 1.51159 11.9026 1.70711 11.7071L6 7.41421L10.2929 11.7071C10.4884 11.9026 10.7442 12 11 12C11.2558 12 11.5116 11.9026 11.7071 11.7071C12.0976 11.3166 12.0976 10.6834 11.7071 10.2929L7.41421 6Z" fill="#283250"></path></svg>
                </button>
                <div className='heading'><h2>{title}</h2></div>
                
                <input className='text-input' type="text" placeholder={placeholder} />
                <div className='btn-container'>
                    <button className='cancel-btn' onClick={removeRenameClick}>Cancel</button>
                    <button className='save-btn'>Save</button>
                </div>
            </div>
        </div>
    )}
    {(model&&duplicate) && (
        <div className='popup-container'>
            <div className='internalpopup-container'>
                <button className='close-btn' onClick={removeRenameClick}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.41421 6L11.7071 1.70711C12.0976 1.31658 12.0976 0.683417 11.7071 0.292893C11.3166 -0.0976308 10.6834 -0.0976308 10.2929 0.292893L6 4.58579L1.70711 0.292893C1.31658 -0.0976308 0.683417 -0.0976308 0.292893 0.292893C-0.0976308 0.683417 -0.0976308 1.31658 0.292893 1.70711L4.58579 6L0.292893 10.2929C-0.0976308 10.6834 -0.0976308 11.3166 0.292893 11.7071C0.488408 11.9026 0.744227 12 1 12C1.25577 12 1.51159 11.9026 1.70711 11.7071L6 7.41421L10.2929 11.7071C10.4884 11.9026 10.7442 12 11 12C11.2558 12 11.5116 11.9026 11.7071 11.7071C12.0976 11.3166 12.0976 10.6834 11.7071 10.2929L7.41421 6Z" fill="#283250"></path></svg>
                </button>
                <div className='heading'><h2>{title}</h2></div>
                
                <input className='text-input' type="text" placeholder={placeholder} />
                <div className='btn-container'>
                    <button className='cancel-btn' onClick={removeRenameClick}>Cancel</button>
                    <button className='save-btn'>Save</button>
                </div>
            </div>
        </div>
    )}
    {(model&&trash) && (
        <div className='popup-container'>
            <div className='internalpopup-container'>
                <button className='close-btn' onClick={removeRenameClick}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.41421 6L11.7071 1.70711C12.0976 1.31658 12.0976 0.683417 11.7071 0.292893C11.3166 -0.0976308 10.6834 -0.0976308 10.2929 0.292893L6 4.58579L1.70711 0.292893C1.31658 -0.0976308 0.683417 -0.0976308 0.292893 0.292893C-0.0976308 0.683417 -0.0976308 1.31658 0.292893 1.70711L4.58579 6L0.292893 10.2929C-0.0976308 10.6834 -0.0976308 11.3166 0.292893 11.7071C0.488408 11.9026 0.744227 12 1 12C1.25577 12 1.51159 11.9026 1.70711 11.7071L6 7.41421L10.2929 11.7071C10.4884 11.9026 10.7442 12 11 12C11.2558 12 11.5116 11.9026 11.7071 11.7071C12.0976 11.3166 12.0976 10.6834 11.7071 10.2929L7.41421 6Z" fill="#283250"></path></svg>
                </button>
                <div className='heading'><h2>{title}</h2></div>
                
                <p>The documents moved to Trash will be deleted forever in 30 days</p>
                <div className='btn-container'>
                    <button className='cancel-btn' onClick={removeRenameClick}>Cancel</button>
                    <button className='save-btn'>{save_btn}</button>
                </div>
            </div>
        </div>
    )}
   
    </>
    
  )
}

export default RenamePopup