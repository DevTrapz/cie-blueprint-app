import { hardCodedData } from "../../data/data"
import type { ElementAreaPayload, ElementAreaModel, ElementAreaBlank, ElementPositions, ElementTypes } from "../types/ElementArea.types";
import type { BlueprintModel } from "../types/BlueprintData.types";
import { useState, useEffect, useCallback } from "react";
import { sampleData } from "../../data/data";
import type { Module_3 } from "../types/Modules.types";
export default function useData(): BlueprintModel | undefined {
  const [data, setData] = useState<BlueprintModel | undefined>();

  useEffect(() => {
    window.addEventListener('message', (e) => {
      if (e.data) setData(transformData(e.data))
    })

    if (import.meta.env.MODE === 'development') {
      setData(transformData(sampleData));
    } else {
      window.parent.postMessage("ready", "*");
    }
  }, [])

  const transformData = useCallback((data: any): BlueprintModel => {
    data["image_url_cie_logo_hard_coded"] = hardCodedData.image_url_cie_logo_hard_coded
    data["image_url_chakra_hard_coded"] = hardCodedData.image_url_chakra_hard_coded
    data["module_6"]["mental_spin_hard_coded"] = hardCodedData.module_6.mental_spin_hard_coded
    data["module_6"]["spiritually_influenced_hard_coded"] = hardCodedData.module_6.spiritually_influenced_hard_coded
    data["module_6"]["mental_action_hard_coded"] = hardCodedData.module_6.mental_action_hard_coded
    data["module_6"]["guilt_hard_coded"] = hardCodedData.module_6.guilt_hard_coded
    data["module_6"]["projected_guilt_hard_coded"] = hardCodedData.module_6.projected_guilt_hard_coded
    data["module_6"]["internal_step_1_hard_coded"] = hardCodedData.module_6.internal_step_1_hard_coded
    data["module_6"]["internal_step_2_hard_coded"] = hardCodedData.module_6.internal_step_2_hard_coded
    data["module_6"]["external_step_1_hard_coded"] = hardCodedData.module_6.external_step_1_hard_coded
    data["module_6"]["external_step_2_hard_coded"] = hardCodedData.module_6.external_step_2_hard_coded
    data["module_core"]["role"] = findRole("Core", data["module_3"])

    const cleansedElements = data.elements
      .filter((element: any) => (element.position != "")
      )
      .map((element: ElementAreaPayload) => {
        const type = element.type;

        const role = findRole(type, data["module_3"]);

        const hardCodedElementMatch: any = hardCodedData.elements.find((element) => (element.type == type));

        const position = element.position.toLowerCase().replace(" ", "-")

        const varPosition = position.replace("-", "_")

        const conscious_trait: string = data.traits[varPosition + "_conscious_trait"]
        const unconscious_trait: string = data.traits[varPosition + "_unconscious_trait"]
        const attachment: string = data.traits[varPosition + "_attachment"]


        const is_mastered: boolean = position.includes("top")

        return {
          ...element,
          position,
          is_mastered,
          role,
          description_hard_coded: hardCodedElementMatch.description_hard_coded,
          image_url_icon_hard_coded: hardCodedElementMatch.image_url_icon_hard_coded,
          words: {
            ...element.words,
            conscious_trait,
            unconscious_trait,
            attachment
          }
        }
      });

    const availablePositions: ElementPositions[] = ['top-center', 'top-right', 'bottom-right', 'bottom-center', 'bottom-left', 'top-left']
    const definedPositions = cleansedElements.map((element: ElementAreaModel) => (element.position))

    const missingPositions = availablePositions.filter((availablePosition) => {
      return !definedPositions.includes(availablePosition)
    }
    )
    const fillElements: ElementAreaBlank[] = missingPositions.map((position) => ({ position, type: "Blank" }))

    const elements: (ElementAreaModel | ElementAreaBlank)[] = [...cleansedElements, ...fillElements]

    return { ...data, elements }

    function findRole(type: ElementTypes, module_3: Module_3): string {
      const area_key = Object.keys(module_3).find((key) =>
        (module_3 as Record<string, any>)[key] === type
      );

      const role_key = area_key ? area_key.split("_").slice(0, -1).join("_") + "_role" : "";

      const role = role_key ? (module_3 as Record<string, any>)[role_key] : "";
      return role
    }
  }, [])

  return data
}


