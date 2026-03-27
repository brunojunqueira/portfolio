const TAGS = ["Mobile-first", "Performance", "Offline-ready", "Inclusive"];

export function MiniSite() {
  return (
    <div
      className="w-full h-full bg-white flex flex-col overflow-hidden"
      aria-hidden="true"
    >
      <div className="flex-1 flex flex-col justify-center px-6 gap-2 md:gap-5">
        <h2 className="text-2xl md:text-4xl font-bold leading-none text-black tracking-tight">
          <span className="text-xs text-black/80 font-bold leading-relaxed max-w-55">
            and...
          </span>{" "}
          Responsible
        </h2>
        <p className="text-xs md:text-sm text-gray-500 leading-relaxed max-w-55">
          Interfaces that work on any screen, connection, or context — leaving
          no one behind.
        </p>
        <div className="flex flex-wrap gap-2">
          {TAGS.map((tag) => (
            <span
              key={tag}
              className="text-[8px] md:text-[10px] font-medium px-3 py-1 rounded-full border border-gray-200 text-gray-500"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-2 grid grid-cols-2 gap-2">
          {[
            { w: "w-full", h: "h-1.5", bg: "bg-blue-200" },
            { w: "w-3/4", h: "h-1.5", bg: "bg-gray-200" },
            { w: "w-full", h: "h-1.5", bg: "bg-gray-200" },
            { w: "w-1/2", h: "h-1.5", bg: "bg-blue-100" },
          ].map((bar, i) => (
            <div
              key={i}
              className={`${bar.h} ${bar.w} ${bar.bg} rounded-full`}
            />
          ))}
        </div>
      </div>
      <div className="flex items-center justify-around px-6 py-2 md:py-4 border-t border-gray-100">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className={`h-3 w-3 md:h-4 md:w-4 rounded-xs md:rounded-sm ${i === 2 ? "bg-blue-500" : "bg-gray-200"}`}
          />
        ))}
      </div>
    </div>
  );
}
