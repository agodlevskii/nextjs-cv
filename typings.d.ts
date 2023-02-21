type Image = {
  asset:{
    _ref: string
  }
}

type Social = {
  id: string
  title: string
  url: string
}

type Skill = {
  id: string
  title: string
  progress: number
  image: Image
}

type PageInfo = {
  name: string
  role: string
  email: string
  heroImage: Image
  profilePic: Image
  keyInfo: string[]
  socials: Social[]
}

type Experience = {
  id: string
  company: string
  companyImage: Image
  jobTitle: string
  dateStarted: Date
  dateEnded: Date
  isCurrentlyWorkingHere: boolean
  points: stringp[]
  technologies: Skill[]
}