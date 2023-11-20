import React from "react";
import clsx from "clsx";
import styles from "./index.module.scss";

const projectList = [
  {
    name: "DTable",
    description: [
      "低代码多人协作平台，竞品有腾讯文档、飞书文档、WPS文档、黑帕云、维格表等平台",
      "核心功能主要有表格视图、表单视图、看板视图、画册视图、日历视图、甘特图（正在开发中）",
      "精确到单元格的高级权限控制，自动化机器人实现数据的自动化处理，和第三方数据打通",
      "依赖 socket 通信，实现后台数据同步，保证万级数据的前端虚拟滚动&实时协作功能",
      "实现复杂的分支和审批流配置，定制化 monaco-editor 编辑器",
      "视图交互使用了乐观更新策略，在强交互场景中保证用户体",
      "使用自定义 API 实现线上错误信息收集，并且接入钉钉机器人警告",
      "具备完整的日常开发体系，在数据流和组件状态管理上均使用 React Hook 编写，整个项目设计 50+ 自定义hook",
      "除此之外，独立负责 saas 官网的开发与上线，使用 Next.js + Typescript 作为主要技术栈",
    ],
  },
  {
    name: "Yoycol",
    description: [
      "该项目是一款面向海外市场的跨境电商服务平台，实现了“可见即可得”，为定制客户提供了更多的内容和流量。",
      "该项目使用 React + Typescript + antd 作为主要技术栈。",
      "在职期间对 package.json 中的部分框架和库做了升级和兼容，并且完成 90% 页面移动端适配",
      "集成 Sentry 并通过开发的错误通知服务，实现异常上报功能，及时处理错误，使得项目异常减少了 80%",
      "接入了第三方插件 swagger-axios-codepen，通过 swagger 接口文档自动生成接口函数，并且自动注入，为后续团队开发周期节约了大概 20% 时间",
      "对代码进行全路由分割，提升用户体验，配合 chunk 分包加载，带来比较大的性能收益，FCP 时间从平均 4.1s 下降到平均 1.1s，根据小样本数据统计，北美地区平均加载速度从 5.7s 下降到 2.7s，马来西亚、越南地区平均加载速度从 4.5s 下降到 2.1s",
    ],
  },
];

export const ProjectExperience: React.FC = () => {
  return (
    <div className={clsx(styles.project)}>
      <div className={clsx(styles.title)}>项目经历</div>
      {projectList.map<React.ReactNode>(project => (
        <div className={styles.company} key={project.name}>
          <div className={styles.row1}>
            <div className={styles.name}>{project.name}</div>
          </div>
          {project.description.map<React.ReactNode>(item => (
            <div className={styles.item} key={item}>
              {item}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
