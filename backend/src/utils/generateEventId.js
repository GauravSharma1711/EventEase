function generateEventId() {
  const now = new Date();
  const month = now.toLocaleString('en-US', { month: 'short' }).toUpperCase();
  const year = now.getFullYear(); 
  const random = Math.random().toString(36).substring(2, 5).toUpperCase(); 
  return `EVT-${month}${year}-${random}`;
}


export default generateEventId