import type { ElementArea } from "./ElementArea.types";
import type { Module_1, Module_2, Module_3, Module_4, Module_5, Module_6, Module_7, Module_8, Module_9 } from "./Modules.types";

export interface BlueprintData {
  first_name: string
  last_name: string
  revision_date: string
  birth_date: string
  image_url_cie_logo_hard_coded: string
  image_url_chakra_hard_coded: string
  elements: ElementArea[]
  module_1: Module_1
  module_2: Module_2
  module_3: Module_3
  module_4: Module_4
  module_5: Module_5
  module_6: Module_6
  module_7: Module_7
  module_8: Module_8
  module_9: Module_9
}