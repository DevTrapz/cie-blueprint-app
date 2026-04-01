import type { ElementTypes } from "./ElementArea.types"

export interface Module_1 {
  truth: string
  hurt: string
  anger: string
  numb: string
}

export interface Module_2 {
  integration: string
}

export interface Module_3 {
  [key: string]: string | ElementTypes | undefined;
  provider_role: string
  lover_role: string
  friend_role: string
  son_daughter_role: string
  father_mother_role: string
  husband_wife_role: string
  man_woman_role: string
  provider_area: ElementTypes
  lover_area: ElementTypes
  friend_area: ElementTypes
  son_daughter_area: ElementTypes
  father_mother_area: ElementTypes
  husband_wife_area: ElementTypes
  man_woman_area: ElementTypes
  processed_emotion: string
  unprocessed_emotion: string
  dependent_pattern: string
}

export interface Module_4 {
  method: string
  practice: string
}

export interface Module_5 {
  path_attachment: string
  path_unconscious_trait: string
  path: string
}

export interface Module_6 {
  old_belief: string
  lesson_learned: string
  ego: string
  ego_statement: string
  external_wound_word: string
  external_connetion: string
  external_grounding: string
  internal_wound_word: string
  internal_connetion: string
  internal_grounding: string
  mental_process: string
  mental_process_definition: string
  mental_action: string
}

export interface Module_6_Hard_Code {
  guilt_hard_coded: string
  projected_guilt_hard_coded: string
  internal_step_1_hard_coded: string
  internal_step_2_hard_coded: string
  external_step_1_hard_coded: string
  external_step_2_hard_coded: string
}

export interface Module_7 {
  interal_block_left: string
  alignment_statement_1: string
  interal_block_right: string
  alignment_statement_2: string
  balanced_sensuality: string
  alignment_statement_3: string
  bottom_center_date_range: string
}

export interface Module_8 {
  empath: string
}

export interface Module_9 {
  fragment: string,
}

export interface Module_Core {
  role: string
  method: string
  core_truth: string
  life_purpose: string
  negativity: string
  practice: string
  coping_method: string
  guide: string
  result: string
  core_date_range: string
  action_step: string
  circuit: [string, string, string, string]
}