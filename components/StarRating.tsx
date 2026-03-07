type Props = {
  rating: number;
  reviewCount?: number;
  size?: "sm" | "md";
};

export default function StarRating({ rating, reviewCount, size = "md" }: Props) {
  const starSize = size === "sm" ? "text-sm" : "text-base";
  const full = Math.floor(rating);
  const half = rating - full >= 0.5;

  return (
    <div className="flex items-center gap-1.5">
      <span className={`${starSize} leading-none`} aria-hidden="true">
        {Array.from({ length: 5 }, (_, i) => {
          if (i < full) return "★";
          if (i === full && half) return "⯨";
          return "☆";
        }).join("")}
      </span>
      <span className={`${size === "sm" ? "text-xs" : "text-sm"} font-semibold text-slate-800`}>
        {rating.toFixed(1)}
      </span>
      {reviewCount !== undefined && (
        <span className={`${size === "sm" ? "text-xs" : "text-sm"} text-slate-500`}>
          ({reviewCount.toLocaleString()})
        </span>
      )}
    </div>
  );
}
