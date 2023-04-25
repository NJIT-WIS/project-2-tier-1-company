import { useRef } from 'react';
import config from "@config/config.json";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export default function NewsLetterSignUpForm() {
  const inputRef = useRef(null);

  const subscribeUser = async (e) => {
    e.preventDefault();

    // this is where your mailchimp request is made

    const res = await fetch('/api/subscribeUser', {
      body: JSON.stringify({
        email: inputRef.current.value,
      }),

      headers: {
        'Content-Type': 'application/json',
      },

      method: 'POST',
    });
  };

  return(
    <form
    method="POST"
    action={config.params.contact_form_action}
    className="contact-form"
    onSubmit={subscribeUser}
  >
<h3 className="h5">Mailing List</h3>
<div className="my-4">
  <label
        className="mb-2 font-medium text-dark form__label"
        htmlFor="email-input"
      >
        Email
      </label>
      <input
        className="form-input w-full"
        name="email"
        placeholder="Email Address"
        type="email"
        id="email-input"
        ref={inputRef}
        required
      />
  </div>
  <div className="my-4 text-center">
      <input type="checkbox" id="agree" name="agree" value="agree" required/>
      <label htmlFor="agree">  I agree to the <a href="/terms-policy" class="text-primary">Terms of Service</a> and Privacy Policy</label>
  </div>
<div className="my-3">
<button type="submit" name="subscribe" className="btn btn-primary block w-full" value="">
      Subscribe!
  </button>
</div>
</form>
);
}