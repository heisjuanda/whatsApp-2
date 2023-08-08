import userNoAvatar from '../../assets/img/icons/userNoAvatar.png';

import './Chats.css';

export const Chats = () => {
    return (
        <section className='chat-section'>
            <div>
                <img src={userNoAvatar} alt="User profile picture" />
                <p>Juan David Moreno Al</p>
            </div>
        </section>
    );
};