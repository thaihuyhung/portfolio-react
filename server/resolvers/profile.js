const getBasic = (client) => {
  return client.db('information').collection('base').find().toArray().then(response => {
      return response.reduce(((acc, cur) => {
          acc[cur.key] = cur.value
          return acc;
      }), {});
  });
}

const getSkills  = (client) => {
  return client.db('information').collection('skill').find().toArray().then(response => response.map(x => x.name));
}

const getExperiences = (client) => {
  return client.db('information').collection('experience').find().toArray().then(response => response);
}

const getContactInfomation = (client) => {
  return client.db('information').collection('contact').find().toArray().then(response => response);
}

const getProfile = (client) => ({
  basic: getBasic(client),
  skills: getSkills(client),
  experiences: getExperiences(client),
  contact: getContactInfomation(client)
})

module.exports = getProfile;
