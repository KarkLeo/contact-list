import React, { useEffect } from "react";
import "./ContactList.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchContactList } from "../../store/reducers/contactsListReducer";
import ContactListItem from "./ContactListItem/ContactListItem";
import { NavLink } from "react-router-dom";

const ContactList = () => {
  const list = useSelector((state) => state.contact_list.list);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContactList());
  }, []);

  return (
    <div className="contact-list">
      <div className="page-head">
        <h1 className="page-head__title">Список пользователей</h1>
        <div className="page-head__button-row">
          <NavLink to={`/contact/create`} className="btn">
            Создать пользователя
          </NavLink>
        </div>
      </div>

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
