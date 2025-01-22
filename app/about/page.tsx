import Image from "next/image"
import { Shield, User } from "lucide-react"

export default function About() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-5xl font-bold mb-12 text-center text-black">About Us</h1>

      <section className="mb-16">
        <div className="flex items-center justify-center mb-6">
          <Shield size={48} className="text-[#AE1E23] mr-4" />
          <h2 className="text-4xl font-bold text-black">About Defense Associates</h2>
        </div>
        <div className="bg-[#2A2A2A] p-8 rounded-lg shadow-lg">
          <p className="text-lg leading-relaxed text-[#E0E0E0] mb-4">
          Defense Associates, a Service-Disabled, Veteran-Owned Small Business based in Huntsville, Alabama, provides business development consulting services to technical firms in the defense sector. Specializing in Army Aviation and Electronic Warfare, the company supports clients with tasks such as on-site representation, opportunity identification, and capabilities development, helping them tailor their products and services for the Army and Department of Defense contractors.
          </p>
        </div>
      </section>

      <section>
        <div className="flex items-center justify-center mb-6">
          <User size={48} className="text-[#AE1E23] mr-4" />
          <h2 className="text-4xl font-bold text-black">About William "Buck" Clemons</h2>
        </div>
        <div className="bg-[#2A2A2A] p-8 rounded-lg shadow-lg">
          <div className="flex flex-col md:flex-row items-center md:items-start mb-6">
            <Image
              src="https://imagedelivery.net/_3BvaaU0nebybABLZIjMPA/e24a6f4d-2147-4f80-773d-41bf5489e900/public"
              alt="William Buck Clemons"
              width={200}
              height={200}
              className="rounded-full mb-4 md:mb-0 md:mr-6"
            />
            <div>
              <p className="text-lg leading-relaxed text-[#E0E0E0] mb-4">
                Buck Clemons retired from the US Army after twenty years as an AH-64 Aviator and is a business
                development consultant for the Defense Industry with a focus on Army Aviation, manned or unmanned, and
                Electronic Warfare. Based in Huntsville, Alabama, he specializes in assisting companies navigating the
                complex acquisition process with requirements generation, program manager coordination, and Science and
                Technology (S&T) development.
              </p>
              <p className="text-lg leading-relaxed text-[#E0E0E0] mb-4">
                He has developed contracts worth several million dollars on everything from oil coolers to engineering
                services and has most recently worked on commercializing technology out of the university system. He has
                served on the board of directors for the Association of Old Crows, the Vertical Lift Consortium, and
                currently serves on the board of the Redevelopment Authority for the City of Madison.
              </p>
              <p className="text-lg leading-relaxed text-[#E0E0E0]">
                He has a Bachelor's degree in History and a Master's degree in Computer Resource and IT Management. He
                currently lives in Madison, Alabama with his wife.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

