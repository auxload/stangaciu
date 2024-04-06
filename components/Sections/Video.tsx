import React from "react";
import Section from "../Section";
import Wrapper from "../Wrapper";

const Video = () => {
  return (
    <Section>
      <Wrapper>
        <iframe
          width="560"
          height="400"
          className="aspect-video w-full md:h-[500px]"
          src="https://www.youtube.com/embed/VanaaPBZAtU?si=4YpopdpgEgwG0Nxt"
          title="YouTube video player"
        //   frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        //   referrerpolicy="strict-origin-when-cross-origin"
        //   allowfullscreen
        ></iframe>
      </Wrapper>
    </Section>
  );
};

export default Video;
