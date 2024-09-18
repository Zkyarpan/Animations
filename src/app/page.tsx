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
      <BackgroundBeamsWithCollisionDemo />
      <IconCloudDemo />
      <GlobeDemo />
      <SignUp />
      <RippleDemo />
      <ParticlesDemo />
      <OrbitingCirclesDemo />
      <AnimatedBeamMultipleOutputDemo />
    </>
  );
}
