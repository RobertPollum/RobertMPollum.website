import Grid from "@mui/material/Grid"
import Link from "next/link"

interface PersonalComponentProps {
    icon: React.ReactNode,
    link: string,
    displayName: string
}
export default function PersonalLink(props: PersonalComponentProps) {
    const {icon, link, displayName} = props;
    return (
    <Grid container spacing={2}>
        <Grid item xs={4}>
            {icon}
        </Grid>
        <Grid item xs={8}>
            <Link href={link}>{displayName}</Link>
        </Grid>
    </Grid>)
}