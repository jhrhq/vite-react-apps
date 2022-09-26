import React from "react";
import SectionHeader from "../reusable-components/section-header";
import "./popular-tags.css";
const PopularTags = () => {
  return (
    <div className="mt-16">
      {/* popular tag section */}
      <div>
        <SectionHeader>
          See our popular tags <br /> browser different topics
        </SectionHeader>
      </div>
      <h4>hello world</h4>

      <div>
        {/* different topics */}
        <div className="py-5 px-20 text-center topics-border">
          <h3>Different Topics</h3>
          <div className="topics-line">
            <div className="topics-circles"></div>
          </div>
        </div>
      </div>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores
        voluptatem iure animi ex accusamus aut corporis tempora, numquam
        quisquam odio deleniti molestias dicta quos cum dignissimos nam est
        praesentium, facere nulla ab culpa sed provident optio laborum? Deserunt
        accusantium perferendis voluptatum sed, inventore minus praesentium
        illo, rem cumque explicabo voluptate!
      </p>
    </div>
  );
};

export default PopularTags;
