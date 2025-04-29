import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import jsxA11Y from "eslint-plugin-jsx-a11y";
import _import from "eslint-plugin-import";
import importHelpers from "eslint-plugin-import-helpers";
import { fixupPluginRules } from "@eslint/compat";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [...compat.extends(
    "next/core-web-vitals",
    "airbnb",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
), {
    plugins: {
        react,
        "react-hooks": fixupPluginRules(reactHooks),
        "jsx-a11y": jsxA11Y,
        import: fixupPluginRules(_import),
        "import-helpers": importHelpers,
    },

    settings: {
        "import/resolver": {
            typescript: {},
        },
    },

    rules: {
        "@typescript-eslint/ban-ts-comment": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",

        "@typescript-eslint/no-unused-vars": ["error", {
            argsIgnorePattern: "_",
        }],

        "@typescript-eslint/no-use-before-define": "error",
        "consistent-return": "off",
        "import/no-unresolved": "error",
        "import/prefer-default-export": "off",

        "import/extensions": ["error", "ignorePackages", {
            js: "never",
            jsx: "never",
            ts: "never",
            tsx: "never",
        }],

        "import/order": "off",

        "import-helpers/order-imports": ["warn", {
            newlinesBetween: "always",
            groups: ["module", "/^@//", ["parent", "sibling", "index"]],

            alphabetize: {
                order: "asc",
                ignoreCase: true,
            },
        }],

        "no-console": "warn",
        "no-empty-function": "off",
        "no-nested-ternary": "off",
        "no-plusplus": "off",
        "no-restricted-syntax": "off",
        "no-shadow": "off",
        "no-unused-expressions": "off",
        "prettier/prettier": "warn"/
        "react-hooks/exhaustive-deps": "warn",
        "react-hooks/rules-of-hooks": "error",
        "react/button-has-type": "off",
        "react/function-component-definition": "off",

        "react/jsx-filename-extension": [1, {
            extensions: [".tsx", ".jsx"],
        }],

        "react/jsx-props-no-spreading": "off",
        "react/no-unused-prop-types": "off",
        "react/prop-types": "off",
        "react/react-in-jsx-scope": "off",
        "react/require-default-props": "off",

        "jsx-a11y/alt-text": ["warn", {
            elements: ["img"],
            img: ["Image"],
        }],

        "jsx-a11y/aria-props": "warn",
        "jsx-a11y/aria-proptypes": "warn",
        "jsx-a11y/aria-unsupported-elements": "warn",
        "jsx-a11y/label-has-associated-control": "off",
        "jsx-a11y/role-has-required-aria-props": "warn",
        "jsx-a11y/role-supports-aria-props": "warn",
    },
}];
