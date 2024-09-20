import { GlobeDemo } from "@/components/globe";
import { IconCloudDemo } from "@/components/Interactive";
import SignUp from "@/components/Signup";
import { RippleDemo } from "@/components/Ripple";
import ParticlesDemo from "@/components/Particles";
import { OrbitingCirclesDemo } from "@/components/Orbit";
import { AnimatedBeamMultipleOutputDemo } from "@/components/animatedBeam";
import { BackgroundBeamsWithCollisionDemo } from "../components/BackgroundBeam";
import { SparklesPreview } from "../components/Sparkles";
import { TextRevealCardPreview } from "../components/RevealText";
import { MacbookScrollDemo } from "../components/MacbookScrool";

export default function Home() {
  return (
    <>
      <SparklesPreview />
      <BackgroundBeamsWithCollisionDemo />
      <MacbookScrollDemo />
      <IconCloudDemo />
      <GlobeDemo />
      <SignUp />
      <RippleDemo />
      <ParticlesDemo />
      <OrbitingCirclesDemo />
      <AnimatedBeamMultipleOutputDemo />
      <TextRevealCardPreview />
    </>
  );
}
