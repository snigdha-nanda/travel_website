// // postcss.config.js
// export default {
//     plugins: {
//         tailwindcss: {},
//         autoprefixer: {},
//     },
// };

// postcss.config.js
// export default {
//     plugins: {
//         'tailwindcss': {},  // This is the correct way to include Tailwind as a PostCSS plugin
//         autoprefixer: {},
//     },
// };

// export default {
//     plugins: [
//         require("@tailwindcss/postcss"),
//         require("autoprefixer"),
//     ]
// };

// import tailwindcss from "tailwindcss";
// import autoprefixer from "autoprefixer";

// export default {
//     plugins: [tailwindcss, autoprefixer],
// };
// export default {
//     plugins: {
//         tailwindcss: {},
//         autoprefixer: {},
//     },
// };

export default {
    plugins: {
        "@tailwindcss/postcss": {},
        autoprefixer: {},
    },
};
