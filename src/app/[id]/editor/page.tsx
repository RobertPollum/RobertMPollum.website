import { Grid, TextareaAutosize, TextField } from "@mui/material"
import { useState } from "react"

const MarkdownEditor = () => {
    const [title, setTitle] = useState("");
    const [markdownContent, setMarkdownContent] = useState("");

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <TextField value={title} onChange={(value) => setTitle}/>
            </Grid>
            <Grid item xs={12}>
                <TextareaAutosize 
                    value={markdownContent}
                    onChange={(value) => setMarkdownContent}
                />
            </Grid>
        </Grid>
    )
}