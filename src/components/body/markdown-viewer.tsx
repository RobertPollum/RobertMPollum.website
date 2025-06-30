import { UUID } from "crypto";
import { useEffect, useState } from "react";
import Markdown from "react-markdown";


const MarkdownViewer = (props: {id: UUID}) => {
    const {id} = props;
    const [markdownContent, setMarkdownContent] = useState("");
    
    useEffect(() => {
      fetch('BOGUSURL/' + id)
        .then((response) => response.text())
        .then((text) => setMarkdownContent(text));
    }, []);

    return (
    <section>
      <Markdown>{markdownContent}</Markdown>
    </section>
  );
}

export default MarkdownViewer;