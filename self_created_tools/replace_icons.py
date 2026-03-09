import os
import re

def process_lucide_imports(framework, base_dir):
    lucide_pkg = "lucide-react" if framework == "react" else "lucide-solid"

    # We will need the actual SVGs. Since downloading them or parsing them from node_modules might be complex
    # right now, let's first list the files and imports to see what icons are actually used.

    cmd = f"grep -rl '{lucide_pkg}' {base_dir}"
    files = os.popen(cmd).read().strip().split('\n')
    files = [f for f in files if f and not 'node_modules' in f and not 'package.json' in f and not 'tsdown.config.ts' in f and not '.test.' in f and not '.stories.' in f]

    all_imports = set()

    for file in files:
        with open(file, 'r') as f:
            content = f.read()

        matches = re.finditer(rf"import\s+{{([^}}]+)}}\s+from\s+['\"]{lucide_pkg}['\"];", content)
        for match in matches:
            imports = [i.strip() for i in match.group(1).split(',')]
            for i in imports:
                if i.startswith('type '):
                    continue
                name = i.split(' as ')[0].strip()
                all_imports.add(name)

    return files, list(all_imports)

react_files, react_imports = process_lucide_imports("react", "./packages/react/src")
solid_files, solid_imports = process_lucide_imports("solid", "./packages/solid/src")

print("React Icons:", sorted(react_imports))
print("Solid Icons:", sorted(solid_imports))
