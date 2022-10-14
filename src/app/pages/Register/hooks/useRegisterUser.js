import { useContext, useState } from "react";
import { registerUser } from "../../../../api/users";
import AppContext from "../../../contexts/AppContext";

const useRegisterUser = () => {
  const { data: appData, setData: setAppData } = useContext(AppContext);
  const [registerUserLoading, setRegisterUserLoading] = useState(false);
  const [registerUserError, setRegisterUserError] = useState(null);

  const setRegisterUser = async (formData) => {
    const { name, photo } = formData;

    if (!name || !photo) {
      setRegisterUserError("Complete los datos");
      return;
    }

    setRegisterUserLoading(true);
    try {
      const user = await registerUser(name, photo);
      setAppData({
        ...appData,
        auth: {
          user_id: user.id,
        },
        user: {
          name,
          photo,
        },
      });
    } catch (e) {
      setRegisterUserError(e.message);
    }
    setRegisterUserLoading(false);
  };

  return [registerUserLoading, registerUserError, setRegisterUser];
};

export default useRegisterUser;
