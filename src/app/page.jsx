import MaskCursor from "../components/Hero";
import Description from "../components/Description";
import Projects from "../components/ProjectPreview";
import SlidingGallery from "../components/SlidingGallery";
import PageTransition from "../components/PageTransition";

export default function Home() {
  return (
    <>
      <PageTransition pageName="Home">
        <MaskCursor />
        <Description />
        <Projects />
        <SlidingGallery />
      </PageTransition>
    </>
  );
}
