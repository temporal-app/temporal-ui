import os

files = [
    './packages/react/vite.config.mts',
    './packages/react/tsconfig.json'
]

for file in files:
    if os.path.exists(file):
        with open(file, 'r') as f:
            content = f.read()

        # replace relative node_modules path with actual module resolution path
        content = content.replace('"./node_modules/@testing-library/jest-dom/vitest"', '"@testing-library/jest-dom/vitest"')

        with open(file, 'w') as f:
            f.write(content)
