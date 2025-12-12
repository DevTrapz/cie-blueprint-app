import type { ElementArea as ElementData } from "../types/ElementArea.types";
import "../styles/layout-element-area.css";
interface props {
  element: ElementData;
}

export default function ElementArea({ element }: props) {
  return (
    <div className={`element-${element.position} background-black`}>
      <div
        className={`row-element-1 ${element.position}-element-primary flex-row-space-around`}
      >
        <img src={element.image_url_icon_hard_coded} className="width-15"></img>
        <div className="title-element">
          <strong className="font-12">Mastered Element: </strong>
          <h3>{element.type}</h3>
          <strong className="font-12">{element.role}</strong>
        </div>
        <span className="width-15 font-10-center">
          {element.description_hard_coded}
        </span>
      </div>
      <div
        className={`row-element-2 ${element.position}-element-secondary font-14`}
      >
        <span className="font-montserrat-light">{element.guide}</span>
        <span className="font-montserrat-light">{element.career}</span>
      </div>
      <div className={`row-element-3 font-13`}>
        <div className="sub-cell-element sub-cell-top-color font-strong">
          {element.words.bottom_line_opposite}
        </div>
        <div className="sub-cell-element sub-cell-top-color font-strong">
          {element.words.action_step_opposite}
        </div>
        <div className="sub-cell-element sub-cell-top-color font-strong">
          {element.words.result_opposite}
        </div>
        <div className="sub-cell-element sub-cell-left-color font-strong">
          {element.words.bottom_line}
        </div>
        <div className="sub-cell-element sub-cell-mid-color font-strong">
          {element.words.action_step}
        </div>
        <div className="sub-cell-element sub-cell-right-color font-strong">
          {element.words.result}
        </div>
      </div>
      <div
        className={`row-element-4 ${element.position}-element-secondary font-14`}
      >
        <span className="font-12-strong">
          NAP: <span className="font-red-strong">{element.nap}</span>
        </span>
        <span className="font-12-strong">GP: {element.grand_parent}</span>
      </div>
      <div
        className={`row-element-5 ${element.position}-element-secondary font-14`}
      >
        <span className="font-12-strong">Life: {element.life_1}</span>
        <span className="font-12-strong">Life: {element.life_2}</span>
      </div>
    </div>
  );
}
