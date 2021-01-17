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
  async updateContactById(id, data) {
    try {
      let res = await axios.put(
        `${process.env.REACT_APP_API_URL}/v1/contact/1000${id}`,
        data
      );
      return res;
    } catch (err) {
      return err;
    }
  },
  async deleteContactById(id) {
    try {
      let res = await axios.delete(
        `${process.env.REACT_APP_API_URL}/v1/contact/${id}`
      );
      return res;
    } catch (err) {
      return err;
    }
  },
  async createContact(data) {
    try {
      let res = await axios.post(
        `${process.env.REACT_APP_API_URL}/v1/contact/`,
        data
      );
      return res;
    } catch (err) {
      return err;
    }
  },
};
