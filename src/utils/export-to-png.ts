import html2canvas from "html2canvas";


export default async function downloadAsPNG(id: string, fileName: string) {
  const element = document.getElementById(id);
  if (element == null) return console.log("download element not found");

  const canvas = await html2canvas(element);
  const imgDataUrl = canvas.toDataURL("image/png");

  const link = document.createElement("a");
  link.href = imgDataUrl;
  link.download = fileName;

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
