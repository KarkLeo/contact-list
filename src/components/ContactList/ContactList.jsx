import React, { useEffect } from "react";
import "./ContactList.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchContactList } from "../../store/reducers/contactsListReducer";
import ContactListItem from "./ContactListItem/ContactListItem";

const ContactList = () => {
  const list = useSelector((state) => state.contact_list.list);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContactList());
  }, []);

  return (
    <div className="contact-list">
      <h2 className="contact-list__head">Список пользователей</h2>
      <ul className="contact-list__body">
        {list.map((i) => (
          <li key={i.id} className="contact-list__item">
            <ContactListItem {...i} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
