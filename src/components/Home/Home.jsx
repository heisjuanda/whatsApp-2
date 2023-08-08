import './Home.css';

import { Chat } from '../Chat/Chat';
import { SlideBar } from '../SlideBar/SlideBar';

export const Home = () => {
    return (
        <section className='home-section'>
            <article className='home-section__container'>
                <SlideBar />
                <Chat />
            </article>
        </section>
    );
};