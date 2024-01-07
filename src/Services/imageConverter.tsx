// Base64Image.jsx
import { createSignal, onCleanup } from 'solid-js';

function Base64Image( base64String : string) {
    const [imageSrc, setImageSrc] = createSignal('');

    // Load the image when the component mounts
    onCleanup(() => {
        const img = new Image();
        img.onload = () => setImageSrc(img.src);
        img.src = `data:image/png;base64,${base64String}`;
    });

    return <img src={imageSrc()} alt="Base64 Image" />;
}

// Example usage in a SolidJS component:
const base64String = '...'; // Your Base64-encoded image string
//<Base64Image base64String={base64String} />;
