import { useState, useContext } from "react";
import { filterQuery } from "../lib/queries";
import { getClient, overlayDrafts } from "../lib/sanity.server";
import PostsFilterContext from "../context/postsFilterContext";

export default function Intro({ Filter }) {
  const Posts = useContext(PostsFilterContext);
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
      <h1 className="m-8 mt-0 font-serif font-normal text-temp-green-500 text-6xl md:text-6.5xl leading-tight md:pr-8">
        TempOwn Blog
      </h1>
      <p className="mb-2 text-temp-primary">
        Learn how we are building a fully insured peer-to-peer rental
        marketplace for essential items and equipment.
      </p>
      <div className="flex flex-row mt-5">
        <Buttons title={"Quick Filter:"} label={true} />
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
    <div className="m-4" onClick={handleClick}>
      {label !== undefined ? (
        <p className="leading-3 mt-0.5 px-5 py-2 flex items-center justify-center text-sm text-temp-primary">
          {title}
        </p>
      ) : selectedBtn === title ? (
        <p className="pointer leading-3 px-5 py-2 flex items-center justify-center text-sm text-temp-green-500 border border-green-100 bg-green-100">
          {title}
        </p>
      ) : (
        <p className="pointer leading-3 px-5 py-2 flex items-center justify-center text-sm rounded-md text-temp-gray border border-gray">
          {title}
        </p>
      )}
    </div>
  );
}
