import MainSection from "@/components/MainSection";
import { BentoDemo } from "@/components/SecondSection";
import { AnimatedListDemo } from "@/components/AnimateList";
import { GlobeDemo } from "@/components/globe";
import { IconCloudDemo } from "@/components/Interactive";
import SignUp from "@/components/Signup";
import { RippleDemo } from "@/components/Ripple";
import ParticlesDemo from "@/components/Particles";

export default function Home() {
  return (
    <>
      {/* <MainSection /> */}
      {/* <BentoDemo /> */}
      {/* <AnimatedListDemo />
      <GlobeDemo /> */}
      <IconCloudDemo />
      <SignUp />
      <RippleDemo />
      <ParticlesDemo />
    </>
  );
}
