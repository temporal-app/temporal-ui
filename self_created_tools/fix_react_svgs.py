import re
import os

icons_file = "./packages/react/src/components/icons.tsx"
with open(icons_file, 'r') as f:
    content = f.read()

# React needs camelCase for SVG props
props_to_camel = [
    ('stroke-width', 'strokeWidth'),
    ('stroke-linecap', 'strokeLinecap'),
    ('stroke-linejoin', 'strokeLinejoin'),
    ('fill-rule', 'fillRule'),
    ('clip-rule', 'clipRule'),
    ('class=', 'className=')
]

for prop, camel in props_to_camel:
    content = content.replace(prop, camel)

# remove static class
content = re.sub(r'className="lucide lucide-[^"]+"', 'className={props.className}', content)

# inject {...props} to SVG if missing
# <svg xmlns="http://www.w3.org/2000/svg" -> <svg {...props} xmlns="http://www.w3.org/2000/svg"
# we did this in the python script but let's make sure it handles existing classes correctly
content = content.replace('{...props} xmlns="http://www.w3.org/2000/svg"', 'xmlns="http://www.w3.org/2000/svg" {...props}')

with open(icons_file, 'w') as f:
    f.write(content)

# Same for solid but keep attributes as is except for className and inject {...props}
icons_file_solid = "./packages/solid/src/components/icons.tsx"
with open(icons_file_solid, 'r') as f:
    content = f.read()

content = content.replace('class=', 'class={props.class} data-lucide-class=')
content = content.replace('{...props} xmlns="http://www.w3.org/2000/svg"', 'xmlns="http://www.w3.org/2000/svg" {...props}')

with open(icons_file_solid, 'w') as f:
    f.write(content)
