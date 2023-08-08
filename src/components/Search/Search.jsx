import userNoAvatar from '../../assets/img/icons/userNoAvatar.png';

import './Search.css';

export const Search = () => {
    return (
        <div className='search-section__container'>
            <div>
                <input type="text" placeholder='Search user' />
            </div>
            <div>
                <div>
                    <img src={userNoAvatar} alt="User profile picture" />
                    <p>Juan David Moreno Al</p>
                </div>
            </div>
        </div>
    );
};