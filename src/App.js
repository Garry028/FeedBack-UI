import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './index.css';
import Header from './components/Header';
import FeedbackData from './Data/FeedbackData';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import AboutPages from './components/pages/AboutPages';
import AboutLink from './components/AboutLink';


const App = () => {

  const [feedback, setFeedback] = useState(FeedbackData);

  // console.log(feedback);

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4(); // this will add unique id to item
    setFeedback([newFeedback, ...feedback]);
    console.log(newFeedback);
  }

  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete ?")) {
      setFeedback(feedback.filter((item) => item.id !== id));

      // filter means deleting what we want 
    }
  }

  return (

    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route exact path='/'
            element={
              <>
                <FeedbackForm handleAdd={addFeedback} />
                <FeedbackStats feedback={feedback} />
                <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
              </>
            }>
          </Route>
          <Route path='/about' element={<AboutPages />} />
        </Routes>
        <AboutLink />
      </div>
    </Router>
  );
}

export default App;
