function generateEventId() {
  const now = new Date();
  const month = now.toLocaleString('en-US', { month: 'short' }).toUpperCase(); // e.g., "AUG"
  const year = now.getFullYear(); // e.g., 2025
  const random = Math.random().toString(36).substring(2, 5).toUpperCase(); // e.g., "X4T"
  return `EVT-${month}${year}-${random}`;
}


export default generateEventId