import { firestore } from "../app/configs/connections/firebase";
import {
  collection,
  query,
  orderBy,
  getDocs,
  addDoc,
  onSnapshot,
} from "firebase/firestore";

import * as refs from "../app/configs/constants/firebase_refs";

export const postTweet = async (body, user) => {
  await addDoc(collection(firestore, refs.TWEETS_COLLECTION), {
    body,
    created_at: new Date(),
    likes: 0,
    dislikes: 0,
    user: {
      id: user.id,
      name: user.name,
      photo: user.photo,
    },
  });
};

// utilizar para pedir los tweets de una sola vez
export const getTweetsList = async () => {
  const tweetsCollectionRef = collection(firestore, refs.TWEETS_COLLECTION);
  const tweetsCollectionQuery = query(
    tweetsCollectionRef,
    orderBy("created_at", "desc")
  );

  const tweetsCollectionSnapshots = await getDocs(tweetsCollectionQuery);

  return tweetsCollectionSnapshots.docs.map((doc) => {
    return {
      ...doc.data(),
      created_at: doc.data().created_at.toDate().getTime(),
    };
  });
};

// utilizar para suscribirse a los cambios en tweets de manera automática
export const subscribeToTweetsList = (onNewTweet) => {
  const tweetsCollectionRef = collection(firestore, refs.TWEETS_COLLECTION);
  const tweetsCollectionQuery = query(
    tweetsCollectionRef,
    orderBy("created_at", "desc")
  );

  const unsubscribe = onSnapshot(
    tweetsCollectionQuery,
    (tweetsQuerySnapshot) => {
      if (tweetsQuerySnapshot.size === 0) onNewTweet([]);
      const tweets = [];
      tweetsQuerySnapshot.forEach((tweet) => {
        tweets.push({
          ...tweet.data(),
          created_at: tweet.data().created_at.toDate().getTime(),
        });

        onNewTweet(tweets);
      });
    }
  );

  return unsubscribe;
};
