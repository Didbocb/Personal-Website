import { useState, useEffect } from "react";

function useDocumentTitle(title) {
  const [documentTitle, setDocumentTitle] = useState(title);

  useEffect(() => {
    document.title = "Lado Natsvlishvili | " + documentTitle;
  }, [documentTitle]);

  return { documentTitle, setDocumentTitle };
}

export default useDocumentTitle;