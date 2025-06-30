import MarkdownViewer from "@/components/body/markdown-viewer"
import { useRouter } from "next/router";

const MarkdownViewerPage = () => {
    const router = useRouter();
    const id = router.query.id;
    if(typeof id === "string") {
        return <MarkdownViewer id={id}/>
    } else {
        return <p>Invalid ID</p>
    }

}