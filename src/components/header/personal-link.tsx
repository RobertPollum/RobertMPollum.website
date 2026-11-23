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
        <Grid size={{ xs: 4 }}>
            {icon}
        </Grid>
        <Grid size={{ xs: 8 }}>
            <Link href={link} target="_blank" rel="noreferrer">{displayName}</Link>
        </Grid>
    </Grid>)
}