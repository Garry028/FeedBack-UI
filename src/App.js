import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import AboutPages from './components/pages/AboutPages';
import { FeedbackProvider } from './components/context/FeedbackContext';
import AboutLink from './components/AboutLink';


const App = () => {

  return (

    <FeedbackProvider>
    
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route exact path='/'
            element={
              <>
                <FeedbackForm />
                <FeedbackStats/>
                <FeedbackList />
              </>
            }>
          </Route>
          <Route path='/about' element={<AboutPages />} />
        </Routes>
        <AboutLink />
      </div>
    </Router>
    </FeedbackProvider>
  );
}

export default App;
