import Image from "next/image";

export default function ImageComponent({ pics }: { pics: string[] }) {
  return (
    <div className="grid sm:grid-cols-3 gap-2">
      {pics.map((pic, i) => (
        <div key={i}>
          <Image src={pic} alt={pic} width={1080} height={1080} />
        </div>
      ))}
    </div>
  );
}
