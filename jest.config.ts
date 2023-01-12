/* eslint-disable import/no-extraneous-dependencies */
import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
    clearMocks: true,
    collectCoverage: true,
    collectCoverageFrom: [
        'src/data/context/*.tsx',
        '!src/data/context/index.tsx',
        'src/pages/**/*.tsx',
        'src/ui/components/**/*.tsx',
    ],
    coverageDirectory: 'coverage',
    coverageReporters: ['text-summary', 'lcov'],
    moduleFileExtensions: ['tsx', 'ts', 'js', 'json'],
    preset: 'ts-jest',
    roots: ['<rootDir>/src'],
    testMatch: ['<rootDir>/src/__tests__/**/*.spec.{ts,tsx}'],
    transformIgnorePatterns: ['<rootDir>/node_modules/'],
};

export default config;
