export default [
    {
        files: ['**/*.ts', '**/*.tsx'],
        languageOptions: {
            parser: '@typescript-eslint/parser',
            parserOptions: {
                project: './tsconfig.json',
                tsconfigRootDir: __dirname,
                sourceType: 'module',
                ecmaVersion: 2021,
            },
        },
        plugins: {
            '@typescript-eslint': require('@typescript-eslint/eslint-plugin'),
            import: require('eslint-plugin-import'),
            prettier: require('eslint-plugin-prettier'),
        },
        rules: {
            ...require('eslint-config-airbnb-typescript/base').rules,
            'prettier/prettier': 'error',
            '@typescript-eslint/no-unused-vars': [
                'warn',
                { argsIgnorePattern: '^_' },
            ],
            'import/prefer-default-export': 'off', // 라이브러리 설정에 따라 비활성화
            'no-console':
                process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        },
        settings: {
            'import/resolver': {
                node: {
                    extensions: ['.js', '.jsx', '.ts', '.tsx'],
                },
            },
        },
        env: {
            browser: true,
            node: true,
        },
    },
];
