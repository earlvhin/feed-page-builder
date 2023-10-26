import { useRef } from "react";

export default function FeedInfoForm(props) {
  const feedURL = useRef();

  function submitHandler(event) {
    event.preventDefault();

    props.onDataSubmit({
      feedURL: feedURL.current.value,
    });
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="field-wrapper mb-1">
        <label htmlFor="feedURL">Enter Feed URL</label>
        <input
          name="feedURL"
          className="form-control rounded-0"
          type="text"
          id="feedURL"
          placeholder="Example: https://mywordpress-site-sample-url.me/feed"
          ref={feedURL}
        />
      </div>
      <div className="button-wrapper">
        <button type="submit" className="btn btn-primary rounded-0 w-100">
          Extract and Parse
        </button>
      </div>
    </form>
  );
}
