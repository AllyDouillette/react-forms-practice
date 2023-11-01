import { useState } from "react";
import "./App.css";

export default function App() {

  //TODO: Add your state fields here
  const initForm = {
    fullName: "",
    address: "",
    phoneNum: "",
    email: "",
    complain: "",
    contact: "",
    TaC: false
  }
  const [form, setFormContent] = useState(initForm)
  const {fullName} = form

  const inputHandler = (event) => {
    // create a variable e.g. name "type" and assign it the value of event.target.type
    const {name, value, type} = event.target
    // console.log(name, value, type)
    // update the state
    setFormContent(
      { 
        ...form,
        [name]: value
    }
    )
    console.log("updated form", form)
  }

  return (
    <>
      <form className="form">
        <h2>Complaining form!</h2>
        <div className="form__section-left">
          <label>
            Full name
            <input type="text" name="name" onChange={(event) => inputHandler(event)} required />
          </label>
          <label>
            Address
            <input type="text" name="address" onChange={(event) => inputHandler(event)} />
          </label>
          <label>
            Phone Number
            <input type="tel" name="phone" onChange={(event) => inputHandler(event)} />
          </label>

          <label>
            Email
            <input type="email" name="email" />
          </label>
        </div>

        <div className="form__section-right">
          <label>
            Write your complaint
            <textarea
              name="complaint"
              rows="10"
              placeholder="You can complain here"
              onChange={(event) => inputHandler(event)} 
            ></textarea>
          </label>

          <div className="form__radio-group" onChange={(event) => inputHandler(event)} >
            <p>How do you want to be contacted? </p>
            <label>
              <input type="radio" name="contact" value="phone" />
              Phone
            </label>

            <label>
              <input type="radio" name="contact" value="email" />
              Email
            </label>

            <label>
              <input type="radio" name="contact" value="post" />
              Slow Mail
            </label>

            <label>
              <input type="radio" name="contact" value="none" />
              No contact!
            </label>
          </div>

          <label>
            I agree you take my data, and do whatever
            <input type="checkbox" name="consent" id="consent" onChange={(event) => inputHandler(event)} />
          </label>
        </div>
        <input type="submit" value="Submit!" />
      </form>
    </>
  );
}
