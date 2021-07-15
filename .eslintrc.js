/* eslint-disable @typescript-eslint/object-curly-spacing */

module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint',
    ],
    parserOptions: {
        project: './tsconfig.eslint.json',
        ecmaVersion: 2019,
        lib: [
            'es2019',
            // 'dom',
        ],
    },
    ecmaFeatures: {
        generators: true, // must be turned on, otherwise generators assumed to be `any`s. See https://tinyurl.com/y78weg52
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
    ],
    globals: {
        module: true, // ignore "`module` is not defined" errors. See https://tinyurl.com/y4mux4x8
        require: true,
    },
    rules: {
        'space-in-parens': 'error',
        'arrow-spacing': 'error',
        'space-infix-ops': 'off',
        '@typescript-eslint/space-infix-ops': ['error', { 'int32Hint': false }],
        'no-implicit-coercion': 'error',
        'no-empty': 'off',
        '@typescript-eslint/comma-spacing': 'error',
        'comma-dangle': ['error', {
            'arrays': 'always-multiline',
            'objects': 'always-multiline',
            'imports': 'always-multiline',
            'exports': 'always-multiline',
            'functions': 'always-multiline',
        }],
        'no-extra-parens': ['error', 'functions'],
        // 'max-len': ['error', { 'comments': 80, 'code': 2000 }],
        'indent': 'off',
        'radix': ['error', 'always'],
        '@typescript-eslint/indent': ['error', 4, { 'flatTernaryExpressions': true, 'FunctionExpression': { 'parameters': 1 } }],
        'quotes': ['error', 'single', { avoidEscape: true, allowTemplateLiterals: true }],
        'object-curly-spacing': 'off',
        '@typescript-eslint/object-curly-spacing': ['error'],
        '@typescript-eslint/strict-boolean-expressions': [2, { allowString: false, allowNumber: false, allowNullableObject: false }],
        'no-unused-vars': 0,
        '@typescript-eslint/no-unused-vars': ['off', { 'argsIgnorePattern': '^_' }],
        '@typescript-eslint/explicit-module-boundary-types': 'error',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/no-namespace': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        'no-implicit-dependencies': 'off',
        'no-labels': 'error',
        'no-unused-labels': 'error',
        '@typescript-eslint/no-empty-interface': 0, // useful for abbreviated aliases like `Group = Id.Type<"group">`
        '@typescript-eslint/no-unsafe-member-access': 0,
    },
};