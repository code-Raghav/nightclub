import Head from "next/head";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Booking() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <>
      <div
        id="booking"
        className="w-full flex items-center text-sm text-[#222] font-sansSerif m-0 py-12 bg-[#282828] font-medium leading-7 "
      >
        <div className="main w-full text-center">
          <h1 className="text-white pb-10 font-sansSerif text-4xl ">
            Want To Reserve?
          </h1>
          <div className="container">
            <div className="signup-content">
              <div className="signup-form xl:mx-auto">
                <form className="register-form" id="register-form">
                  <div className="form-row">
                    <div className="form-group">
                      <div className="form-input">
                        <label htmlFor="first_name" className="required">
                          Full name
                        </label>
                        <input type="text" name="full_name" id="full_name" />
                      </div>
                      <div className="form-input">
                        <label htmlFor="date" className="required">
                          No. of People
                        </label>
                        <input type="text" name="date" id="date" />
                      </div>
                      <div className="form-input">
                        <label htmlFor="phone_number" className="required">
                          Phone number
                        </label>
                        <input
                          type="text"
                          name="phone_number"
                          id="phone_number"
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="form-input">
                        <label htmlFor="count">Count</label>
                        <input type="text" name="count" id="count"></input>
                      </div>

                      <div className="form-input">
                        <label htmlFor="message">Message</label>
                        <input
                          type="text"
                          name="message"
                          id="message"
                          className="py-16"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="form-submit">
                    <input
                      type="submit"
                      value="Submit"
                      className="submit"
                      id="submit"
                      name="submit"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
