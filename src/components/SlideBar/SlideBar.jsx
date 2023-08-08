import { Navbar } from '../Navbar/Navbar';
import { Search } from '../Search/Search';
import { Chats } from '../Chats/Chats';

import './SlideBar.css';

export const SlideBar = () => {
    return (
        <section className='slide-bar-section'>
            <Navbar />
            <Search />
            <Chats />
        </section>
    );
};