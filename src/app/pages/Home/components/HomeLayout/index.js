import React, { useContext } from "react";
import TweetsList from "../TweetsList";
import TweetItem from "../TweetItem";
import AppContext from "../../../../contexts/AppContext";
import "./styles.css";
import Navbar from "../../../../components/Navbar";
import useSubscribeTweetsList from "../../hooks/useSubscribeTweetsList";
import usePostTweet from "../../hooks/usePostTweet";

const HomeLayout = () => {
  const { data: appData } = useContext(AppContext);
  const [tweetsList, loadingTweets, tweetsError] = useSubscribeTweetsList();
  const [tweetPostLoading, tweetPostError, setPostTweet, setTweetPostError] =
    usePostTweet();

  return (
    <>
      <Navbar />
      <div className="tweets-list-container">
        <TweetItem
          createMode
          user={appData.user}
          onChange={() => setTweetPostError(null)}
          loading={tweetPostLoading}
          error={tweetPostError}
          onPublish={setPostTweet}
        />
        <TweetsList
          list={tweetsList}
          loading={loadingTweets}
          error={tweetsError}
        />
      </div>
    </>
  );
};

export default HomeLayout;
