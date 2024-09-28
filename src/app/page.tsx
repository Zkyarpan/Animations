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
import { FloatingDockDemo } from "@/components/Dock";
import { AnimatedGradientTextDemo } from "@/components/AnimatedText";
import { FollowingPointerDemo } from "../components/FollowingPointer";
import { WobbleCardDemo } from "../components/Card";
import { GridBackgroundDemo } from "@/components/Dotbackground";
import { ThreeDCardDemo } from "@/components/3Card";

export default function Home() {
  return (
    <>
      <GridBackgroundDemo />
      <AnimatedGradientTextDemo />
      <SparklesPreview />
      <BackgroundBeamsWithCollisionDemo />
      <FloatingDockDemo />
      <MacbookScrollDemo />
      <IconCloudDemo />
      <ThreeDCardDemo/>
      <FollowingPointerDemo />
      <GlobeDemo />
      <SignUp />
      <RippleDemo />
      <ParticlesDemo />
      <OrbitingCirclesDemo />
      <AnimatedBeamMultipleOutputDemo />
      <TextRevealCardPreview />
      <WobbleCardDemo />
    </>
  );
}
