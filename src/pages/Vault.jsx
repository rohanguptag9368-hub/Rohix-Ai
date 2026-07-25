import { FiFolder, FiUploadCloud } from "react-icons/fi";

const Vault = () => {
  return (
    <div className="min-h-screen bg-[#07182d] text-white p-8">

      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold">🔐 Vault</h1>

          <p className="mt-2 text-gray-400">
            Your secure AI workspace for files, documents and generated content.
          </p>
        </div>

        {/* Upload Card */}
        <div className="rounded-2xl border-2 border-dashed border-cyan-500/30 bg-[#102542] p-12 text-center">

          <FiUploadCloud
            size={60}
            className="mx-auto mb-5 text-cyan-400"
          />

          <h2 className="text-2xl font-semibold">
            Upload your files
          </h2>

          <p className="mt-3 text-gray-400">
            PDF, DOCX, TXT, PNG, JPG and more.
          </p>

          <button
            className="mt-8 rounded-xl bg-cyan-500 px-6 py-3 font-semibold hover:bg-cyan-600 transition"
          >
            Upload File
          </button>

        </div>

        {/* Empty State */}
        <div className="mt-10 rounded-2xl bg-[#102542] p-10 text-center">

          <FiFolder
            size={55}
            className="mx-auto mb-5 text-cyan-400"
          />

          <h3 className="text-2xl font-semibold">
            Your Vault is Empty
          </h3>

          <p className="mt-3 text-gray-400">
            Uploaded files, AI generated images, exported chats
            and documents will appear here.
          </p>

        </div>

      </div>

    </div>
  );
};

export default Vault;