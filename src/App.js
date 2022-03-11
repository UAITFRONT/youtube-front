import React, { useState, useEffect } from "react";
import Input from "./Input";

const initialFormState = {
  url: "",
};

const UserForm = () => {
  const [form, setForm] = useState(initialFormState);

  const setInput = e => {
    setForm(e.target.value);
  };
  const onSubmit = () => {}

  return (
    <div className="form">
      <div className="title">
      <h1 className="name-title">Youtube Front</h1>
      <svg width="50" height="50" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon-youtube">
        <path d="M79.2313 14.6188H20.7687C9.29846 14.6188 0 23.9173 0 35.3876V64.6126C0 76.0829 9.29846 85.3814 20.7687 85.3814H79.2313C90.7015 85.3814 100 76.0829 100 64.6126V35.3876C100 23.9173 90.7015 14.6188 79.2313 14.6188ZM65.1855 51.422L37.8407 64.4638C37.1121 64.8113 36.2704 64.2801 36.2704 63.473V36.5741C36.2704 35.7554 37.1342 35.2249 37.8643 35.5949L65.2092 49.4519C66.0222 49.8639 66.0081 51.0298 65.1855 51.422Z" fill="#F61C0D"/>
      </svg>
      </div>
      <form>
        <div className="form-group">
        <label>URL</label>
          <Input
            name="url"
            onChange={setInput}
            value={form.url}
            placeholder="Enter url"
            type='url'
          />
        </div>
        <div className="form-group-btn">
          <button type="button" className="btn btn-primary" onClick={onSubmit}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;