import React, { useState, useEffect } from "react";
import moment from "moment";
import "moment/locale/es";
import "./styles.css";
import Button from "../../../../components/Button";
import autosize from "../../../../../utils/libs/autosize.min";

const RELATIVE_TIME_UPDATE = 1000 * 60;

const TweetItem = ({
  body,
  createMode = false,
  created_at,
  user,
  onChange,
  onPublish,
  loading,
  error,
}) => {
  const [bodyValue, setBodyValue] = useState("");
  const [bodyFocus, setBodyFocus] = useState(false);
  moment.locale("es");
  const [relativeTime, setRelativeTime] = useState(
    moment(created_at).fromNow()
  );
  const intervalId = setInterval(
    () => setRelativeTime(moment(created_at).fromNow()),
    RELATIVE_TIME_UPDATE
  );

  useEffect(() => {
    autosize(document.querySelector(".tweet-container textarea"));
  }, []);

  useEffect(() => {
    return () => {
      clearInterval(intervalId);
    };
  }, [intervalId]);

  if (!user) return;

  return (
    <div
      className={`tweet-container${bodyFocus ? " focus" : ""} ${
        error ? " error" : ""
      }`}
    >
      <div className="tweet-header">
        <img
          src={user.photo?.base64 ?? user.photo}
          alt={`${user.name}-profile`}
        />
        <span>{user.name}</span>
      </div>
      {createMode ? (
        <textarea
          disabled={loading}
          className="tweet-body"
          placeholder="Escribe algo..."
          value={bodyValue}
          onFocus={() => setBodyFocus(true)}
          onBlur={() => setBodyFocus(false)}
          onChange={(e) => {
            setBodyValue(e.target.value);
            onChange?.(e);
          }}
        ></textarea>
      ) : (
        <div className="tweet-body">
          <span>{body}</span>
        </div>
      )}
      <div className="tweet-footer">
        <div>{error && <span className="error-msg">{error}</span>}</div>
        {createMode ? (
          <Button
            className="publish-button"
            loading={loading}
            onClick={async () => {
              const success = await onPublish?.({ body: bodyValue, user });
              if (success) setBodyValue("");
            }}
          >
            {!loading ? "Publicar" : "Publicando"}
          </Button>
        ) : (
          <span>{relativeTime}</span>
        )}
      </div>
    </div>
  );
};

export default TweetItem;
