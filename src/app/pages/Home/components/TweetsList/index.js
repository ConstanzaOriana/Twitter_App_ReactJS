import React from "react";
import TweetItem from "../TweetItem";
import TweetsLoader from "../TweetsLoader";
import "./styles.css";

const TweetsList = ({ list = [], loading, error }) => {
  if (loading) {
    return <TweetsLoader />;
  }

  if (error) {
    return (
      <div className="msg-container">
        <span className="message error">Error al cargar los tweets :(</span>
        <span className="message error">{error}</span>
      </div>
    );
  }

  if (list.length === 0) {
    return (
      <div className="msg-container">
        <span className="message">Aún no hay tweets, sé el primero!</span>
      </div>
    );
  }

  return (
    <div>
      {list.map((item, index) => (
        <TweetItem key={index} {...item} />
      ))}
    </div>
  );
};

export default TweetsList;
