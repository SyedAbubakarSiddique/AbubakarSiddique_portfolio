import { lazy, Suspense } from "react";
import "./App.css";

const CharacterModel = lazy(() => import("./components/Character"));
const MainContainer = lazy(() => import("./components/MainContainer"));
import { LoadingProvider } from "./context/LoadingProvider";
import { SoundProvider } from "./components/SoundContext";
import ErrorBoundary from "./components/ErrorBoundary";

const App = () => {
  return (
    <>
      <div className="liquid-bg-container">
        <div className="liquid-orb orb1"></div>
        <div className="liquid-orb orb2"></div>
        <div className="liquid-orb orb3"></div>
      </div>
      <SoundProvider>
        <LoadingProvider>
          <Suspense>
            <MainContainer>
              <ErrorBoundary fallback={null}>
                <Suspense>
                  <CharacterModel />
                </Suspense>
              </ErrorBoundary>
            </MainContainer>
          </Suspense>
        </LoadingProvider>
      </SoundProvider>
    </>
  );
};

export default App;
