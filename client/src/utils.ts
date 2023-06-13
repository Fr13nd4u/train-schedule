export const formatTimeToHHMM =(timestamp: string): string => {
  const date = new Date(timestamp);
  const hours = date.getUTCHours().toString().padStart(2, '0');
  const minutes = date.getUTCMinutes().toString().padStart(2, '0');
  return `${hours}:${minutes}`;
}

export const formatTimeToDate =(timestamp: string): string => {
  const date = new Date(timestamp);
  const options: any  = { weekday: 'short', day: 'numeric', month: 'long' };

  return date.toLocaleString('en-US', options);
}

export const sortOptions = [
  { value: 'trainName', label: 'Train Name' },
  { value: 'departureTime', label: 'Departure Time' },
  { value: 'arrivalTime', label: 'Arrival Time' },
  { value: 'distance', label: 'Distance' },
];