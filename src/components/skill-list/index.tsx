import React from "react";
import clsx from "clsx";
import styles from "./index.module.scss";

const dataLst = [1, 2, 3];

export const SkillList: React.FC = () => {
  return (
    <div className={clsx(styles.socialInfo)}>
      <div className={styles.title}>相关技能</div>
      {dataLst.map(item => (
        <div className={styles.item} key={item}>
          {item}
        </div>
      ))}
    </div>
  );
};
