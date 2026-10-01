import { DialogContent } from "./DialogContent";
import { DialogProvider } from "./DialogProvider";

const DialogPage = () => {
  return (
    <DialogProvider>
      <DialogContent />
    </DialogProvider>
  );
};

export default DialogPage;
