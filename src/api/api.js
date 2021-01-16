import axios from "axios";

export const contactAPI = {
  async getList() {
    try {
      let res = await axios.get(`${process.env.REACT_APP_API_URL}/v1/contact/`);
      return res.data;
    } catch (err) {
      return err;
    }
  },
};
