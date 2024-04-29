module.exports = {
    root: true,
    extends: '@react-native',
    rules: {
        'prettier/prettier': 0,
        'eqeqeq': 2,
        'comma-dangle': 0,
        curly: 0,
        'no-console': 1,
        'no-debugger': 1,
        'no-extra-semi': 2,
        'no-extra-parens': 1,
        'no-extra-boolean-cast': 1,
        'no-cond-assign': 2,
        'no-irregular-whitespace': 2,
        'no-undef': 0,
        'no-unused-vars': 0,
        'semi': 2,
        'semi-spacing': 2,
        'valid-jsdoc': 0,
        'radix': 0,
        'no-extend-native': 0,

        'react/display-name': 2,
        'react/forbid-prop-types': 1,
        'react/jsx-boolean-value': 1,
        'react/jsx-closing-bracket-location': 1,
        'react/jsx-curly-spacing': 1,
        'react/jsx-indent-props': 0,
        'react/jsx-max-props-per-line': 0,
        'react/jsx-no-duplicate-props': 1,
        'react/jsx-no-literals': 0,
        'react/jsx-no-undef': 1,
        'react/jsx-sort-props': 0,
        'react/jsx-uses-react': 1,
        'react/jsx-uses-vars': 1,
        'react/jsx-wrap-multilines': 0,
        'react/no-danger': 1,
        'react/no-did-mount-set-state': 1,
        'react/no-did-update-set-state': 1,
        'react/no-direct-mutation-state': 1,
        'react/no-multi-comp': 1,
        'react/no-set-state': 0,
        'react/no-unknown-property': 1,
        'react/prop-types': 0,
        'react/react-in-jsx-scope': 0,
        'react/self-closing-comp': 1,
        'react/sort-comp': 1,
    },
    'overrides': [
        {
            'files': ['*.ts', '*.tsx'],
            'rules': {
                'no-dupe-class-members': 'off'
            }
        }
    ]
};
