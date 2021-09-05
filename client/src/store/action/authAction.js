const loginUser = (payload) => {
    return {
        type: 'LOGIN_USER',
        payload
    };
};

const logoutUser = () => {
    return {
        type: 'LOGOUT_USER'
    };
};

const authAction = {
    loginUser,
    logoutUser,
};

export default authAction;
