import TourCard from "../components/TourCard"

export default function Home() {

  const tours = [
    {
      title: "Da Nang Beach Tour",
      price: 120,
      image: "https://picsum.photos/400/300?1"
    },
    {
      title: "Ha Long Bay Cruise",
      price: 200,
      image: "https://picsum.photos/400/300?2"
    },
    {
      title: "Sa Pa Mountain Tour",
      price: 150,
      image: "https://picsum.photos/400/300?3"
    }
  ]

  return (
    <div className="max-w-6xl mx-auto p-6">

      <h2 className="text-3xl font-bold mb-6">
        Popular Tours
      </h2>

      <div className="grid md:grid-cols-3 gap-6">

        {tours.map((tour, index) => (
          <TourCard
            key={index}
            title={tour.title}
            price={tour.price}
            image={tour.image}
          />
        ))}

      </div>

    </div>
  )
}