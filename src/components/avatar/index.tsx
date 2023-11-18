import React from "react";
import clsx from "clsx";
import avatarImg from "../../../img/avatar.jpg";
import styles from "./index.module.scss";

export const Avatar: React.FC = () => {
  return <img className={clsx(styles.avatar)} src={avatarImg} alt="avatar" />;
};
