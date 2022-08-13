import React, { useState } from 'react';
import Button from './shared/Button';
import RatingSelect from './RatingSelect';

const FeedbackForm = ({ handleAdd }) => {

    const [text, setText] = useState('');
    const [rating, setRating] = useState(10);
    const [btnDisalbled, setbtnDisabled] = useState(true);
    const [msg, setmsg] = useState('');

    const handleTextChange = (e) => {
        if (text === '') {
            setbtnDisabled(true);
            setmsg(null);
        }
        else if (text !== '' && text.trim().length <= 10) {
            setmsg('Text must be 10 characters long');
            setbtnDisabled(true);
        }
        else {
            setmsg(null);
            setbtnDisabled(false);
        }
        setText(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (text.trim().length > 10) {
            const newFeedback = {
                text,
                rating
            }
            handleAdd(newFeedback);
            setText('');
        }
    }

    return (
        <div className='card'>
            <form onSubmit={handleSubmit}>
                <h2>How would you rate your service with us?</h2>
                <RatingSelect select={(rating) => {
                    setRating(rating)
                }} />
                <div className="input-group">
                    <input type="text" placeholder='Write a review' onChange={handleTextChange}
                        value={text} />
                    <Button type='submit' isDisabled={btnDisalbled}>Send</Button>
                </div>
                {msg && <div className='message'>{msg}</div>}
            </form>
        </div>
    )
}

export default FeedbackForm