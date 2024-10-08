import Heading from "../Heading";
import AvailablePropertyCard from "./AvailablePropertyCard";

const properties = [
  {
    id: 1,
    name: "Modern Design villa",
    price: "$3000.00",
    bedrooms: "3",
    bathrooms: "2",
    image:
      "https://images.unsplash.com/photo-1601760562234-9814eea6663a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmVhbGVzdGF0ZXxlbnwwfHwwfHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60",
  },
  {
    id: 2,
    name: "Faruk Tokluoğlu villa",
    price: "$4000.00",
    bedrooms: "3",
    bathrooms: "2",
    image:
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60",
  },
  {
    id: 3,
    name: "Marvin Meyer villa",
    price: "$3000.00",
    bedrooms: "3",
    bathrooms: "2",
    image:
      "https://images.unsplash.com/photo-1613553474179-e1eda3ea5734?ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60",
  },

  {
    id: 4,
    name: "CUTTER SNAP villa",
    price: "$3000.00",
    bedrooms: "3",
    bathrooms: "2",
    image:
      "https://images.unsplash.com/photo-1633119712778-30d94755de54?ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHZpbGxhJTIwaW50ZXJpb3J8ZW58MHx8MHx8fDA%3D;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60",
  },

  {
    id: 5,
    name: "Daniel Barnes house",
    price: "$5000.00",
    bedrooms: "3",
    bathrooms: "2",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmlsbGElMjBpbnRlcmlvcnxlbnwwfHwwfHx8MA%3D%3D;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60",
  },
];

function AvailableProperties() {
  return (
    <section>
      <div className="container">
        <div className="mx-auto mb-12 max-w-[485px] text-center lg:mb-[70px]">
          <Heading
            heading="Properties"
            subHeading="Grab your Dream Property"
            text="There are many variations of passages of Lorem Ipsum available but
            the majority have suffered alteration in some form."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property) => (
            <AvailablePropertyCard key={property.id} {...property} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default AvailableProperties;
