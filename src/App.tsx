import React from "react";
import {
  Avatar,
  CommitGraph,
  PersonInfo,
  SocialInfo,
  SkillList,
  Introduction,
  Educational,
  OpenSource,
  WorkExperience,
  ProjectExperience,
  Thanks,
} from "./components";
import styles from "./App.module.scss";

const App: React.FC = () => {
  return (
    <div className={styles.wrap}>
      <Avatar />
      <PersonInfo />
      <CommitGraph />
      <Introduction />
      <SocialInfo />
      <Educational />
      <SkillList />
      <OpenSource />
      <WorkExperience />
      <ProjectExperience />
      <Thanks />
    </div>
  );
};

export default App;
