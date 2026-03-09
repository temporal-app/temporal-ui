import os
import re
import urllib.request
import json

def to_kebab_case(s):
    s = s.replace('Icon', '')
    if s == 'Settings2': return 'settings-2'
    if s == 'Trash2': return 'trash-2'
    s = re.sub('([a-z0-9])([A-Z])', r'\1-\2', s).lower()
    return s

def fetch_svg(icon_name):
    kebab = to_kebab_case(icon_name)
    url = f"https://unpkg.com/lucide-static@latest/icons/{kebab}.svg"
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    try:
        response = urllib.request.urlopen(req)
        svg = response.read().decode('utf-8')
        return svg
    except Exception as e:
        print(f"Failed to fetch {icon_name} ({kebab}): {e}")
        return None

def react_svg_attributes(svg):
    # Convert SVG attributes to React CamelCase
    # <svg xmlns="..." width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check">
    # to {...props}
    svg = re.sub(r'xmlns="[^"]+"', '{...props} xmlns="http://www.w3.org/2000/svg"', svg)
    svg = svg.replace('class="lucide', 'className="lucide')
    svg = svg.replace('stroke-width', 'strokeWidth')
    svg = svg.replace('stroke-linecap', 'strokeLinecap')
    svg = svg.replace('stroke-linejoin', 'strokeLinejoin')
    svg = svg.replace('fill-rule', 'fillRule')
    svg = svg.replace('clip-rule', 'clipRule')
    return svg

def solid_svg_attributes(svg):
    # solid-js uses similar syntax to HTML but JSX props
    svg = re.sub(r'xmlns="[^"]+"', '{...props} xmlns="http://www.w3.org/2000/svg"', svg)
    # in solid-js, stroke-width is stroke-width, but class is class
    return svg


def update_framework(framework, base_dir):
    lucide_pkg = "lucide-react" if framework == "react" else "lucide-solid"

    cmd = f"grep -rl '{lucide_pkg}' {base_dir}"
    files = os.popen(cmd).read().strip().split('\n')
    files = [f for f in files if f and not 'node_modules' in f and not 'package.json' in f and not 'tsdown.config.ts' in f and not '.test.' in f and not '.stories.' in f]

    # Track which icons we need globally across all files so we can just create a central `icons.tsx`
    all_icons = set()
    imports_per_file = {}

    for file in files:
        with open(file, 'r') as f:
            content = f.read()

        imports_per_file[file] = []
        matches = re.finditer(rf"import\s+{{([^}}]+)}}\s+from\s+['\"]{lucide_pkg}['\"];", content)
        for match in matches:
            imports = [i.strip() for i in match.group(1).split(',')]
            for i in imports:
                if i.startswith('type '):
                    continue
                name = i.split(' as ')[0].strip()
                if name:
                    all_icons.add(name)
                    imports_per_file[file].append(name)

    print(f"[{framework}] Need icons:", all_icons)

    # Create an icons.tsx file
    icons_file = os.path.join(base_dir, "components/icons.tsx")

    icons_content = ""
    if framework == "react":
        icons_content = "import React, { type ComponentProps } from 'react';\n\n"
        icons_content += "export type IconProps = ComponentProps<'svg'>;\n\n"
    else:
        icons_content = "import type { ComponentProps } from 'solid-js';\n\n"
        icons_content += "export type IconProps = ComponentProps<'svg'>;\n\n"

    for icon in sorted(list(all_icons)):
        svg = fetch_svg(icon)
        if not svg: continue

        if framework == "react":
            svg = react_svg_attributes(svg)
        else:
            svg = solid_svg_attributes(svg)

        # Extract <svg>...</svg>
        svg_match = re.search(r'(<svg[^>]*>.*</svg>)', svg, re.DOTALL)
        if svg_match:
            svg_body = svg_match.group(1)
            icons_content += f"export const {icon} = (props: IconProps) => (\n  {svg_body}\n);\n\n"

    with open(icons_file, 'w') as f:
        f.write(icons_content)

    print(f"[{framework}] Wrote {icons_file}")

    # Now replace the imports in the files
    for file, icons in imports_per_file.items():
        if not icons: continue
        with open(file, 'r') as f:
            content = f.read()

        # Replace the `lucide-*` import with `import { ... } from '@/components/icons';` or relative path
        # calculate relative path from `file` to `icons_file`

        file_dir = os.path.dirname(os.path.abspath(file))
        icons_file_path = os.path.abspath(icons_file)
        rel_path = os.path.relpath(icons_file_path, file_dir)
        # remove .tsx extension
        rel_path = rel_path[:-4]
        if not rel_path.startswith('.'):
            rel_path = './' + rel_path

        # we need to be careful. In Solid, there is `type LucideProps`
        content = re.sub(rf"import\s+{{([^}}]+)}}\s+from\s+['\"]{lucide_pkg}['\"];", r"import { \1 } from '" + rel_path + "';", content)

        # Replace LucideProps / LucideIcon with IconProps if they exist
        content = content.replace("LucideProps", "IconProps")
        content = content.replace("LucideIcon", "IconProps")

        # Write back
        with open(file, 'w') as f:
            f.write(content)

    # Also update stories and test files that might import them
    cmd_all = f"grep -rl '{lucide_pkg}' {base_dir}"
    all_files = os.popen(cmd_all).read().strip().split('\n')
    all_files = [f for f in all_files if f and not 'node_modules' in f]

    for file in all_files:
        with open(file, 'r') as f:
            content = f.read()

        if f"from '{lucide_pkg}'" in content or f'from "{lucide_pkg}"' in content:
            file_dir = os.path.dirname(os.path.abspath(file))
            icons_file_path = os.path.abspath(icons_file)
            rel_path = os.path.relpath(icons_file_path, file_dir)
            rel_path = rel_path[:-4]
            if not rel_path.startswith('.'):
                rel_path = './' + rel_path

            content = re.sub(rf"import\s+{{([^}}]+)}}\s+from\s+['\"]{lucide_pkg}['\"];", r"import { \1 } from '" + rel_path + "';", content)
            content = content.replace("LucideProps", "IconProps")
            content = content.replace("LucideIcon", "IconProps")
            with open(file, 'w') as f:
                f.write(content)

update_framework("react", "./packages/react/src")
update_framework("solid", "./packages/solid/src")
