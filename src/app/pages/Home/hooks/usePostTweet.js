import { useCallback, useContext, useState } from "react";
import { postTweet } from "../../../../api/tweets";
import AppContext from "../../../contexts/AppContext";

const usePostTweet = () => {
  const { data: appData } = useContext(AppContext);
  const [tweetPostError, setTweetPostError] = useState(null);
  const [tweetPostLoading, setTweetPostLoading] = useState(false);

  const handleTweetPublish = useCallback(
    async ({ body, user }) => {
      if (!(body?.length > 0)) {
        setTweetPostError("Escriba un mensaje en su tweet");
        return false;
      }
      const fullUser = {
        ...user,
        id: appData?.auth?.user_id,
      };

      setTweetPostLoading(true);
      try {
        await postTweet(body, fullUser);
        setTweetPostError(false);
        setTweetPostLoading(false);
        return true;
      } catch (e) {
        setTweetPostError(e.message);
        setTweetPostLoading(false);
        return false;
      }
    },
    [appData?.auth?.user_id]
  );

  return [
    tweetPostLoading,
    tweetPostError,
    handleTweetPublish,
    setTweetPostError,
  ];
};

export default usePostTweet;
