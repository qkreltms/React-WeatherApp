import React from 'react';

function Form(props) {
  return (
    <div>
      <form onSubmit={props.getWeather}>
        <input type="text" name="city" placeholder="City..."/>
        <input type="text" name="country" placeholder="Contry..."/>
        <button>Get Weather</button>
      </form>
    </div>
  )
}

export default Form