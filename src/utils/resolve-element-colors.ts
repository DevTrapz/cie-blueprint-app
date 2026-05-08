import type { Module_7 } from "../types/Modules.types";

type ColorPair = { primary: string; secondary: string };

const ORANGE: ColorPair = { primary: "#ff9b33", secondary: "#ffc07f" };
const PURPLE: ColorPair = { primary: "#c083f6", secondary: "#dab7fa" };
const GREEN: ColorPair = { primary: "#71df66", secondary: "#aceca6" };
const WHITE: ColorPair = { primary: "#ffffff", secondary: "#ffffff" };

function resolveColor(value: string | undefined): ColorPair {
  switch (value?.trim().toLowerCase()) {
    case "physically taken care of":
      return ORANGE;
    case "emotionally expressed":
      return PURPLE;
    case "spiritually influenced":
      return GREEN;
    default:
      return WHITE;
  }
}

export function resolveElementColorVars(
  module_7: Module_7
): React.CSSProperties {
  const left = resolveColor(module_7.interal_block_left);
  const center = resolveColor(module_7.balanced_sensuality);
  const right = resolveColor(module_7.interal_block_right);

  return {
    "--element-left-primary": left.primary,
    "--element-left-secondary": left.secondary,
    "--element-center-primary": center.primary,
    "--element-center-secondary": center.secondary,
    "--element-right-primary": right.primary,
    "--element-right-secondary": right.secondary,
  } as React.CSSProperties;
}