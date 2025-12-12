import type {
  Module_1,
  Module_2,
  Module_3,
  Module_4,
  Module_5,
  Module_6,
  Module_7,
  Module_8,
  Module_9,
} from "../types/Modules.types";

interface TopLeftType {
  first_name: string;
  last_name: string;
  revision_date: string;
  image_url_cie_logo: string;
}
export function FillTopLeft({
  first_name,
  last_name,
  revision_date,
  image_url_cie_logo,
}: TopLeftType) {
  return (
    <div className="fill-top-left flex-row background-primary">
      <div className="flex-col-center width-20">
        <img src={image_url_cie_logo} className="p-4 width-60"></img>
      </div>
      <div className="flex-col width-80">
        <div className="flex-col">
          <span className="font-14">
            <strong className="font-red">
              Blueprint for:{" "}
              <i>
                {first_name} {last_name}
              </i>
            </strong>
          </span>
          <span className="font-15-red-montserrat">
            Revised: <i>{revision_date}</i>
          </span>
          <br />
          <strong className="font-14">
            Judgment is wanting separation or feeling separate
          </strong>
        </div>
        <div className="flex-row height-50">
          <div className="font-13 p-12">Formula: </div>
          <div className="flex-col-mid font-11">
            <span>
              Confronting your <span className="font-blue">Bottom Line</span>
            </span>
            <span>
              Using your <span className="font-pink">Action Step</span>
            </span>
            <span>
              Clear the
              <span className="font-red">
                {" "}
                Judgement (Negative Amcescral Pattern - NAP)
              </span>
            </span>
            <span>
              Producing your <span className="font-orange">Result!</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

interface TopCenterType {
  module_9: Module_9;
}
export function FillTopCenter({ module_9 }: TopCenterType) {
  return (
    <div className="fill-top-center flex-col-mid-center background-primary border-top">
      <span>
        <strong>
          Fragment: <strong className="font-red">{module_9.fragment}</strong>
        </strong>
      </span>
      <span className="font-12-mid">
        Doing something that you enjoy in excess even if it has negative
        consequences
      </span>
    </div>
  );
}

interface TopRightType {
  module_6: Module_6;
}
export function FillTopRight({ module_6 }: TopRightType) {
  return (
    <div className="fill-top-right flex-col p-left-8 background-primary">
      <strong className="font-14">Mental Spin</strong>
      <span className="font-12 p-bottom-8">
        {module_6.mental_spin_hard_coded}
      </span>
      <strong className="font-14">Spiritually Influenced</strong>
      <span className="font-12 p-bottom-8">
        {module_6.spiritually_influenced_hard_coded}
      </span>
      <strong className="font-14">Mental Action</strong>
      <span className="font-12 p-bottom-8">
        {module_6.mental_action_hard_coded}
      </span>
    </div>
  );
}

interface CenterLeftType {
  module_6: Module_6;
}
export function FillCenterLeft({ module_6 }: CenterLeftType) {
  return (
    <div className="fill-center-left flex-col-center-space-around p-8 background-secondary">
      <h4>Internal Identity</h4>
      <div>
        <span className="font-strong">Wound: </span>
        <span className="font-blue-strong">{module_6.internal_wound_word}</span>
      </div>
      <div>
        <span className="font-strong">Connection: </span>
        <span className="font-blue-strong">{module_6.internal_connetion}</span>
      </div>
      <div>
        <span className="font-strong">Grounding Action: </span>
        <span className="font-blue-strong">{module_6.internal_grounding}</span>
      </div>
      <br />
      <div className="font-14">
        <span className="font-strong">Guilt: </span>
        <span>{module_6.guilt_hard_coded}</span>
      </div>
      <br />
      <div className="font-12-center">
        <span className="font-strong">Step 1: </span>
        <span>{module_6.internal_step_1_hard_coded}</span>
      </div>
      <div className="font-12-center">
        <span className="font-strong">Step 2: </span>
        <span>{module_6.internal_step_2_hard_coded}</span>
      </div>
    </div>
  );
}

interface CenterCenterType {
  module_3: Module_3;
  module_4: Module_4;
  module_5: Module_5;
  module_6: Module_6;
  module_7: Module_7;
}
export function FillCenterCenter({
  module_3,
  module_4,
  module_5,
  module_6,
  module_7,
}: CenterCenterType) {
  return (
    <div className="fill-center-center background-primary">
      <div className="center-center-sub-grid-1x2 background-black">
        <div className="flex-col-mid-center background-primary">
          <span className="font-12">
            date <i>thru</i> date
          </span>
          <h3 className="font-18">{module_3.role}</h3>
          <strong className="font-12">{module_5.life_purpose}</strong>
        </div>
        <div className="center-center-sub-grid-3x2 background-black">
          <div className="sub-cell-element sub-cell-top-color">
            {module_5.path_attachment}
          </div>
          <div className="sub-cell-element sub-cell-top-color">
            {module_5.path_unconscious_trait}
          </div>
          <div className="sub-cell-element sub-cell-top-color">
            {module_5.path}
          </div>
          <div className="sub-cell-element sub-cell-left-color">
            {module_4.core_truth}
          </div>
          <div className="sub-cell-element sub-cell-mid-color">
            {module_7.action_step}
          </div>
          <div className="sub-cell-element sub-cell-right-color">
            {module_6.result}
          </div>
        </div>
      </div>
      <div className="center-center-sub-grid-2x6 font-12 p-10">
        <strong className="flex-row-end-center">Negativity:</strong>
        <span className="flex-row-start-center font-red-strong">
          {module_4.negativity}
        </span>
        <strong className="font-end">Method:</strong>
        <span className="font-start">
          <span className="font-blue-strong">{module_5.method}</span>
        </span>
        <strong className="font-end">Practice:</strong>
        <span className="font-blue-start-strong">{module_5.practice}</span>
        <strong className="font-end">Guide: </strong>
        <span className="font-blue-start-strong">{module_4.guide}</span>
        <strong className="font-end">Circut: </strong>
        <span className="font-blue-start-strong">
          {module_4.circuit.join(", ")}
        </span>
        <strong className="font-end">Coping Method: </strong>
        <span className="font-blue-start-strong">Placehoder</span>
      </div>
    </div>
  );
}

interface CenterRightType {
  module_6: Module_6;
}
export function FillCenterRight({ module_6 }: CenterRightType) {
  return (
    <div className="fill-center-right flex-col-center-space-around p-8 background-secondary">
      <h4>External Identity</h4>
      <div>
        <span className="font-strong">Wound: </span>
        <span className="font-blue-strong">{module_6.external_wound_word}</span>
      </div>
      <div>
        <span className="font-strong">Connection: </span>
        <span className="font-blue-strong">{module_6.external_connetion}</span>
      </div>
      <div>
        <span className="font-strong">Grounding Outcome: </span>
        <span className="font-blue-strong">{module_6.external_grounding}</span>
      </div>
      <br />
      <div className="font-14">
        <span className="font-strong">Projected Guilt: </span>
        <span>{module_6.projected_guilt_hard_coded}</span>
      </div>
      <br />
      <div className="font-12-center">
        <span className="font-strong">Step 1: </span>
        <span>{module_6.external_step_1_hard_coded}</span>
      </div>
      <div className="font-12-center">
        <span className="font-strong">Step 2: </span>
        <span>{module_6.external_step_2_hard_coded}</span>
      </div>
    </div>
  );
}

interface BottomLeftType {
  module_1: Module_1;
  module_2: Module_2;
  module_6: Module_6;
  module_8: Module_8;
}
export function FillBottomLeft({
  module_1,
  module_2,
  module_6,
  module_8,
}: BottomLeftType) {
  return (
    <div className="fill-bottom-left background-primary">
      <div className="bottom-left-sub-grid-2x1">
        <div className="flex-col-center-space-around bottom-left-element-primary">
          <span>Judgement 1:</span>
          <span>Resisting Messages (Contrary Guide) / PAIN</span>
        </div>
      </div>
      <div className="flex-row">
        <div className="flex-col font-13 width-70">
          <span className="p-8">
            <span className="font-strong">Integration: </span>
            <span className="font-blue-strong">{module_2.integration}</span>
          </span>
          <span className="p-8">
            <span className="font-strong">Old Belief: </span>
            <span className="font-blue-strong">{module_6.old_belief}</span>
          </span>
          <span className="p-8">
            <span className="font-strong">Lesson Learned: </span>
            <span className="font-blue-strong">{module_6.lesson_learned}</span>
          </span>
          <span className="p-8">
            <span className="font-strong">Ego: </span>
            <span className="font-blue-strong">{module_6.ego}</span>
          </span>
          <span className="p-8">
            <span className="font-strong">Positive Ego Statement: </span>
            <span>{module_6.ego_statement}</span>
          </span>
          <span className="p-8 flex-item-end">
            <span className="font-strong">Empath Sensitive: </span>
            <span className="font-blue-strong">{module_8.empath}</span>
          </span>
        </div>
        <div className="flex-col font-13 width-30">
          <span className="p-8">
            <span className="font-red-strong">T</span>ruth:{" "}
            <span className="font-blue-strong">{module_1.truth}</span>
          </span>
          <span className="p-8">
            <span className="font-red-strong">H</span>urt:{" "}
            <span className="font-blue-strong">{module_1.hurt}</span>
          </span>
          <span className="p-8">
            <span className="font-red-strong">A</span>nger:{" "}
            <span className="font-blue-strong">{module_1.anger}</span>
          </span>
          <span className="p-8">
            <span className="font-red-strong">N</span>umb:{" "}
            <span className="font-blue-strong">{module_1.numb}</span>
          </span>
        </div>
      </div>
    </div>
  );
}
interface BottomCenterType {
  module_7: Module_7;
}
export function FillBottomCenter({ module_7 }: BottomCenterType) {
  return (
    <div className="fill-bottom-center border-bottom">
      <div className="flex-col-center-space-around background-primary bottom-center-element-primary">
        <span>Judgment 3:</span>
        <br />
        <span>Crossing free will (longevity) / FEAR</span>
      </div>
      <div className="flex-col-mid-center background-primary bottom-center-element-secondary">
        <span>{module_7.balanced_sensuality}</span>
        <span>
          date <i>thru</i> date
        </span>
        <span>{module_7.alignment_statement_2}</span>
      </div>
    </div>
  );
}

interface BottomRightType {
  module_3: Module_3;
  image_url_chakra: string;
}
export function FillBottomRight({
  module_3,
  image_url_chakra,
}: BottomRightType) {
  return (
    <div className="fill-bottom-right">
      <div className="bottom-right-sub-grid-2x1">
        <div className="flex-col-center-space-around bottom-right-element-primary">
          <span>Judgement 1:</span>
          <span>Resisting Messages (Contrary Guide) / PAIN</span>
        </div>
      </div>
      <div className="bottom-right-sub-grid-3x1 p-8 background-primary">
        <div className="flex-col font-13">
          <span className="p-4">
            <span className="font-strong">1 - Provider </span>
            <span>(Crown) </span>
            <span className="font-blue-strong">{module_3.provider}</span>
          </span>
          <span className="p-4">
            <span className="font-strong">2 - Lover </span>
            <span>(3rd Eye) </span>
            <span className="font-blue-strong">{module_3.lover}</span>
          </span>
          <span className="p-4">
            <span className="font-strong">3 - Friend </span>
            <span>(Throat) </span>
            <span className="font-blue-strong">{module_3.friend}</span>
          </span>
          <span className="p-4">
            <span className="font-strong">4 - Son / Daughter </span>
            <span>(Heart) </span>
            <span className="font-blue-strong">{module_3.son_daughter}</span>
          </span>
          <span className="p-4">
            <span className="font-strong">5 - Father / Mother</span>
            <span>(Solar Plexus) </span>
            <span className="font-blue-strong">{module_3.father_mother}</span>
          </span>
          <span className="p-4">
            <span className="font-strong">6 - Husban / Wife </span>
            <span>(Sacral) </span>
            <span className="font-blue-strong">{module_3.husband_wife}</span>
          </span>
          <span className="p-4">
            <span className="font-strong">7 - Man / Woman </span>
            <span>(Base) </span>
            <span className="font-blue-strong">{module_3.man_woman}</span>
          </span>
        </div>
        <div className="flex-row-mid-center">
          <img
            src={image_url_chakra}
            className="flex-mid-center width-100"
          ></img>
        </div>
        <div className="flex-col-center font-13">
          <br />
          <strong>Processed Emotion</strong>
          <span className="font-blue-strong">{module_3.processed_emotion}</span>
          <br />
          <strong>Unprocessed Emotion</strong>
          <span className="font-blue-strong">
            {module_3.unprocessed_emotion}
          </span>
          <br />
          <strong>Dependant Pattern</strong>
          <span className="font-blue-strong">{module_3.dependent_pattern}</span>
        </div>
      </div>
    </div>
  );
}
