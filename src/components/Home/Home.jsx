import './Home.css';

import { Chats } from '../Chats/Chats';
import { SlideBar } from '../SlideBar/SlideBar';

export const Home = () => {
    return (
        <section className='home-section'>
            <SlideBar />
            <Chats />
        </section>
    );
};