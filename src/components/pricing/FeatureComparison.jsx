export default function FeatureComparison() {

  const features = [
    ["AI Chat","✓","✓","✓","✓"],
    ["Daily Messages","50","Unlimited","Unlimited","Unlimited"],
    ["Fast Responses","—","✓","✓","✓"],
    ["Advanced AI Models","—","✓","✓","✓"],
    ["Smart Memory","—","✓","✓","✓"],
    ["PDF Analysis","—","✓","✓","✓"],
    ["DOCX Analysis","—","✓","✓","✓"],
    ["Image Analysis","—","✓","✓","✓"],
    ["Web Search","Limited","✓","✓","✓"],
    ["Vault Storage","1 GB","100 GB","Unlimited","Unlimited"],
    ["Bookmarks","20","Unlimited","Unlimited","Unlimited"],
    ["Export Chats","—","✓","✓","✓"],
    ["AI Coding Assistant","—","—","✓","✓"],
    ["Research Workspace","—","—","✓","✓"],
    ["Website Generator","—","—","✓","✓"],
    ["App Generator","—","—","✓","✓"],
    ["AI Agents","—","—","—","✓"],
    ["Team Workspace","—","—","✓","Unlimited"],
    ["API Access","—","—","Coming Soon","Coming Soon"],
    ["Priority Support","Community","Priority","Premium","24×7"],
    ["Early Access","—","—","✓","✓"],
    ["Enterprise Security","—","—","—","✓"],
  ];

  return (

    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20">

      <h2 className="mb-6 sm:mb-8 text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">

        Compare Plans

      </h2>

      <div className="overflow-x-auto rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">

        <table className="min-w-[720px] lg:min-w-full w-full text-left">

          <thead className="bg-white/5">

            <tr>

              <th className="px-4 py-4 sm:px-6 sm:py-5 text-sm sm:text-base font-semibold">

                Features

              </th>

              <th className="px-4 py-4 sm:px-6 sm:py-5 text-center text-sm sm:text-base">

                Free

              </th>

              <th className="px-4 py-4 sm:px-6 sm:py-5 text-center text-cyan-400 text-sm sm:text-base">

                Plus

              </th>

              <th className="px-4 py-4 sm:px-6 sm:py-5 text-center text-purple-400 text-sm sm:text-base">

                Pro

              </th>

              <th className="px-4 py-4 sm:px-6 sm:py-5 text-center text-yellow-400 text-sm sm:text-base">

                Ultra

              </th>

            </tr>

          </thead>

          <tbody>

            {features.map((row) => (

              <tr
                key={row[0]}
                className="border-t border-white/10 hover:bg-white/5 transition"
              >

                <td className="whitespace-nowrap px-4 py-3 sm:px-6 sm:py-4 text-xs sm:text-sm md:text-base font-medium">

                  {row[0]}

                </td>

                <td className="px-4 py-3 sm:px-6 sm:py-4 text-center text-xs sm:text-sm md:text-base">

                  {row[1]}

                </td>

                <td className="px-4 py-3 sm:px-6 sm:py-4 text-center text-cyan-300 text-xs sm:text-sm md:text-base">

                  {row[2]}

                </td>

                <td className="px-4 py-3 sm:px-6 sm:py-4 text-center text-purple-300 text-xs sm:text-sm md:text-base">

                  {row[3]}

                </td>

                <td className="px-4 py-3 sm:px-6 sm:py-4 text-center text-yellow-300 text-xs sm:text-sm md:text-base">

                  {row[4]}

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </section>

  );

}