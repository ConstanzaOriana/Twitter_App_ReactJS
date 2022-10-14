import { useEffect, useState } from "react";
import { subscribeToTweetsList } from "../../../../api/tweets";

const useSubscribeTweetsList = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [list, setList] = useState([]);

  useEffect(() => {
    let unsubscribe;
    try {
      unsubscribe = subscribeToTweetsList((tweetsList) => {
        setList(tweetsList);
        setLoading(false);
      });
    } catch (e) {
      setError(e.message);
      setLoading(false);
    }

    return unsubscribe;
  }, []);

  return [list, loading, error];
};

export default useSubscribeTweetsList;
