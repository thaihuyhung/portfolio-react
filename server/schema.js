const { buildSchema } = require('graphql')

module.exports = buildSchema(`
  type Query {
    profile: Profile
  }

  type BasicInformation {
    name: String
    title: String
    dob: String
    location: String
  }

  type Experience {
    companyName: String
    industry: String
    location: String
    from: String
    to: String
    title: String
    role: String
    responsibilities: String
  }
  
  type Education {
    school: String
    degree: String
    major: String
    from: String
    to: String
  }

  type Contact {
    key: String
    value: String
  }

  type Profile {
    basic: BasicInformation
    skills: [String]
    experiences: [Experience]
    education: [Education]
    contact: [Contact]
  }
`);