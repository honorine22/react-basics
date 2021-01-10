import React, {useEffect, useContext} from 'react';
import './Cockpit.css';
import AuthContext from '../../context/auth-context';
const Cockpit = props => {
  const toggleButtonRef = React.useRef(null);
  const authContext = useContext(AuthContext);
  console.log(authContext.authenticated);

  useEffect(() => {
    console.log("[Cockpit.js] useEffect");
    //Http request
    // const timer = setTimeout(() => {
    //   alert('Saved data to cloud');
    // }, 1000);
    toggleButtonRef.current.click();
    return () => {
      // clearTimeout(timer);
      console.log('[Cockpit.js] 2nd useEffect');
    };
  }, []);
  // useEffect()
    const assignedClasses = [];
    let btnClass = '';
    if (props.showPersons) {
        btnClass = assignedClasses.push( 'red' );
    }

    if ( props.personsLength <= 2 ) {
      assignedClasses.push( 'red' ); // classes = ['red']
    }
    if ( props.personsLength <= 1 ) {
      assignedClasses.push( 'bold' ); // classes = ['red', 'bold']
    }

    return (
        <div>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join( ' ' )}>This is really working!</p>
            <button
                ref={toggleButtonRef}
                className={btnClass}
                onClick={props.clicked}>
                  Toggle Persons
                  </button>
                  <button onClick={authContext.login}>Log in</button>
        </div>
    );
};

export default React.memo(Cockpit);