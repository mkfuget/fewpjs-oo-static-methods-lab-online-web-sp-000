class Formatter {
  //add static methods here
  static capitalize(string)
  {
    return string[0].toUpperCase() + string.substring(1)
  }
  static sanitize(input)
  {
    input.replace(/[\W\s-\']/g, '')
  }

}
