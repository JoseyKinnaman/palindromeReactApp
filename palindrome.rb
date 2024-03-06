
def palindrome?(string)
  string = string.downcase
  string == string.reverse
end
