type Props = {
  color?: string;
};
export const Stars = ({ color }: Props) => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.00045 13.695L3.71036 16.6562L4.89186 10.7099L0.440918 6.59385L6.4612 5.88005L9.00045 0.375L11.5396 5.88005L17.5599 6.59385L13.109 10.7099L14.2905 16.6562L9.00045 13.695Z"
        fill={color || "#FFC107"}
      />
    </svg>
  );
};

export default Stars;
