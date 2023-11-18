import React from "react";
import clsx from "clsx";
import avatarImg from "../../image/avatar.jpg";
import styles from "./index.module.scss";

export const Avatar: React.FC = () => {
  return (
    <div className={clsx(styles.avatar)}>
      <img src={avatarImg} alt="avatar" />
    </div>
  );
};
