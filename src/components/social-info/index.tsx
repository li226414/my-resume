import React from "react";
import styles from "./index.module.scss";
import clsx from "clsx";

const dataLst = [
  `GitHub：https://github.com/li-jia-nan`,
  `掘金：https://juejin.cn/user/782508010775198/posts`,
];

export const SocialInfo: React.FC = () => {
  return (
    <div className={clsx(styles.socialInfo)}>
      <div className={styles.title}>社交信息</div>
      {dataLst.map(item => (
        <div className={styles.item} key={item}>
          {item}
        </div>
      ))}
    </div>
  );
};
