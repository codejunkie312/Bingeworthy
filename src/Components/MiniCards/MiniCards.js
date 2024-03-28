import './MiniCards.css';
import MiniCard from '../MiniCard/MiniCard';
import { useState, useEffect } from 'react';
import { removeFromWatchlist } from '../../utils/MoviedbAPI/tmdb';

const MiniCards = ({content, containerFilter, fetchContent, user, sessionId}) => {

    useEffect(() => {
        fetchContent();
    }, [containerFilter, content]);
    return (
        <div className='container-parent'>
            <div className='cards-container'>
                {content.length > 0 ? content.map(item => (
                    <MiniCard content={item} watchlist={content} user={user} sessionId={sessionId} />
                )) : <h4>Please add content</h4>}
            </div>
        </div>
    )
};

export default MiniCards;