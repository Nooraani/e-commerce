import React from 'react';

const InvestmentCard = ({ image, title, description, price, upiId, payeeName }) => {
  const handleInvestClick = () => {
    // 👉 UPI Deeplink banate hain:
    const upiLink = `upi://pay?pa=${upiId}&pn=${encodeURIComponent(payeeName)}&am=${price}&cu=INR&tn=${encodeURIComponent(title)}`;

    // 👉 Deeplink ko open karo:
    window.location.href = upiLink;
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2 text-gray-800">{title}</h2>
        <p className="text-gray-600 mb-2">{description}</p>
        <p className="text-lg font-semibold text-green-700 mb-4">Price: ₹{price}</p>
        <button
          onClick={handleInvestClick}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Invest Now
        </button>
      </div>
    </div>
  );
};

const InvestmentGrid = () => {
  const upiId = 'nooranihussain@axl';  // ✅ Aapka UPI ID
  const payeeName = 'Noorani Hussain'; // ✅ Aapka Naam

  const cards = [
    { id: 1, image: '/New folder/1.jpg', title: 'Investment Option 1', description: 'Invest wisely for future.', price: 2000 },
    { id: 2, image: 'New folder/7.jpg', title: 'Investment Option 2', description: 'Invest wisely for future.', price: 3500 },
    { id: 3, image: '/New folder/1.jpg', title: 'Investment Option 3', description: 'Invest wisely for future.', price: 5000 },
    { id: 4, image: '/New folder/2.jpg', title: 'Investment Option 4', description: 'Invest wisely for future.', price: 4200 },
    { id: 5, image: '/New folder/3.jpg', title: 'Investment Option 5', description: 'Invest wisely for future.', price: 6000 },
    { id: 6, image: '/New folder/4.jpg', title: 'Investment Option 6', description: 'Invest wisely for future.', price: 2500 },
    { id: 7, image: '/New folder/5.jpg', title: 'Investment Option 7', description: 'Invest wisely for future.', price: 8000 },
    { id: 8, image: '/New folder/6.jpg', title: 'Investment Option 8', description: 'Invest wisely for future.', price: 7200 },
    { id: 9, image: '/New folder/7.jpg', title: 'Investment Option 9', description: 'Invest wisely for future.', price: 5500 },
    { id: 10, image: '/New folder/1.jpg', title: 'Investment Option 10', description: 'Invest wisely for future.', price: 3000 },
    { id: 11, image: '/New folder/1.jpg', title: 'Investment Option 11', description: 'Invest wisely for future.', price: 4500 },
    { id: 12, image: '/New folder/1.jpg', title: 'Investment Option 12', description: 'Invest wisely for future.', price: 6800 },
    { id: 13, image: '/New folder/1.jpg', title: 'Investment Option 13', description: 'Invest wisely for future.', price: 5200 },
    { id: 14, image: '/New folder/1.jpg', title: 'Investment Option 14', description: 'Invest wisely for future.', price: 3900 },
    { id: 15, image: '/New folder/1.jpg', title: 'Investment Option 15', description: 'Invest wisely for future.', price: 7500 },
    { id: 16, image: '/New folder/1.jpg', title: 'Investment Option 16', description: 'Invest wisely for future.', price: 9000 },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Invest with Noorani Hussain</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {cards.map(card => (
          <InvestmentCard
            key={card.id}
            image={card.image}
            title={card.title}
            description={card.description}
            price={card.price}
            upiId={upiId}
            payeeName={payeeName}
          />
        ))}
      </div>
    </div>
  );
};

export default InvestmentGrid;
