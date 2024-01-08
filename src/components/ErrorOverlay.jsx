import AnimatedPage from "./AnimatedPage";
import '../css/ErrorOverlay.css';

function ErrorOverlay() {
    return (
        <AnimatedPage className={"error-overlay"}>
            <h2>Error: Page not loading correctly</h2>
            <p>Please refresh the page and try again later.</p>
        </AnimatedPage>
    )
}

export default ErrorOverlay;