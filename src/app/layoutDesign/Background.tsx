export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 w-screen h-screen bg-[#EDEDED] overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #000000 1px, transparent 1px)
            linear-gradient(to bottom, #000000 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />
    </div>
  );
}