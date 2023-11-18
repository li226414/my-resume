import React from "react";
import clsx from "clsx";
import styles from "./index.module.scss";

const dataLst = [
  "antd 团队成员、ahooks 团队成员，活跃于 GitHub 开源社区，给 Next.js、Vite 等众多知名大型开源库贡献过 PR",
  "熟悉 React 及其原理，参与过 React 官方文档翻译工作，熟悉 TypeScript，拥有丰富的 React + TS 实战经验",
  "熟悉前端性能优化的实现，例如代码优化、打包优化、资源优化，能结合实际业务场景进行优化",
  "熟悉 Webpack / Vite 等打包工具的基本配置， 能够对以上工具进行二次封装、基于以上工具搭建通用的开发环境",
  "熟悉 prettier / eslint 基本配置，有良好且严格的编码习惯，唯客户论，实用主义者",
  "熟悉代码开发到上线全流程，对协同开发，分支管理，项目配置等都有较深刻的最佳实践",
];

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
