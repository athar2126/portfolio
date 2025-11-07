export function BackgroundGrid() {
  return (
    <div className="absolute inset-0 z-0 [background-image:linear-gradient(to_right,hsla(0,0%,58%,.3)_1px,transparent_1px),linear-gradient(to_bottom,hsla(0,0%,58%,.3)_1px,transparent_1px)] dark:[background-image:linear-gradient(to_right,theme(colors.zinc.700)_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.zinc.700)_1px,transparent_1px)] [background-size:50.5px_50.5px]"
          style={{
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 60% at 50% 50%, #000 30%, transparent 70%)",
            maskImage:
              "radial-gradient(ellipse 80% 60% at 50% 50%, #000 30%, transparent 70%)",
          }}>
           
    </div>
  );
}

export function DottedBackground() {
  return (
    <>
    <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.3)_1.2px,transparent_0)] dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.5)_1px,transparent_0)] bg-[size:30px_30px]"
            style={{
                WebkitMaskImage:
                    "radial-gradient(ellipse 80% 70% at 50% 50%, #000 30%, transparent 70%)",
                maskImage:
                    "radial-gradient(ellipse 80% 70% at 50% 50%, #000 30%, transparent 70%)",
          }}>
    </div>
    </>
  )
}
