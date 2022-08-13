import React, { useState, useContext, useEffect } from 'react';
import Button from './shared/Button';
import RatingSelect from './RatingSelect';
import FeedbackContext from './context/FeedbackContext';

const FeedbackForm = () => {

    const [text, setText] = useState('');
    const [rating, setRating] = useState(10);
    const [btnDisalbled, setbtnDisabled] = useState(true);
    const [msg, setmsg] = useState('');

    const { addFeedback, feedbackEdit, updateFeedback } = useContext(FeedbackContext);


    useEffect(() => {

        if (feedbackEdit.edit === true) {
            setbtnDisabled(false);
            setText(feedbackEdit.item.text);
            setRating(feedbackEdit.item.rating);
        }

    }, [feedbackEdit]); // in the sqr brackete is dependencies


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
            if (feedbackEdit.edit === true) {
                updateFeedback(feedbackEdit.item.id, newFeedback);
            }
            else {
                addFeedback(newFeedback);
            }
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