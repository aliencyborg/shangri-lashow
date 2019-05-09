// these methods should be on String prototype per https://api.emberjs.com/ember/3.9/classes/String
export const toTitleCase = str => {
  try {
    return str
      .decamelize()
      .split('_')
      .map(word => word.capitalize())
      .join(' ')
  } catch {
    return str
  }
}
