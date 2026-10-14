export default function SectionHeading({ id, title, text }) {
  return (
    <div className="mb-10 max-w-2xl">
      <h2 id={id} className="text-3xl font-bold sm:text-4xl">
        {title}
      </h2>
      {text && <p className="mt-3 text-lg leading-relaxed text-soft">{text}</p>}
    </div>
  );
}
