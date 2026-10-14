const HONORIFIC = /^(shri|smt|dr|ms|mrs|mr|prof)\.?$/i;

/**
 * "Dr. Vinay Thakur" -> "VT", "S. K. Hudda, I.A.S. (Retd.)" -> "SK".
 * Strips honorifics, post-nominals in parentheses and anything after a comma.
 */
export function initials(name) {
  const cleaned = name.replace(/\([^)]*\)/g, '').replace(/,.*$/, '');
  return cleaned
    .split(/\s+/)
    .filter((word) => word && !HONORIFIC.test(word))
    .slice(0, 2)
    .map((word) => word[0].toUpperCase())
    .join('');
}
