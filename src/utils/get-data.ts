import { sampleData } from "../../data/sample-data"
import type { BlueprintData } from "../types/BlueprintData.types";

export default function getData(opDataBlockId: string) {
  const dataBlock = document.getElementById(opDataBlockId);
  const dataElement: HTMLCollectionOf<Element> | undefined = dataBlock?.getElementsByClassName("opt-text-wrapper");
  const rawData: string | undefined = dataElement?.[0].textContent;

  if (!rawData) return sampleData

  const data: BlueprintData = JSON.parse(rawData);

  return data
}
