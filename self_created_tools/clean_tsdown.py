import re

files = ['./packages/react/tsdown.config.ts', './packages/solid/tsdown.config.ts']

for file in files:
    with open(file, 'r') as f:
        content = f.read()

    content = content.replace('"lucide-react", ', '')
    content = content.replace('"lucide-solid", ', '')
    content = content.replace(', "lucide-react"', '')
    content = content.replace(', "lucide-solid"', '')
    content = content.replace('"lucide-react"', '')
    content = content.replace('"lucide-solid"', '')

    with open(file, 'w') as f:
        f.write(content)
