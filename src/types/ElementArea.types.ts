export interface ElementArea {
  type: ElementTypes;
  position: ElementPositions;
  nap: string,
  grand_parent: string,
  life_1: string,
  life_2: string,
  guide: string,
  career: string,
  role: string,
  description_hard_coded: string,
  image_url_icon_hard_coded: string,
  words: {
    bottom_line: string,
    bottom_line_opposite: string,
    action_step: string,
    action_step_opposite: string
    result: string,
    result_opposite: string
  }
}

type ElementPositions = 'top-center' | 'top-right' | 'bottom-right' | 'bottom-center' | 'bottom-left' | 'top-left';
type ElementTypes = 'Health' | 'Support' | 'Finance' | 'Time' | 'Relationship' | 'Wisdom';