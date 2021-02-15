class Formatter {
  //add static methods here
  static capitalize(string)
  {
    return string[0].toUpperCase() + string.substring(1)
  }
  static sanitize(input)
  {
    return input.replace(/[\W^\s-\']/, '')
  }

}
