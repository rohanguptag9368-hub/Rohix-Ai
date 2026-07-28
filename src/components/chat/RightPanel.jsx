import {
  BsLightningChargeFill,
  BsShieldCheck,
  BsRocketTakeoff,
} from "react-icons/bs";

import InfoCard from "./InfoCard";

export default function RightPanel() {
  return (
    <div className="hidden xl:block w-[300px]">

      <div className="rounded-3xl border border-white/10 bg-[#081224] p-7">

        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-5xl shadow-[0_0_35px_rgba(59,130,246,.45)]">
          🤖
        </div>

        <h2 className="mt-5 text-center text-2xl font-bold text-white">
          ROHIX AI
        </h2>

        <p className="mt-2 text-center text-sm text-gray-400">
          Powered by Groq AI
        </p>

      </div>

      <InfoCard
        icon={<BsLightningChargeFill />}
        title="Smart Responses"
        desc="Fast and accurate answers powered by advanced AI."
      />

      <InfoCard
        icon={<BsShieldCheck />}
        title="Private & Secure"
        desc="Your conversations stay protected."
      />

      <InfoCard
        icon={<BsRocketTakeoff />}
        title="Lightning Fast"
        desc="Premium speed with high quality responses."
      />

    </div>
  );
}