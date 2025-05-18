import Image from "next/image";

export default function HeroText() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-100 to-white px-4">
      <div className="text-center text-3xl sm:text-4xl md:text-5xl font-semibold leading-snug text-black">
        <p>
          I'm <span className="italic text-gray-600">Hanzo</span>{' '}
          <span className="inline-block align-middle">
            <Image
              src="/face.png" // Replace with actual image
              alt="face"
              width={180}
              height={10}
              className="rounded-4xl inline-block mx-1 border border-black"
            />
          </span>
          ,
        </p>
        <p>
          a Product{' '}
          <span className="inline-block align-middle">
            <Image
              src="/color-icon.png" // Replace with actual image
              alt="product icon"
              width={30}
              height={30}
              className="rounded-full inline-block mx-1"
            />
          </span>{' '}
          <span className="italic text-gray-600">Designer</span>{' '}
        </p>
        <p>
          based in Tokyo{' '}
          <span className="inline-block align-middle">
            <Image
              src="/tokyo.png" // Replace with actual image
              alt="Tokyo"
              width={30}
              height={30}
              className="rounded-full inline-block mx-1"
            />
          </span>
        </p>
      </div>
    </div>
  );
}
