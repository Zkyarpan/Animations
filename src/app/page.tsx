import MainSection from "@/components/MainSection";
import { BentoDemo } from "@/components/SecondSection";
import { AnimatedListDemo } from "@/components/AnimateList";
import { GlobeDemo } from "@/components/globe";
import { IconCloudDemo } from "@/components/Interactive";
import SignUp from "@/components/Signup";
import { RippleDemo } from "@/components/Ripple";
import ParticlesDemo from "@/components/Particles";
import { OrbitingCirclesDemo } from "@/components/Orbit";
import { AnimatedBeamMultipleOutputDemo } from "@/components/animatedBeam";
import { BackgroundBeamsWithCollisionDemo } from "../components/BackgroundBeam";

export default function Home() {
  return (
    <>
      {/* <MainSection /> */}
      {/* <BentoDemo /> */}
      {/* <AnimatedListDemo />
      <GlobeDemo /> */}
      <BackgroundBeamsWithCollisionDemo />
      <IconCloudDemo />
      <SignUp />
      <RippleDemo />
      <ParticlesDemo />
      <OrbitingCirclesDemo />
      <AnimatedBeamMultipleOutputDemo />
    </>
  );
}
