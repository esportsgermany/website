export default function timeStamp() {
  const options = {
    month: '2-digit',
    day: '2-digit',
    year: 'numeric',
  };
  return new Date().toLocaleString('de-de', options);
}
