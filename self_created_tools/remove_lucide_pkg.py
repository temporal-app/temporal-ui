import json

files = ['./packages/react/package.json', './packages/solid/package.json']

for file in files:
    with open(file, 'r') as f:
        data = json.load(f)

    for section in ['dependencies', 'devDependencies']:
        if section in data:
            if 'lucide-react' in data[section]:
                del data[section]['lucide-react']
            if 'lucide-solid' in data[section]:
                del data[section]['lucide-solid']

    with open(file, 'w') as f:
        json.dump(data, f, indent=2)
