import Social from "@components/Social";
import config from "@config/config.json";
import menu from "@config/menu.json";
import social from "@config/social.json";
import Logo from "@layouts/components/Logo";
import { markdownify } from "@lib/utils/textConverter";
import Link from "next/link";
import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const Footer = () => {
  const { copyright, footer_content } = config.params;
  const { email, phone, location } = config.contact_info;
  return (
    <footer className="">
      <div className="container">
        <div className="row border-y border-border py-12">
          
          <div className="animate md:col-6 lg:col-3">
          <div className="my-2 row items-center justify-center">
      <div className="animate">
        <form
              method="POST"
              action={config.params.contact_form_action}
              className="contact-form rounded-xl p-6 shadow-[0_4px_25px_rgba(0,0,0,0.05)]"
            >
          <div className="my-5 text-center">
          <h3 className="h5">Mailing List</h3>
          </div>
          <div className="my-5">
            <label
                  className="mb-2 block font-medium text-dark"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="form-input w-full"
                  name="email"
                  placeholder="Email Address"
                  type="email"
                  required
                />
            </div>
            <div className="my-5 text-center">
                <input type="checkbox" id="agree" name="agree" value="agree" required/>
                <label htmlFor="agree">  I agree to the <a href="/terms-policy" class="text-primary">Terms of Service</a> and Privacy Policy</label>
            </div>
          <div className="my-5">
          <Popup trigger={<button className="btn btn-primary block w-full" onClick="">
                Subscribe!
            </button>} modal>
            <div>test popup</div>
            </Popup>
          </div>
          </form>
        </div>
      </div>
          </div>

          <div className="animate mt-8 md:col-6 lg:col-3 lg:mt-0">
            <h3 className="h5">Socials</h3>
            <div className="mt-5">
              {email && <Link href={`mailto:${email}`}>{email}</Link>}
              {/* social icons */}
              <Social source={social} className="social-icons mt-5" />
            </div>
          </div>
          <div className="animate mt-8 md:col-6 lg:col-3 lg:mt-0">
            <h3 className="h5">Quick Links</h3>
            {/* footer menu */}
            <ul className="mt-5 leading-10">
              {menu.footer.map((menu) => (
                <li key={menu.name}>
                  <Link
                    href={menu.url}
                    className=" hover:text-primary hover:underline"
                  >
                    {menu.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="animate mt-8 md:col-6 lg:col-3 lg:mt-0">
            <h3 className="h5">Location & Contact</h3>
            <ul className="mt-5 leading-10">
              <li>{markdownify(location)}</li>
              {phone && (
                <li>
                  <Link href={`tel:${phone}`}>{phone}</Link>
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* copyright */}
        <div className=" py-6 text-center">
          {markdownify(copyright, "p", "footer-copy-write")}
        </div>
      </div>
      
    </footer>
  );
};

export default Footer;
