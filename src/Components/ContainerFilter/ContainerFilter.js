import './ContainerFilter.css';
import { useState, useEffect } from 'react';

const ContainerFilter = ({ setContainerFilter }) => {

    useEffect(() => {
        const links = document.querySelectorAll('.filter');
        links.forEach(link => {
            link.addEventListener('click', () => {
                links.forEach(item => {
                    item.classList.remove('active');
                });
                link.classList.add('active');
                setContainerFilter(link.textContent.toLowerCase());
            });
        });
    });

    return (
        <div className='container-filter'>
            <ul>
                <li>
                    <a className='filter all'>All</a>
                </li>
                <li>
                    <a className='filter movies'>Movies</a>
                </li>
                <li>
                    <a className='filter shows'>TV Shows</a>
                </li>
            </ul>
        </div>
    );
};

export default ContainerFilter;