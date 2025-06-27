import Image from 'next/image'
import styles from './page.module.css'
import PersonalLink from '@/components/personal-link'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <PersonalLink icon={<GitHubIcon/>} link='https://github.com/RobertPollum' displayName='Robert Pollum'/>
        <PersonalLink icon={<LinkedInIcon/>} link='https://www.linkedin.com/in/robert-pollum-aa88b6b2/' displayName='Robert Pollum '/>
      </div>
    </main>
  )
}
