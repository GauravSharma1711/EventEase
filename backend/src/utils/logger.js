
import formatDate from './formatDate.js';

export const logBooking = (user, eventId) => {
  const timestamp = formatDate(new Date());
  console.log(` Booking Log: User ${user.fullName} (ID: ${user._id}) booked Event ID: ${eventId} on ${timestamp}`);
};

export default logBooking