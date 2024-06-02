import { fetchUserInfo } from "./userAxios";
import { setUser } from "./userSlice";

export const getUserObj = () => async (dispatch) => {
    const { status, user } = await fetchUserInfo();
    /***** update store ****/
    dispatch(setUser(user))
}