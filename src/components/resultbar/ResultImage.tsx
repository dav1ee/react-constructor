export function ResultImage({ value }: { value: string }) {
  return (
    <img
      className="resultbar-item resultbar-item--image"
      src={value}
      alt="image"
    />
  );
}
