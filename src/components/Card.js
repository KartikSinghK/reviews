import React from "react";
import "../styles/Card.css";
const Card = ({ review, cardNum, randomCard }) => {
    return (
        <div className='ui card raised'>
            <div className='image'>
                <img alt={review.name} src={review.image} />
            </div>
            <div className='content'>
                <div className='header'>{review.name}</div>
                <div className='meta'>{review.job}</div>
                <div className='description'>{review.text}</div>
                <div className='icons'>
                    <i
                        onClick={() => {
                            cardNum(review.id - 1);
                        }}
                        className='chevron left icon'
                    ></i>
                    <i
                        onClick={() => {
                            cardNum(review.id + 1);
                        }}
                        className='chevron right icon'
                    ></i>
                </div>
                <div className='buttons'>
                    <div
                        onClick={() => {
                            randomCard();
                        }}
                        className='ui button'
                    >
                        Surprise Me
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Card;
