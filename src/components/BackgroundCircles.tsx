export default function BackgroundCircles() {
  return (
    <section className="relative flex justify-center items-center">
      <div className="absolute mt-52 border border-[#333] rounded-full h-[300px] w-[300px]" />
      <div className="absolute mt-52 border border-[#333] rounded-full h-[500px] w-[500px]" />
      <div className="absolute mt-52 border border-[#F7AB0A] opacity-20 rounded-full h-[650px] w-[650px] animate-pulse" />
      <div className="absolute mt-52 border border-[#333] rounded-full h-[800px] w-[800px]" />
    </section>
  )
}