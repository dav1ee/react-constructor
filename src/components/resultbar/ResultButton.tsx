export function ResultButton({ value }: { value: string }) {
  return (
    <button className="resultbar-item resultbar-item--button">
      {value}
    </button>
  );
}
