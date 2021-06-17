import { useState, useContext } from "react";
import { filterQuery } from "../lib/queries";
import { getClient, overlayDrafts } from "../lib/sanity.server";
import PostsContext from "../context/postsContext";

export default function Intro({ Filter }) {
  const Posts = useContext(PostsContext);
  const [selectedBtn, setSelectedBtn] = useState("");

  const handleBtnSelect = (title) => {
    if (title === selectedBtn) {
      filterHandler("all");
      setSelectedBtn("");
    } else {
      filterHandler(title);
      setSelectedBtn(title);
    }
  };

  const filterHandler = (filter) => {
    console.log(filter);
    const posts =
      filter === "all"
        ? Posts.allPosts
        : Posts.allPosts.filter((post) => post.type === filter);
    Posts.setPosts(posts);
  };
  return (
    <section className="flex-col justify-center flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="m-8 mt-0 font-serif font-normal text-temp-green-500 text-4xl md:text-6.5xl leading-tight md:pr-8">
        TempOwn Blog
      </h1>
      <p className="mb-2 mx-10 md:mx-0 text-temp-primary text-center">
        Learn how we are building a fully insured peer-to-peer rental
        marketplace for essential items and equipment.
      </p>
      <div className="flex justify-center flex-row flex-wrap mt-5">
        <Buttons title={"Quick Filter"} label={true} />
        <Buttons
          title={"What's New"}
          handleBtnSelect={handleBtnSelect}
          selectedBtn={selectedBtn}
        />
        <Buttons
          title={"Product Update"}
          handleBtnSelect={handleBtnSelect}
          selectedBtn={selectedBtn}
        />
        <Buttons
          title={"Product Guide"}
          handleBtnSelect={handleBtnSelect}
          selectedBtn={selectedBtn}
        />
        <Buttons
          title={"Analysis"}
          handleBtnSelect={handleBtnSelect}
          selectedBtn={selectedBtn}
        />
        <Buttons
          title={"White Paper"}
          handleBtnSelect={handleBtnSelect}
          selectedBtn={selectedBtn}
        />
      </div>
    </section>
  );
}

function Buttons({ title, label, handleBtnSelect, selectedBtn }) {
  const handleClick = () => {
    if (label === undefined) handleBtnSelect(title);
  };
  return (
    <>
      {label !== undefined ? (
        <div className="flex justify-center xl:block m-1 md:m-4 w-full lg:w-max">
          <p className="mx-24 uppercase md:m-0 md:leading-3 md:mt-0.5 md:px-5 md:py-2 md:flex items-center ustify-center text-sm text-temp-primary">
            {title}
          </p>
        </div>
      ) : selectedBtn === title ? (
        <div className="m-1 md:m-4" onClick={handleClick}>
          <p className="min-w-max pointer leading-3 px-5 py-2 flex items-center justify-center text-sm text-temp-green-500 border border-green-100 bg-green-100">
            {title}
          </p>
        </div>
      ) : (
        <div className="m-1 md:m-4" onClick={handleClick}>
          <p className="min-w-max pointer leading-3 px-5 py-2 flex items-center justify-center text-sm rounded-md text-temp-gray border border-gray">
            {title}
          </p>
        </div>
      )}
    </>
  );
}
