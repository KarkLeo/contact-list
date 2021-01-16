import axios from "axios";

export const contactAPI = {
  async getList() {
    try {
      let res = await axios.get(`${process.env.REACT_APP_API_URL}/v1/contact/`);
      return res;
    } catch (err) {
      return err;
    }
  },
  async getContactById(id) {
    try {
      let res = await axios.get(
        `${process.env.REACT_APP_API_URL}/v1/contact/${id}`
      );
      return res;
    } catch (err) {
      return err;
    }
  },
};
