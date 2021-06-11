export default function Intro() {
  return (
    <section className="flex-col justify-center flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="m-8 mt-0 font-serif font-normal text-temp-green-500 text-6xl md:text-6.5xl leading-tight md:pr-8">
        TempOwn Blog
      </h1>
      <p className="mb-2 text-temp-primary">
        Learn how we are building a fully insured peer-to-peer rental
        marketplace for essential items and equipment.
      </p>
      <div class="flex flex-row mt-5">
        <Buttons title={"Quick Filter:"} label={true} />
        <Buttons title={"What's New"} />
        <Buttons title={"Product Update"} />
        <Buttons title={"Product Guide"} />
        <Buttons title={"Analysis"} />
        <Buttons title={"White Paper"} />
      </div>
    </section>
  );
}

function Buttons({ title, label }) {
  return (
    <div className="m-4">
      {label === undefined ? (
        <p className="pointer leading-3 px-5 py-2 flex items-center justify-center text-sm rounded-md text-temp-gray border border-gray">
          {title}
        </p>
      ) : (
        <p className="leading-3 mt-0.5 px-5 py-2 flex items-center justify-center text-sm text-temp-primary">
          {title}
        </p>
      )}
    </div>
  );
}
