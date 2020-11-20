import React, {useEffect} from 'react';
import './App.css';
import useWebAnimations from "@wellyshen/use-web-animations";

function App() {

  const animation1 = useWebAnimations();
  const animation2 = useWebAnimations();


  useEffect(()=>{
    animation1.animate({
      keyframes: {
        transform: ["translateX(500px)"], // Move by 500px
      },
      timing: {
        delay: 500, // Start with a 500ms delay
        duration: 1000, // Run for 1000ms
        iterations: Infinity, // Repeat once
        direction: "alternate", // Run the animation forwards and then backwards
        easing: "ease-in-out", // Use a fancy timing function
      },
    });


    animation2.animate({
      keyframes: {
        transform: ["translateY(500px)"], // Move by 500px
      },
      timing: {
        delay: 500, // Start with a 500ms delay
        duration: 500, // Run for 1000ms
        iterations: Infinity, // Repeat once
        direction: "alternate", // Run the animation forwards and then backwards
        easing: "ease-in-out", // Use a fancy timing function
      },
    });
  },[]);

  return (
    <React.Fragment>
      <h1 ref={animation1.ref}> Text 1</h1>
      <h1 ref={animation2.ref}> Text 2</h1>
    </React.Fragment>
  );

}
export default App;
