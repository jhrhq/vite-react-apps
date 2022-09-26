import React from "react";
import aiStack from "../../Resources/svg-icons/ai-stack.svg";
import applicationStack from "../../Resources/svg-icons/application-stack.svg";
import blockchainStack from "../../Resources/svg-icons/blockchain-stack.svg";
import databaseStack from "../../Resources/svg-icons/database-stack.svg";
import gamingStack from "../../Resources/svg-icons/gaming-stack.svg";
import websiteStack from "../../Resources/svg-icons/website-stack.svg";
import Feature from "../reusable-components/Feature";
import SectionHeader from "../reusable-components/section-header";
import "./popular-tags.css";

const PopularTags = () => {
  return (
    <div className="mt-16 ">
      {/* popular tag section */}
      <div className="mb-14">
        <SectionHeader underline={"after:-top-3.5"}>
          See our popular tags <br /> and browser different topics
        </SectionHeader>
      </div>

      <div className="grid grid-cols-3 gap-x-14 ">
        <div>
          {/* different topics */}
          <div className="py-5 px-20 text-center topics-border">
            <h3>Different Topics</h3>
            <div className="topics-line">
              <div className="topics-circles"></div>
            </div>
          </div>
        </div>
        {/* features */}

        <div className="px-12">
          <Feature
            svg={applicationStack}
            featureTitle={"Application stacks"}
            underline={"after:bg-pink"}
          >
            We develop android & iOS apps which can increase customer engagement
            and generate maximum ROI with maximum lead conversions.
          </Feature>
          <Feature
            svg={databaseStack}
            featureTitle={"Database stacks"}
            underline={"after:bg-copper-rust"}
          >
            We have a set of technologies and services that organizations use to
            store, manage, and access data.
          </Feature>
          <Feature
            svg={blockchainStack}
            featureTitle={"Blockchain"}
            underline={"after:bg-simple-red"}
          >
            We use Blockstack, a project that utilizes blockchain technology to
            expand the functionalities of bitcoin by serving as a second layer
            protocol.
          </Feature>
        </div>

        <div className="px-12">
          <Feature
            svg={websiteStack}
            featureTitle={"Website Stacks"}
            underline={"after:bg-simple-blue"}
          >
            Get extensively researched website and web app development services
            using the latest technologies like MEAN, MERN, Laravel, BootStrap,
            and much more.
          </Feature>
          <Feature
            svg={aiStack}
            featureTitle={"AI/ML Stacks"}
            underline={"after:bg-simple-yellow"}
          >
            We provide features to larger organizations which have already
            started maturing their processes to create standardized ML pipelines
            that are optimized for scale, efficiency, and control.
          </Feature>
          <Feature
            svg={gamingStack}
            featureTitle={"Gaming Stacks"}
            underline={"after:bg-simple-yellow"}
          >
            Gaming services serve customers in gambling establishments, such as
            casinos or racetracks. Some workers tend slot machines or deal
            cards.
          </Feature>
        </div>
      </div>
    </div>
  );
};

export default PopularTags;
