export function slugify(string: string) {
  return string.toLowerCase().replace(' ', '-')
}
export function deSlugify(string: string) {
  if (string === "") return ""
  return string.toLowerCase().split("-").map(word => word[0].toUpperCase() + word.slice(1)).join(" ")
}