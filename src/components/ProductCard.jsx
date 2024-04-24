import placeholderImage from "../assets/placeholder.png";

function ProductCard({
  // id,
  title,
  price,
  category,
  description,
  image,
  className,
}) {
  return (
      <div
        className={`flex justify-between items-center p-3 mb-2 bg-white shadow-sm rounded border border-gray-200 hover:bg-gray-50 ${className}`}
      >
        <span
          className="flex items-center justify-center mr-4"
          style={{ flexBasis: "20%" }}
        >
          <img
            src={image || placeholderImage}
            alt={`${title}`}
            className="rounded w-40 h-40 m-2 p-1 object-cover border-2 border-gray-300"
            onError={({ currentTarget }) => {
              currentTarget.onerror = null;
              currentTarget.src = placeholderImage;
            }}
          />
        </span>
        <span style={{ flexBasis: "20%" }}>
        <strong>
          {title}
        </strong>
        </span>
        <span style={{ flexBasis: "20%" }}>{category}</span>
        <span style={{ flexBasis: "20%" }}>${price}</span>
        <span style={{ flexBasis: "20%" }}>{description.substring(0, 50)}</span>
      </div>
  );
}

export default ProductCard;
