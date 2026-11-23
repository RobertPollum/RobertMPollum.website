export interface Project {
  name: string
  description: string
  link: string
}

export const projects: Project[] = [
  {
    name: 'GitHub',
    description: 'Personal repositories and open-source experiments.',
    link: 'https://github.com/RobertPollum',
  },
  {
    name: 'JSFiddle',
    description: 'Small front-end demos and code snippets.',
    link: 'https://jsfiddle.net/u/UnderPenalty/fiddles/',
  },
]
