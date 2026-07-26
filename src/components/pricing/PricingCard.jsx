export default function PricingCard({
  badge,
  badgeColor,
  title,
  price,
  period,
  description,
  features,
  buttonText,
  buttonColor,
  borderColor,
  glowColor,
  titleColor = "text-white",
}) {
  return (
    <div
      className={`
      group
      relative
      flex
      h-full
      min-h-[760px]
      flex-col
      overflow-hidden
      rounded-3xl
      border-2
      ${borderColor}
      bg-[#07182d]
      p-4
      sm:p-6
      lg:p-8
      transition-all
      duration-300
      hover:-translate-y-2
      hover:shadow-2xl
      `}
    >
      {/* Glow */}
      <div
        className={`absolute inset-0 ${glowColor} pointer-events-none`}
      />

      {/* Badge */}
      {badge && (
        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 z-20 w-full flex justify-center px-3">
          <span
            className={`
            rounded-full
            px-3
            sm:px-5
            py-2
            text-[9px]
            sm:text-[11px]
            font-bold
            uppercase
            tracking-wider
            whitespace-nowrap
            ${badgeColor}
            `}
          >
            {badge}
          </span>
        </div>
      )}

      <div className="relative pt-4">

        <h3
          className={`
          ${titleColor}
          text-2xl
          sm:text-3xl
          lg:text-4xl
          font-bold
          break-words
          `}
        >
          {title}
        </h3>

        <div className="mt-5 flex flex-wrap items-end gap-2">

          <span
            className="
            text-3xl
            xs:text-4xl
            sm:text-5xl
            lg:text-6xl
            font-black
            break-all
            "
          >
            {price}
          </span>

          <span
            className="
            text-xs
            sm:text-sm
            text-gray-400
            pb-1
            "
          >
            {period}
          </span>

        </div>

        <p
          className="
          mt-5
          text-sm
          sm:text-base
          leading-6
          text-gray-300
          "
        >
          {description}
        </p>

      </div>

      <ul
        className="
        relative
        mt-7
        flex-1
        space-y-3
        "
      >
        {features.map((item) => (
          <li
            key={item}
            className="
            flex
            items-start
            gap-2
            text-sm
            sm:text-base
            text-gray-200
            break-words
            "
          >
            <span className="mt-0.5 shrink-0">✅</span>

            <span>{item}</span>
          </li>
        ))}
      </ul>

      <button
        className={`
        relative
        mt-8
        w-full
        rounded-xl
        py-3
        sm:py-4
        text-sm
        sm:text-base
        font-bold
        transition
        duration-300
        hover:scale-[1.02]
        active:scale-95
        ${buttonColor}
        `}
      >
        {buttonText}
      </button>

    </div>
  );
}