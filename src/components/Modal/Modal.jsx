import PropTypes from 'prop-types';
import { useEffect } from 'react';

import { gsap } from 'gsap';

import './Modal.css';

export const Modal = ({
    showClose,
    closeModal,
    child
}) => {

    useEffect(() => {
        const tl = gsap.timeline();

        tl.to('.modal-body', 0.5, {
            delay: 0.3,
            translateY: '0%',
            opacity: 1,
            ease: 'power1.out'
        });
    }, []);

    const handleRemoveModal = () => {
        const tl = gsap.timeline();

        tl.to('.modal-body', 0.5, {
            translateY: '10%',
            opacity: 0,
            ease: 'power1.in'
        });

        setTimeout(() => {
            closeModal(false);
        }, 501);
    };

    return (
        <main className='modal-container'>
            <section className='modal-body'>
                {showClose ?
                    (
                        <button 
                            className='close-modal' 
                            onClick={handleRemoveModal}
                        >
                            X
                        </button>
                    ) : null}
                {child}
            </section>
        </main>
    );
};

Modal.propTypes = {
    showClose: PropTypes.bool.isRequired,
    closeModal: PropTypes.func,
    child: PropTypes.object.isRequired,
};