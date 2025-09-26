export default function formatLikes(num) {
  if (num < 1000) return num.toString()
  // Divide by 1000, keep one decimal *without rounding*
  const truncated = Math.floor(num / 100) / 10
  return truncated.toFixed(1).replace(/\.0$/, '') + 'k'
}
