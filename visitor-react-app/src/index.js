import ReactDOM from 'react-dom/client';
import Visitor from './components/visitor';
import VisitorCounter from './components/visitorCounter';
import './App.css';
import SignIn from './components/signIn';

function Welcome(props) {
  return <h1 className='highlight'>Welcome , {props.employeeName}</h1>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Welcome employeeName="Tufail"></Welcome>
    <Visitor className="highlight" visitorName="Sahana"></Visitor>
    <VisitorCounter counter="999"></VisitorCounter>
    <SignIn></SignIn>

  </div>
);



