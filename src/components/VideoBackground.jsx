import video1 from "../assets/video.mp4";

export default function VideoBackground() {
  return (
    <div className="relative w-[100%] h-screen md:hidden">
      <video autoPlay  muted loop src={video1} className="w-full h-full" />
    </div>
  );
}
