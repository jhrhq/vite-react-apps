import { useState } from "react";
import fakeCourse from "../../fakeCourse";
import Cart from "../Cart/Cart";
import Shopping from "../Shoping/Shoping";

const Course = () => {
  const [courses] = useState(fakeCourse.slice(0, 10));
  const [cart, setCart] = useState([]);

  const handleAddCourse = (course) => {
    setCart((prev) => [...prev, course]);
  };

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
      {/* Course Grid */}
      <section>
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {courses.map((course) => (
            <Shopping
              key={course.key}
              product={course}
              handleAddCourse={handleAddCourse}
            />
          ))}
        </div>
      </section>

      {/* Cart Sidebar */}
      <aside>
        <Cart cart={cart} />
      </aside>
    </div>
  );
};

export default Course;