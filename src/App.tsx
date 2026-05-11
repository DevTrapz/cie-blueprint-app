import type { BlueprintModel } from "./types/BlueprintData.types.ts";
import {
  FillTopLeft,
  FillTopCenter,
  FillTopRight,
  FillCenterLeft,
  FillCenterCenter,
  FillCenterRight,
  FillBottomLeft,
  FillBottomCenter,
  FillBottomRight,
} from "./components/FillSections.tsx";
import { ButtonDownload } from "./components/ButtonDownload.tsx";
import ElementArea from "./components/ElementArea.tsx";
import useData from "./utils/get-data.ts";
import { resolveElementColorVars } from "./utils/resolve-element-colors.ts";

function App() {
  const data = useData();
  if (!data) return <></>;

  return (
    <>
      <ButtonDownload
        elementId="blueprint-grid"
        first_name={data.first_name}
        last_name={data.last_name}
        revision_date={data.revision_date}
      />
  <div
        id="blueprint-grid"
        className="background-black m-8"
        style={resolveElementColorVars(data.module_7)}
        >        
        {renderElementAreas(data)}
        <FillTopLeft
          first_name={data.first_name}
          last_name={data.last_name}
          revision_date={data.revision_date}
          image_url_cie_logo={data.image_url_cie_logo_hard_coded}
        />
        <FillTopCenter module_9={data.module_9} />
        <FillTopRight module_6={data.module_6} />
        <FillCenterLeft module_6={data.module_6} />
        <FillCenterCenter module_core={data.module_core} traits={data.traits} />
        <FillCenterRight module_6={data.module_6} />
        <FillBottomCenter module_7={data.module_7} />
        <FillBottomLeft
          module_1={data.module_1}
          module_2={data.module_2}
          module_6={data.module_6}
          module_8={data.module_8}
        />
        <FillBottomRight
          module_3={data.module_3}
          image_url_chakra={data.image_url_chakra_hard_coded}
        />
        <div className="margin-left bottom-left-element-secondary">
          <div className="flex-col-mid border-left-bottom-top">
            <div className="margin-left-rotate">
              <div className="flex-col-center">
                <strong style={{ width: "746.5px", textAlign: "center" }}>
                  {data.module_7.interal_block_left}
                </strong>
                <span style={{ width: "746.5px", textAlign: "center" }}>
                  {data.module_7.alignment_statement_1}
                </span>
              </div>
            </div>
          </div>
          <div className="background-primary">
            <div className="margin-left-translate height-100 width-100 background-primary"></div>
          </div>
        </div>

        <div className="margin-right bottom-right-element-secondary">
          <div className="flex-col-mid border-right-bottom-top">
            <div className="margin-right-rotate">
              <div className="flex-col-center">
                <strong style={{ width: "746.5px", textAlign: "center" }}>
                  {data.module_7.interal_block_right}
                </strong>
                <span style={{ width: "746.5px", textAlign: "center" }}>
                  {data.module_7.alignment_statement_3}
                </span>
              </div>
            </div>
          </div>
          <div className="background-primary">
            <div className="margin-right-translate height-100 width-100 background-primary"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

function renderElementAreas(data: BlueprintModel) {
  return data.elements.map((element, index) => (
    <ElementArea key={index} element={element} />
  ));
}
