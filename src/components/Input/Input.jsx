import addPhoto from '../../assets/img/icons/addPhoto.png';
import clip from '../../assets/img/icons/clip.png';

import './Input.css';

export default function Input() {
    return (
        <div className='input-send__message'>
            <textarea name="message" id="message" required placeholder='Type a message'></textarea>
            <div>
                <input type="file" id='submit-file__message' style={{ display: 'none' }} />
                <label htmlFor="submit-file__message">
                    <img src={clip} alt="clip" />
                    <img src={addPhoto} alt="add picture to send" />
                </label>
            </div>
            <div>
                <button>Send</button>
            </div>
        </div>
    )
}
