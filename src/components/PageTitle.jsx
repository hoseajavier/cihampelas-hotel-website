import { useEffect } from "react";

const PageTitle = ({ title }) => {
  useEffect(() => {
    document.title = `${title} - Cihampelas Hotel`;
  }, [title]);

  return null;
};

export default PageTitle;
