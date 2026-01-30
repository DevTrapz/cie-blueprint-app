export interface ElementAreaPayload {
  type: ElementTypes;
  position: ElementPositions | "";
  nap: string,
  grand_parent: string,
  life_1: string,
  life_2: string,
  guide: string,
  career: string,
  role: string,
  words: {
    bottom_line: string,
    action_step: string,
    result: string,
  }
}

export interface ElementAreaModel extends ElementAreaPayload {
  description_hard_coded: string,
  image_url_icon_hard_coded: string,
  words: {
    conscious_trait: string,
    unconscious_trait: string
    attachment: string
    bottom_line: string,
    action_step: string,
    result: string,
  }
}

export interface ElementAreaBlank {
  position: ElementPositions
  type: 'Blank'
}

export type ElementPositions = 'top-center' | 'top-right' | 'bottom-right' | 'bottom-center' | 'bottom-left' | 'top-left';
type ElementTypes = 'Health' | 'Support' | 'Finance' | 'Time' | 'Relationship' | 'Wisdom';