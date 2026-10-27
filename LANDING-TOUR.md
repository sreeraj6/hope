# Connected-home landing tour

The landing page now uses a full-width, scroll-driven Three.js property tour inspired by the supplied architectural reference.

Sequence: home overview → opening double gate → exterior CCTV close-up → control-room cutaway with four property-camera views and two equipment racks → whole-property network paths and coverage rings.

- `src/scene.mjs`: procedural property, materials, shadows, camera views, gate hinges, monitoring render targets, network animation, and lifecycle cleanup.
- `scripts/generate.mjs`: homepage narrative and five chapter controls.
- `src/styles.css`: pinned scene, responsive composition, static fallback, and reduced-motion layout.
- `src/main.mjs`: scene initialization and back/forward-cache recovery.
- `tests/e2e.spec.mjs`: scroll navigation, pause/resume, replay, and skip coverage.

The scene is a stylized architectural visualization built from local geometry, not a photorealistic scanned model. CCTV screens are simulated views of this same model; network rings illustrate planned coverage, not measured signal strength. No remote models, video feeds, or additional runtime dependencies are required.

Build: `npm run build`. Local preview: `npm run dev`. Source changes require re-running `node scripts/generate.mjs` because Vite serves the generated directory.
