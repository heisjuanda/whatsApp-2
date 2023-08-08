import userNoAvatar from '../../assets/img/icons/userNoAvatar.png';

import './Message.css';

export default function Message() {
    return (
        <div className='message-container'>
            <div className='message-info'>
                <p>Just now</p>
            </div>
            <div className='message-content'>
                <p>
                    asdadsafrgr srgar ag rg ag rg fd th kr htw th wy h
                    erhg qthrtaw cg4 hh yh dfnaomfnondva anfoajpfmg 
                    afmpampowrmpdfmp d,pwmr, gopmrogm romg oemg meo
                </p>
                <img src={userNoAvatar} alt="img from user" />
            </div>
        </div>
    )
}
