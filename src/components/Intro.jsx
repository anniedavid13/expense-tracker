import { Form } from "react-router-dom"

// library
import { UserPlusIcon } from "@heroicons/react/24/solid";

// assets
import moneybank from "../assets/moneybank.png" 

const Intro = () => {
  return (
    <div className="intro">
      <div>
        <h1>
        Take control of your finances <span className="text-gradient">with ease </span>
        </h1>
        <p>
        track every expense with us!"
        </p>
        <Form method="post">
          <input
            type="text"
            name="userName"
            required
            placeholder="What is your name?" aria-label="Your Name" autoComplete="given-name"
          />
          <input type="hidden" name="_action" value="newUser"/>
          <button type="submit" className="btn btn--dark">
            <span>Create Account</span>
            <UserPlusIcon width={20} />
          </button>
        </Form>
      </div>
      <img src={moneybank} className="piggybank" alt="Person with money" height={400} />
    </div>
  )
}
export default Intro