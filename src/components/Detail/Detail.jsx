import React, { useEffect } from "react";
import "./Detail.css";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Icon from "../commons/Sprite/Icon";
import { useDispatch } from "react-redux";
import { fetchCurrentContact } from "../../store/reducers/currentContactReducer";
import DeleteButton from "../DeleteButton/DeleteButton";

const Detail = ({ id }) => {
  const contact = useSelector((state) => state.current_contact);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentContact(id));
  }, [id]);

  return (
    <div className="c-detail">
      <div className="c-detail_head">
        <h1 className="c-detail__name">
          {contact.first_name} {contact.last_name}
        </h1>
        <Icon
          iconId={contact.is_active ? "check" : "uncheck"}
          className={`c-detail__status ${
            contact.is_active
              ? "c-detail__status--check"
              : "c-detail__status--uncheck"
          }`}
        />
        <div className="c-detail__button-row">
          <NavLink to={`/contact/${contact.id}/edit`} className="btn">
            Редактировать
          </NavLink>
          <DeleteButton />
        </div>
      </div>
      <div className="c-detail__body">
        <div className="text">{contact.birth_date}</div>
        <div className="text">{contact.job}</div>
        <div className="text">{contact.gender}</div>
        <div className="text">{contact.biography}</div>
      </div>
    </div>
  );
};

export default Detail;
