import Counter from "./Counter";

function Card({ name, price, imageUrl }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 max-w-xs mx-auto">
      <img src={imageUrl} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4 flex flex-col gap-2">
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <p className="text-base text-gray-600">{price}</p>
        <button className="mt-2 py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
          장바구니에 담기
        </button>
        <Counter init={0} />
      </div>
    </div>
  );
}

export default Card;
