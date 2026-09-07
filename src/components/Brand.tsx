import Image from "next/image";

export default function Brand() {
  return (
    <span className="brand" style={{ position: "relative", display: "block", width: 152, height: 74, overflow: "hidden", clipPath: "ellipse(49.5% 48.5% at 50% 50%)" }}>
      <Image
        src="/Prbka_-_kopia.jpg"
        alt="DOLOMIT S.A. — logo firmowe"
        width={1288}
        height={719}
        sizes="644px"
        loading="eager"
        className="brand-original"
        style={{ position: "absolute", width: 644, height: 359.5, maxWidth: "none", left: -492, top: -270 }}
      />
    </span>
  );
}
