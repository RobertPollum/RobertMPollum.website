import styles from './page.module.css'
import PersonalLink from '@/components/personal-link'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { IconButton } from '@mui/material';
import JsFiddleIcon from '@/components/js-fiddle-icon';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <PersonalLink icon={<GitHubIcon/>} link='https://github.com/RobertPollum' displayName='Github'/>
        <PersonalLink icon={<LinkedInIcon/>} link='https://www.linkedin.com/in/robert-pollum-aa88b6b2/' displayName='LinkedIn'/>
        <PersonalLink icon={<JsFiddleIcon/>} link='https://jsfiddle.net/u/UnderPenalty/fiddles/' displayName='Js Fiddle' />
      </div>
    </main>
  )
}
