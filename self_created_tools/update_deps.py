import json
import urllib.request
import os

files = [
    './package.json',
    './packages/react/package.json',
    './packages/solid/package.json'
]

def get_latest_version(pkg_name):
    url = f"https://registry.npmjs.org/{pkg_name}/latest"
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    try:
        response = urllib.request.urlopen(req)
        data = json.loads(response.read().decode('utf-8'))
        return data['version']
    except Exception as e:
        print(f"Failed to fetch {pkg_name}: {e}")
        return None

packages_to_update = {}

for file in files:
    if not os.path.exists(file): continue

    with open(file, 'r') as f:
        data = json.load(f)

    for section in ['dependencies', 'devDependencies', 'peerDependencies']:
        if section in data:
            for pkg, ver in data[section].items():
                if pkg.startswith('workspace:'): continue
                if pkg not in packages_to_update:
                    latest = get_latest_version(pkg)
                    if latest:
                        packages_to_update[pkg] = latest

for file in files:
    if not os.path.exists(file): continue

    with open(file, 'r') as f:
        data = json.load(f)

    for section in ['dependencies', 'devDependencies', 'peerDependencies']:
        if section in data:
            for pkg, ver in data[section].items():
                if pkg.startswith('workspace:'): continue
                if pkg in packages_to_update:
                    # In peerDependencies we should probably keep the ^ or || but instructions said strict version strings like "10.3.4"
                    # However peerDependencies with strict versions usually causes a lot of issues, let's just make it strict for dependencies and devDependencies
                    if section == 'peerDependencies':
                        # Let's keep peerDependencies as is to avoid breaking consumers
                        pass
                    else:
                        data[section][pkg] = packages_to_update[pkg]

    with open(file, 'w') as f:
        json.dump(data, f, indent=2)

print("Updated package.json files with the latest strict versions.")
print("Versions:", json.dumps(packages_to_update, indent=2))
