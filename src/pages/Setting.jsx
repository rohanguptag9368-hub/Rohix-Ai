import {
  FiCpu,
  FiMoon,
  FiSun,
  FiMonitor,
  FiTrash2,
  FiShield,
  FiBell,
  FiDownload,
  FiInfo,
  FiChevronRight,
} from "react-icons/fi";

const Setting = () => {
  return (
    <div className="min-h-screen bg-[#07182d] text-white p-8">

      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-10">

          <h1 className="text-4xl font-bold">
            ⚙️ Settings
          </h1>

          <p className="mt-2 text-gray-400">
            Manage your Rohix AI experience.
          </p>

        </div>

        {/* AI Settings */}
        <div className="rounded-2xl bg-[#102542] border border-white/10 p-6 mb-6">

          <div className="flex items-center gap-3 mb-6">

            <FiCpu className="text-cyan-400 text-2xl" />

            <h2 className="text-xl font-semibold">
              AI Settings
            </h2>

          </div>

          <div className="space-y-4">

            <SettingItem
              title="AI Model"
              value="Gemini 2.5 Flash"
            />

            <SettingItem
              title="Response Length"
              value="Balanced"
            />

            <SettingItem
              title="Creativity"
              value="Medium"
            />

          </div>

        </div>

        {/* Appearance */}
        <div className="rounded-2xl bg-[#102542] border border-white/10 p-6 mb-6">

          <div className="flex items-center gap-3 mb-6">

            <FiMoon className="text-cyan-400 text-2xl" />

            <h2 className="text-xl font-semibold">
              Appearance
            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-4">

            <ThemeCard
              icon={<FiMoon />}
              title="Dark"
              active
            />

            <ThemeCard
              icon={<FiSun />}
              title="Light"
            />

            <ThemeCard
              icon={<FiMonitor />}
              title="System"
            />

          </div>

        </div>

        {/* Privacy */}
        <div className="rounded-2xl bg-[#102542] border border-white/10 p-6 mb-6">

          <div className="flex items-center gap-3 mb-6">

            <FiShield className="text-cyan-400 text-2xl" />

            <h2 className="text-xl font-semibold">
              Privacy
            </h2>

          </div>

          <SettingItem
            title="Export My Data"
            value="Download"
            icon={<FiDownload />}
          />

          <SettingItem
            title="Notifications"
            value="Enabled"
            icon={<FiBell />}
          />

        </div>

        {/* Danger Zone */}
        <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-6">

          <div className="flex items-center gap-3 mb-5">

            <FiTrash2 className="text-red-400 text-2xl" />

            <h2 className="text-xl font-semibold text-red-400">
              Danger Zone
            </h2>

          </div>

          <button className="rounded-xl bg-red-500 px-5 py-3 font-semibold hover:bg-red-600 transition">

            Clear All Chats

          </button>

        </div>

        {/* Footer */}
        <div className="mt-10 text-center text-sm text-gray-500">

          <FiInfo className="inline mr-2" />

          Rohix AI v1.0 • Investor Demo Build

        </div>

      </div>

    </div>
  );
};

function SettingItem({
  title,
  value,
  icon,
}) {
  return (
    <button className="w-full flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-4 hover:border-cyan-500 transition">

      <div className="flex items-center gap-3">

        {icon}

        <span>{title}</span>

      </div>

      <div className="flex items-center gap-2 text-cyan-400">

        <span>{value}</span>

        <FiChevronRight />

      </div>

    </button>
  );
}

function ThemeCard({
  icon,
  title,
  active,
}) {
  return (
    <button
      className={`rounded-xl border p-5 transition ${
        active
          ? "border-cyan-500 bg-cyan-500/10"
          : "border-white/10 bg-white/5 hover:border-cyan-500"
      }`}
    >
      <div className="text-3xl mb-3">

        {icon}

      </div>

      <h3 className="font-semibold">

        {title}

      </h3>
    </button>
  );
}

export default Setting;