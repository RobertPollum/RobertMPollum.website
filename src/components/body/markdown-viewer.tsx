import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";


const MarkdownViewer = (props: {markdownUrl: string}) => {
    const [markdownContent, setMarkdownContent] = useState("");
    
    useEffect(() => {
      fetch(props.markdownUrl)
        .then((response) => response.text())
        .then((text) => setMarkdownContent(text));
    }, []);

    return (
    <section>
      <ReactMarkdown>{markdownContent}</ReactMarkdown>
    </section>
  );
}

export default MarkdownViewer;