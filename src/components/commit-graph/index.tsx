import clsx from "clsx";
import React from "react";
import { datasetList, dayList } from "./dataset";
import style from "./index.module.scss";

export const CommitGraph: React.FC = () => {
  return (
    <div className={clsx(style.graphWrap)}>
      <table className={clsx(style.contributionCalendarTable)}>
        <caption className={style.srOnly} />
        <thead>
          <tr style={{ height: 13 }}>
            <td style={{ width: 28 }} />
            <td className={style.contributionCalendarLabel} colSpan={3}>
              <span aria-hidden="true" style={{ position: "absolute", top: 0 }}>
                Nov
              </span>
            </td>
            <td className={style.contributionCalendarLabel} colSpan={4}>
              <span aria-hidden="true" style={{ position: "absolute", top: 0 }}>
                Dec
              </span>
            </td>
            <td className={style.contributionCalendarLabel} colSpan={5}>
              <span aria-hidden="true" style={{ position: "absolute", top: 0 }}>
                Jan
              </span>
            </td>
            <td className={style.contributionCalendarLabel} colSpan={4}>
              <span aria-hidden="true" style={{ position: "absolute", top: 0 }}>
                Feb
              </span>
            </td>
            <td className={style.contributionCalendarLabel} colSpan={4}>
              <span aria-hidden="true" style={{ position: "absolute", top: 0 }}>
                Mar
              </span>
            </td>
            <td className={style.contributionCalendarLabel} colSpan={5}>
              <span aria-hidden="true" style={{ position: "absolute", top: 0 }}>
                Apr
              </span>
            </td>
            <td className={style.contributionCalendarLabel} colSpan={4}>
              <span aria-hidden="true" style={{ position: "absolute", top: 0 }}>
                May
              </span>
            </td>
            <td className={style.contributionCalendarLabel} colSpan={4}>
              <span aria-hidden="true" style={{ position: "absolute", top: 0 }}>
                Jun
              </span>
            </td>
            <td className={style.contributionCalendarLabel} colSpan={5}>
              <span aria-hidden="true" style={{ position: "absolute", top: 0 }}>
                Jul
              </span>
            </td>
            <td className={style.contributionCalendarLabel} colSpan={4}>
              <span aria-hidden="true" style={{ position: "absolute", top: 0 }}>
                Aug
              </span>
            </td>
            <td className={style.contributionCalendarLabel} colSpan={4}>
              <span aria-hidden="true" style={{ position: "absolute", top: 0 }}>
                Sep
              </span>
            </td>
            <td className={style.contributionCalendarLabel} colSpan={5}>
              <span aria-hidden="true" style={{ position: "absolute", top: 0 }}>
                Oct
              </span>
            </td>
            <td className={style.contributionCalendarLabel} colSpan={2}>
              <span aria-hidden="true" style={{ position: "absolute", top: 0 }}>
                Nov
              </span>
            </td>
          </tr>
        </thead>
        <tbody>
          {datasetList.map<React.ReactNode>((row, i) => (
            <tr key={`tr-${i}`}>
              {dayList.map<React.ReactNode>((day, j) =>
                i === j ? (
                  <td className={style.contributionCalendarLabel} key={`td-${j}`}>
                    <span className={clsx(style.contributionCalendarDay)}>{j % 2 ? day : ""}</span>
                  </td>
                ) : null,
              )}
              {row.map<React.ReactNode>((col, k) => (
                <td
                  key={`td-${k}`}
                  data-date={col.date}
                  data-level={col.level}
                  data-view-component={col.viewComponent}
                  className={style.contributionCalendarDay}
                />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className={style.footer}>
        <span>Less</span>
        {[0, 1, 2, 3, 4].map(level => (
          <div
            key={level}
            data-level={level}
            className={clsx(style.contributionCalendarDay, style.level)}
          />
        ))}
        <span>More</span>
      </div>
    </div>
  );
};
