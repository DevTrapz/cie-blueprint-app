import downloadAsPNG from "../utils/export-to-png";

interface DownloadButtonProps {
  elementId: string;
  first_name: string;
  last_name: string;
  revision_date: string;
}
export function ButtonDownload({
  elementId,
  first_name,
  last_name,
  revision_date,
}: DownloadButtonProps) {
  const fileName = `${first_name} ${last_name} Blueprint Revised ${revision_date}.png`;
  return (
    <button
      className="download-button"
      onClick={async () => {
        try {
          await downloadAsPNG(elementId, fileName);
        } catch (error) {
          console.log(error);
        }
      }}
    >
      DOWNLOAD BLUEPRINT
    </button>
  );
}
