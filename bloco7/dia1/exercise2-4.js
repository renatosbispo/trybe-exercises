const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'MongoDB'];
const replaceX = (targetString, replacement) => targetString.replace(/[xX]/g, replacement);
const attachSkills = (greetings) => {
  skills.sort();

  return `${greetings} My top 5 skills are:

- ${skills.join('\n- ')}

#goTrybe!`;
};

console.log(attachSkills(replaceX('Tryber x here!', 'Renato')));
