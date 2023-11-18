import React from "react";
import { Avatar, CommitGraph, PersonInfo, SocialInfo, SkillList } from "./components";
import "./App.scss";

const App: React.FC = () => {
  return (
    <div className="wrap">
      <Avatar />
      <PersonInfo />
      <CommitGraph />
      <p className="desc">
        四年前端经验，拥有 2B/2C 多个项目经验，熟悉 React，参与过 React 官方文档翻译工作，拥有丰富的
        React + TS 实践经验，积极参与行业内优秀前端技术框架开源共建，目前是 AntDesign 全球 49
        名团队成员之一、ahooks 团队成员之一，活跃于 GitHub 开源社区，给
        next.js、vite、tdesign、react-query 等众多知名大型开源库贡献过
        PR，乐于分享，对新技术保持高度敏感，喜欢钻研前沿优秀技术，喜欢研究一些优秀框架的源码，并梳理沉淀成技术文章，和团队成员一起成长。有较强的技术判断力和业务敏锐度。
      </p>
      <SocialInfo />
      <SkillList />
    </div>
  );
};

export default App;
