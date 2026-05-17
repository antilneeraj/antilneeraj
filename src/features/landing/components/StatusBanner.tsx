const items = [
  { key: 'MISSION STATUS', value: 'UNDER CONSTRUCTION' },
  { key: 'CLEARANCE LEVEL', value: 'AUTHORIZED' },
  { key: 'OPERATION', value: 'neerajantil.dev' },
  { key: 'DESIGNATION', value: 'FRONTEND DEVELOPER' },
  { key: 'UNIT', value: 'INDIA · WEB DIVISION' },
]

const BannerContent = () => (
  <>
    {items.map((item, i) => (
      <div key={i} className="mx-6 flex items-center whitespace-nowrap">
        <span className="mr-2 text-[#C9A84C]">▸</span>
        <span className="font-rajdhani mr-2 text-[0.75rem] font-semibold uppercase text-[#C9A84C]">
          {item.key}:
        </span>
        <span className="font-jetbrains mr-6 text-[0.7rem] uppercase text-[#E8E0CC]">
          {item.value}
        </span>
        <span className="font-bold text-[#2D4030]">|</span>
      </div>
    ))}
  </>
)

export function StatusBanner() {
  return (
    <div className="flex min-h-[56px] w-full items-center overflow-hidden border-y border-[rgba(201,168,76,0.45)] bg-[#122115] py-3 md:py-0">
      {/* Mobile: Stacked list */}
      <div className="flex w-full flex-col gap-3 px-4 md:hidden">
        {items.map((item, i) => (
          <div
            key={i}
            className={`flex flex-col items-center justify-center text-center ${i !== items.length - 1 ? 'border-b border-[rgba(201,168,76,0.25)] pb-3' : ''}`}
          >
            <div className="mb-1 flex items-center gap-2">
              <span className="text-[#C9A84C]">▸</span>
              <span className="font-rajdhani text-[0.75rem] font-semibold uppercase text-[#C9A84C]">
                {item.key}
              </span>
            </div>
            <span className="font-jetbrains text-[0.7rem] uppercase text-[#E8E0CC]">
              {item.value}
            </span>
          </div>
        ))}
      </div>

      {/* Desktop: Marquee */}
      <div className="group hidden w-full md:flex">
        <div className="flex animate-[marquee_30s_linear_infinite] group-hover:[animation-play-state:paused]">
          <BannerContent />
          <BannerContent />
        </div>
        <div
          className="flex animate-[marquee_30s_linear_infinite] group-hover:[animation-play-state:paused]"
          aria-hidden="true"
        >
          <BannerContent />
          <BannerContent />
        </div>
      </div>
    </div>
  )
}
