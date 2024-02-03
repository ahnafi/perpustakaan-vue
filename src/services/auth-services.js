import axios from "axios";

const url = "http://localhost:3000";

const login = async (username, password) => {
  try {
    const token = await axios.post(url + "/api/users/login", {
      username,
      password,
    });
    return token.data.data.token;
  } catch (error) {
    console.log("error ", error);
  }
};

const register = async (name, username, password) => {
  try {
    const user = await axios.post(url + "/api/users/register", {
      name,
      username,
      password,
    });
    return user.data.data;
  } catch (error) {
    console.log("errors ", error);
  }
};

const logout = async (token) => {
  try {
    await axios.post(
      url + "/api/users/logout",
      {},
      {
        headers: {
          Authorization: token,
        },
      }
    );
  } catch (error) {
    console.log("errors ", error);
  }
};

const getUser = async (token) => {
  try {
    const user = await axios.get(url + "/api/users/current", {
      headers: {
        Authorization: token,
      },
    });
    return user.data.data;
  } catch (error) {
    console.log(error);
  }
};

export default { login, register, logout, getUser };
