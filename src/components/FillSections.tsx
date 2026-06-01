import type {
  Module_1,
  Module_2,
  Module_3,
  Module_6,
  Module_6_Hard_Code,
  Module_7,
  Module_8,
  Module_9,
  Module_Core,
} from "../types/Modules.types";
import type { TraitWords } from "../types/TraitWords.types";

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
    <div className="fill-top-left flex-col background-primary">
      <div className="flex-row" style={{ alignItems: "center" }}>
        <img
          src={image_url_cie_logo}
          className="p-4"
          style={{ width: "60px" }}
        ></img>
        <span className="font-14">
          <strong className="font-red">
            Blueprint for:{" "}
            <i>
              {first_name} {last_name}
            </i>
          </strong>
        </span>
      </div>
      <div className="flex-col" style={{ paddingLeft: "8px" }}>
        <span className="font-15-red-montserrat">
          Revised: <i>{revision_date}</i>
        </span>
        <br />
        <strong className="font-14">
          Judgment is wanting separation or feeling separate
        </strong>
      </div>
      <div
        className="flex-row"
        style={{ marginTop: "auto", paddingBottom: "12px" }}
      >
        <div className="font-13 p-12">Formula: </div>
        <div className="flex-col-mid font-11">
          <span>
            Confronting your{" "}
            <strong className="font-blue" style={{ fontSize: "12px" }}>
              Bottom Line
            </strong>
          </span>
          <span>
            Using your{" "}
            <strong className="font-pink" style={{ fontSize: "12px" }}>
              Action Step
            </strong>
          </span>
          <span>
            Clears the
            <strong className="font-red" style={{ fontSize: "12px" }}>
              {" "}
              Judgment (Negative Ancestral Pattern - NAP)
            </strong>
          </span>
          <span>
            Producing your{" "}
            <strong className="font-orange" style={{ fontSize: "12px" }}>
              Result!
            </strong>
          </span>
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
      <span className="font-12-mid">{module_9.fragment_desc}</span>
    </div>
  );
}

interface TopRightType {
  module_6: Module_6 & Module_6_Hard_Code;
}
export function FillTopRight({ module_6 }: TopRightType) {
  return (
    <div className="fill-top-right flex-col p-left-8 background-primary">
      <strong className="font-14">Mental Spin</strong>
      <span className="font-12 p-bottom-8">
        Grounding is imperative to proces the mental spin. In the metal spin,
        you will be replaying thoughts over and over, unable to choose your
        connection in Spirit.
      </span>
      <strong className="font-14">{module_6.mental_process}</strong>
      <span className="font-12 p-bottom-8">
        {module_6.mental_process_definition}
      </span>
      <strong className="font-14">Mental Action</strong>
      <span className="font-12 p-bottom-8">{module_6.mental_action}</span>
    </div>
  );
}

interface CenterLeftType {
  module_6: Module_6 & Module_6_Hard_Code;
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
        <span style={{ whiteSpace: "pre-line" }}>
          {module_6.internal_step_2_hard_coded}
        </span>
      </div>
    </div>
  );
}

interface CenterCenterType {
  module_core: Module_Core;
  traits: TraitWords;
}
export function FillCenterCenter({ module_core, traits }: CenterCenterType) {
  return (
    <div className="fill-center-center background-primary">
      <div className="center-center-sub-grid-1x2 background-black">
        <div className="flex-col-mid-center background-primary">
          <span className="font-12" style={{ textAlign: "center" }}>
            {module_core.core_date_range}
          </span>
          <h3 className="font-18" style={{ textAlign: "center" }}>
            {module_core.life_purpose}
          </h3>
          <strong className="font-12" style={{ textAlign: "center" }}>
            {module_core.role}
          </strong>
        </div>
        <div className="center-center-sub-grid-3x2 background-black font-13">
          <div className="sub-cell-element sub-cell-top-color font-strong">
            {traits.core_attachment}
          </div>
          <div className="sub-cell-element sub-cell-top-color font-strong">
            {traits.core_unconscious_trait}
          </div>
          <div className="sub-cell-element sub-cell-top-color font-strong">
            {traits.core_conscious_trait}
          </div>
          <div className="sub-cell-element sub-cell-left-color font-strong">
            {module_core.core_truth}
          </div>
          <div className="sub-cell-element sub-cell-mid-color font-strong">
            {module_core.action_step}
          </div>
          <div className="sub-cell-element sub-cell-right-color font-strong">
            {module_core.result}
          </div>
        </div>
      </div>
      <div className="flex-column font-12 p-10" style={{ flexGrow: 0 }}>
        <div className="m-4">
          <strong
            style={{
              width: "125px",
              display: "inline-block",
              textAlign: "right",
              marginTop: "2px",
              verticalAlign: "top",
            }}
          >
            Negativity:
          </strong>
          <span
            className="font-red-strong"
            style={{
              marginLeft: "12px",
              display: "inline-block",
              width: "65%",
              fontSize: 13,
            }}
          >
            {module_core.negativity}
          </span>
        </div>
        <div className="m-4">
          <strong
            style={{
              width: "125px",
              display: "inline-block",
              textAlign: "right",
              marginTop: "2px",
              verticalAlign: "top",
            }}
          >
            Method:{" "}
          </strong>
          <span
            className="font-blue-start-strong"
            style={{
              marginLeft: "12px",
              display: "inline-block",
              width: "65%",
              fontSize: 13,
            }}
          >
            {module_core.method}
          </span>
        </div>
        <div className="m-4">
          <strong
            style={{
              width: "125px",
              display: "inline-block",
              textAlign: "right",
              marginTop: "2px",
              verticalAlign: "top",
            }}
          >
            Practice:
          </strong>
          <span
            className="font-blue-start-strong"
            style={{
              marginLeft: "12px",
              display: "inline-block",
              width: "65%",
              fontSize: 13,
            }}
          >
            {module_core.practice}
          </span>
        </div>
        <div className="m-4">
          <strong
            style={{
              width: "125px",
              display: "inline-block",
              textAlign: "right",
              marginTop: "2px",
              verticalAlign: "top",
            }}
          >
            Guide:{" "}
          </strong>
          <span
            className="font-blue-start-strong"
            style={{
              marginLeft: "12px",
              display: "inline-block",
              width: "65%",
              fontSize: 13,
            }}
          >
            {module_core.guide}
          </span>
        </div>

        <div className="m-4">
          <strong
            style={{
              width: "125px",
              display: "inline-block",
              textAlign: "right",
              marginTop: "2px",
              verticalAlign: "top",
            }}
          >
            Circuit:{" "}
          </strong>
          <span
            className="font-blue-start-strong"
            style={{
              marginLeft: "12px",
              display: "inline-block",
              width: "65%",
              verticalAlign: "top",
              fontSize: 13,
            }}
          >
            {module_core.circuit.join(", ")}
          </span>
        </div>
        <div className="m-4">
          <strong
            style={{
              width: "125px",
              display: "inline-block",
              textAlign: "right",
              marginTop: "2px",
              verticalAlign: "top",
            }}
          >
            Coping Method:{" "}
          </strong>
          <span
            className="font-blue-start-strong"
            style={{
              marginLeft: "12px",
              display: "inline-block",
              width: "65%",
              fontSize: 13,
            }}
          >
            {module_core.coping_method}
          </span>
        </div>
      </div>
    </div>
  );
}

interface CenterRightType {
  module_6: Module_6 & Module_6_Hard_Code;
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
          <span>Judgment 1:</span>
          <span className="font-16">
            Resisting Messages (Contrary Guide) / PAIN
          </span>
        </div>
      </div>
      <div className="flex-col">
        <div className="flex-row">
          <div className="flex-col font-13 width-70">
            <span className="p-4">
              <span className="font-strong">Integration: </span>
              <span className="font-blue-strong">{module_2.integration}</span>
            </span>
            <span className="p-4">
              <span className="font-strong">Old Belief: </span>
              <span className="font-blue-strong">{module_6.old_belief}</span>
            </span>
            <span className="p-4">
              <span className="font-strong">Lesson Learned: </span>
              <span className="font-blue-strong">{module_6.lesson_learned}</span>
            </span>
            <span className="p-4">
              <span className="font-strong">Ego: </span>
              <span className="font-blue-strong">{module_6.ego}</span>
            </span>
            <span className="p-4">
              <span className="font-strong">Positive Ego Statement: </span>
              <span className="font-14">{module_6.ego_statement}</span>
            </span>
            <span className="p-4 flex-item-end">
              <span className="font-strong">Empath Sensitive: </span>
              <span className="font-blue-strong">{module_8.empath}</span>
            </span>
          </div>
          <div className="flex-col font-13 width-30">
            <span className="p-4">
              <span className="font-red-strong">T</span>ruth:{" "}
              <span className="font-blue-strong">{module_1.truth}</span>
            </span>
            <span className="p-4">
              <span className="font-red-strong">H</span>urt:{" "}
              <span className="font-blue-strong">{module_1.hurt}</span>
            </span>
            <span className="p-4">
              <span className="font-red-strong">A</span>nger:{" "}
              <span className="font-blue-strong">{module_1.anger}</span>
            </span>
            <span className="p-4">
              <span className="font-red-strong">N</span>umb:{" "}
              <span className="font-blue-strong">{module_1.numb}</span>
            </span>
          </div>
        </div>
        <span
          className="font-11"
          style={{ textAlign: "center", padding: "4px", marginTop: "auto" }}
        >
          https://www.centerforintuitiveeducation.org/ | (602) - 621 - 4030 | 2026 Copyright &copy;
        </span>
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
        <span className="font-16">Crossing Free Will (Negativity) / FEAR</span>
      </div>
      <div className="flex-col-mid-center background-primary bottom-center-element-secondary">
        <strong className="font-16">{module_7.balanced_sensuality}</strong>
        <span className="font-16">{module_7.bottom_center_date_range}</span>
        <span className="font-16" style={{ textAlign: "center" }}>
          {module_7.alignment_statement_2}
        </span>
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
          <span>Judgment 2:</span>
          <span className="font-16">
            Taking It Personally (Negative Coping Method) / STRUGGLE
          </span>
        </div>
      </div>
      <div className="bottom-right-sub-grid-3x1 p-8 background-primary">
        <div className="flex-col font-13">
          <span className="p-4">
            <span className="font-strong">1 - Provider </span>
            <span>(Crown) </span>
            <span className="font-blue-strong">{module_3.provider_role}</span>
          </span>
          <span className="p-4">
            <span className="font-strong">2 - Lover </span>
            <span>(3rd Eye) </span>
            <span className="font-blue-strong">{module_3.lover_role}</span>
          </span>
          <span className="p-4">
            <span className="font-strong">3 - Friend </span>
            <span>(Throat) </span>
            <span className="font-blue-strong">{module_3.friend_role}</span>
          </span>
          <span className="p-4">
            <span className="font-strong">4 - Son / Daughter </span>
            <span>(Heart) </span>
            <span className="font-blue-strong">
              {module_3.son_daughter_role}
            </span>
          </span>
          <span className="p-4">
            <span className="font-strong">5 - Father / Mother</span>
            <span>(Solar Plexus) </span>
            <span className="font-blue-strong">
              {module_3.father_mother_role}
            </span>
          </span>
          <span className="p-4">
            <span className="font-strong">6 - Husband / Wife </span>
            <span>(Sacral) </span>
            <span className="font-blue-strong">
              {module_3.husband_wife_role}
            </span>
          </span>
          <span className="p-4">
            <span className="font-strong">7 - Man / Woman </span>
            <span>(Base) </span>
            <span className="font-blue-strong">{module_3.man_woman_role}</span>
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
          <strong>Dependent Pattern</strong>
          <span className="font-blue-strong">{module_3.dependent_pattern}</span>
        </div>
      </div>
    </div>
  );
}
