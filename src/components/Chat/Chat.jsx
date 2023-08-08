import Messages from '../Messages/Messages';
import Input from '../Input/Input';

import addContact from '../../assets/img/icons/addContact.png';
import moreInfo from '../../assets/img/icons/more.png';
import userNoAvatar from '../../assets/img/icons/userNoAvatar.png';

import './Chat.css';

export const Chat = () => {
  return (
    <section className='chat-section__container'>
      <header className='chat-section__info'>
        <div>
          <img src={userNoAvatar} alt="user avatar" />
          <p>Juan david moreno al</p>
        </div>
        <div>
          <img src={addContact} alt="add contact button" />
          <img src={moreInfo} alt="more information button" />
        </div>
      </header>
      <Messages />
      <Input />
    </section>
  )
}
