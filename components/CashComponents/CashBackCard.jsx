import Image from "next/image";

export default function CashBackCard({ image, header, description }) {
  return (
    <div className="flex flex-row items-center justify-center border rounded-lg p-4 bg-[#19163b] border-[#836aff]">
        <Image src={image} alt="icon" className="h-16 w-16 mr-4 mb-24 md:mb-12" />
        <div className="flex flex-col">
            <h1 className="text-[#c293ff] text-2xl">{header}</h1>
            <p className="text-[#dad5df] text-xl">{description}</p>
        </div>
    </div>
  )
}
