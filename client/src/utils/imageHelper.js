/**
 * Utility to process user profile images for React previews, form components,
 * and resume templates consistently with appropriate ImageKit parameters and fallbacks.
 *
 * @param {string|File|null|undefined} image - The raw profile image string or File object.
 * @param {boolean} [removeBackground] - Explicit flag indicating if background removal is requested.
 *                                      If undefined, auto-detects from the image URL string if e-bgremove is present.
 * @returns {{ processedImage: string|null, originalImage: string|null }}
 */
export const getProcessedProfileImage = (image, removeBackground) => {
    if (!image) return { processedImage: null, originalImage: null };

    let processed = null;
    let original = null;

    if (typeof image === 'string') {
        // Normalize the base URL by stripping any existing transformation query parameters or paths
        original = image.split('?')[0]
                        .replace(/\/tr:[^/]+\//, '/')
                        .replace(/\/tr,[^/]+\//, '/');

        // Always check if background removal should be applied
        // Auto-detect if not explicitly provided
        const shouldRemoveBg = removeBackground !== undefined 
            ? !!removeBackground 
            : image.includes('e-bgremove');

        if (shouldRemoveBg) {
            // Standardized ImageKit transform with commas, NOT colons.
            processed = original + "?tr=w-800,e-bgremove";
        } else {
            processed = original + "?tr=w-300,h-300,fo-auto,f-png,q-100";
        }
    } else if (image instanceof File || (typeof image === 'object' && image !== null)) {
        // Fallback for newly uploaded file objects (create a local object URL for instant preview)
        try {
            processed = URL.createObjectURL(image);
            original = processed;
        } catch (e) {
            processed = null;
            original = null;
        }
    }

    return { processedImage: processed, originalImage: original };
};
