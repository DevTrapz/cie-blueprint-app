import { sampleData, hardCodedData } from "../../data/data"
import type { BlueprintData } from "../types/BlueprintData.types";

export default function getData() {
  const queryString = window.location.search;

  const urlParams = new URLSearchParams(queryString);
  const payload = urlParams.get("payload");

  if (!payload) return sampleData

  const data: BlueprintData = insertHardCodedData(JSON.parse(payload));
  return data
}

function insertHardCodedData(data: any) {
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

  const elements = data.elements.map((element: any) => {
    const type = element.type;
    const hardCodedElementMatch: any = hardCodedData.elements.find((element) => (element.type == type));
    return {
      ...element,
      description_hard_coded: hardCodedElementMatch.description_hard_coded,
      image_url_icon_hard_coded: hardCodedElementMatch.image_url_icon_hard_coded
    }
  });

  return { ...data, elements }
}